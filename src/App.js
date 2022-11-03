import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import SiteBar from './components/SiteBar'
import Background from './components/Background'
import AuthContextProvider from './contexts/authContext'

function App() {
	return (
		<AuthContextProvider>
			<Background />
			<SiteBar />
		</AuthContextProvider>
	)
}

export default App
