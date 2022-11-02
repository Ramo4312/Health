import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PasswordRecovery from './pages/PasswordRecovery'
import NotFoundPage from './pages/NotFoundPage'
import CreateDataPerson from './components/posts/CreateDataPerson'
import Basket from './pages/Basket'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' />
			<Route path='*' element={<NotFoundPage />} />
			<Route path='register' element={<RegistrationPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/recovery' element={<PasswordRecovery />} />
			<Route path='/create-data-person' element={<CreateDataPerson />} />
			<Route path='/basket' element={<Basket />} />
		</Routes>
	)
}

export default MainRoutes
