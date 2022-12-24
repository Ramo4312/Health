import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PasswordRecovery from './pages/PasswordRecovery'
import NotFoundPage from './pages/NotFoundPage'
import CreateDataPerson from './components/products/CreateDataPerson'
import HomePage from './pages/HomePage'
import Basket from './pages/Basket'
import Market from './pages/Market'
import Weather from './pages/WeatherPage'
import Favorites from './pages/Favorites'
import EditPerson from './pages/EditPerson'
import EditSpecifications from './components/EditSpecifications'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import MainPage from './pages/MainPage'
import KcalCalcPage from './pages/calacPage/KcalCalcPage'
import DishesCalc from './pages/calacPage/DishesCalc'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
			<Route path='register' element={<RegistrationPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/recovery' element={<PasswordRecovery />} />
			<Route path='/create-data-person' element={<CreateDataPerson />} />
			<Route path='/basket' element={<Basket />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='/market' element={<Market />} />
			<Route path='/weather' element={<Weather />} />
			<Route path='/profile' element={<MainPage />} />
			<Route path='/calc' element={<KcalCalcPage/>} />
			<Route path='/dishes' element={<DishesCalc/>} />
		</Routes>
	)
}

export default MainRoutes
