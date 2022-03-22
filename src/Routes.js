import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import ServiceTerms from './test'

const RoutesList = () => (
  <Routes>
    <Route path='/' element={<ServiceTerms />} />
  </Routes>
)

export default RoutesList