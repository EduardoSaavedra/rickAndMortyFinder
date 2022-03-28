import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import CharacterList from './views'
import SingleCharacter from './views/singleCharacter'

const RoutesList = () => (
  <Routes>
    <Route path='/' element={<CharacterList />} />
    <Route path="/personaje/:id" element={<SingleCharacter />} />
  </Routes>
)

export default RoutesList