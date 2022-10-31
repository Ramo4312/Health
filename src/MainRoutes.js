import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' />
			<Route path='reg' element={<RegistrationPage />} />
			<Route path='/' />
			<Route path='/' />
			<Route path='/' />
			<Route path='/' />
		</Routes>
	)
}

export default MainRoutes
