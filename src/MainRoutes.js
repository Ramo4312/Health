import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PasswordRecovery from './pages/PasswordRecovery'
import NotFoundPage from './pages/NotFoundPage'
import CreateDataPerson from './components/posts/CreateDataPerson'
import SiteBar from './components/SiteBar'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' />
			<Route path='register' element={<RegistrationPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/recovery' element={<PasswordRecovery />} />
			<Route path='*' element={<NotFoundPage />} />
			<Route path='/create-data-person' element={<CreateDataPerson />} />
		</Routes>
	)
}

export default MainRoutes
