import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='reg' element={<RegistrationPage />} />
			<Route path='/' />
			<Route path='/' />
			<Route path='/' />
			<Route path='/' />
		</Routes>
	)
}

export default MainRoutes
