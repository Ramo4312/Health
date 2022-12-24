import React from 'react'
import AuthContextProvider from './contexts/authContext'
import MainRoutes from './MainRoutes'
import { PersonContextProvider } from './contexts/peopleDataContext'
import { AnimateBackground } from './components/AnimateBackground'

function App() {
	return (
		<div onContextMenu={e => e.preventDefault()}>
			<PersonContextProvider>
				<AuthContextProvider>
					<AnimateBackground />
					<MainRoutes />
				</AuthContextProvider>
			</PersonContextProvider>
		</div>
	)
}

export default App
