import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import PasswordRecovery from './pages/PasswordRecovery'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import Weather from './pages/WeatherPage'
import MainPage from './pages/MainPage'
import RecipesPage from './pages/RecipesPage'

const MainRoutes = () => {
	const routes = [
		{
			path: '*',
			element: <NotFoundPage />,
			id: 1,
		},
		{
			path: '/',
			element: <HomePage />,
			id: 2,
		},
		{
			path: '/register',
			element: <RegistrationPage />,
			id: 3,
		},
		{
			path: '/login',
			element: <LoginPage />,
			id: 4,
		},
		{
			path: '/recovery',
			element: <PasswordRecovery />,
			id: 5,
		},
		{
			path: '/weather',
			element: <Weather />,
			id: 6,
		},
		{
			path: '/profile',
			element: <MainPage />,
			id: 7,
		},
		{
			path: '/recipes',
			element: <RecipesPage />,
			id: 7,
		},
	]
	return (
		<Routes>
			{routes.map(item => (
				<Route key={item.id} path={item.path} element={item.element} />
			))}
		</Routes>
	)
}

export default MainRoutes
