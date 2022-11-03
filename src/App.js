import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import SiteBar from './components/SiteBar'
import Background from './components/Background'
import AuthContextProvider from './contexts/authContext'
import ProductContextProvider from './contexts/productsContext'

function App() {
	return (
		<ProductContextProvider>
			<AuthContextProvider>
				<Background />
				<SiteBar />
			</AuthContextProvider>
		</ProductContextProvider>
	)
}

export default App
