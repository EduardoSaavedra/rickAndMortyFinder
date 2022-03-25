import BaseStore from './baseStore'

class CharactersStore extends BaseStore {
  constructor () {
    super()
    this.charactersList = []
    this.totalPages = 1
    this.totalItems = 0
    this.currentPage = 1

    this.actions = {
      CHARACTERS_RECEIVED: action => {
        this.setCharactersList(action.data)
      }
    }
  } 

  setCharactersList ({info, results}) {
    console.log(info)
    const {pages, count} = info
    this.charactersList = results
    this.totalPages = pages
    this.totalItems = count
  }

  getCharactersList () {
    return this.charactersList
  }
}

export default CharactersStore.getInstance()