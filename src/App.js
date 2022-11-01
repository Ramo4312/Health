import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import SiteBar from './components/SiteBar'
import Background from './components/Background'

function App() {
	return (
		<div>
			<Background />
			<SiteBar />
		</div>
	)
}

export default App
