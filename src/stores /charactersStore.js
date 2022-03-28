import BaseStore from './baseStore'

class CharactersStore extends BaseStore {
  constructor () {
    super()
    this.charactersList = []
    this.totalPages = 1
    this.totalItems = 0
    this.currentPage = 1
    this.characterInfo = {}
    this.actions = {
      CHARACTERS_RECEIVED: action => {
        this.setCharactersList(action.data)
      },
      CHARACTER_RECEIVED: action => {
        this.setCharacter(action.data)      
      }
    }
  } 

  setCharactersList ({info, results}) {
    const {pages, count} = info
    this.charactersList = results
    this.totalPages = pages
    this.totalItems = count
  }

  setCharacter (character) {
    this.characterInfo= character
  }

  getCharacter () {
    return this.characterInfo
  }

  getCharactersList () {
    return this.charactersList
  }

  getTotalPages () {
    return this.totalPages
  }

  getTotalItems () {
    return this.totalItems
  }
}

export default CharactersStore.getInstance()
