import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import CharacterList from './views'

const RoutesList = () => (
  <Routes>
    <Route path='/' element={<CharacterList />} />
  </Routes>
)

export default RoutesList