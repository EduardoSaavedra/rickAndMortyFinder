import React, { useEffect, useState } from 'react'

import CharactersActions from 'actions/charactersActions'
import CharactersStore from '/Users/usuario-rtd/Desktop/challenge/src/stores /charactersStore.js'
import Character from './characters'

const getCurrentState = () => CharactersStore.getCharactersList()

const CharacterList = () => {
const [characters, setCharacters] = useState(getCurrentState())
  useEffect(() => {
    CharactersActions.getCharactersList()
    
    CharactersStore.addChangeListener(_onChange)

    return () => {
      CharactersStore.removeChangeListener(_onChange)
    }
  }, [])

  const _onChange = () => {
    setCharacters(getCurrentState())
  }

  return (
    <Character characters={characters}/>    
  )
}

export default CharacterList
