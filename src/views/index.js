import React, { useEffect, useState } from 'react'

import CharactersActions from 'actions/charactersActions'
import CharactersStore from '/Users/usuario-rtd/Desktop/challenge/src/stores /charactersStore.js'

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
    <p>
      Declara Servicios Digitales Enconta, ser una sociedad Anónima de Capital Variable
      debidamente constituida en México, cuyo nombre comercial es “ENCONTA”. Por su parte el
      “Cliente” en este acto declara ser una persona física, mayor de edad y contar con
      capacidad para contratar y contraer toda clase de obligaciones y que entiende plenamente
      el contenido de los presentes Términos y Condiciones. Por lo que, tanto el “Cliente” como
    </p>
  )
}

export default CharacterList
