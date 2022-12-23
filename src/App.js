import React from 'react'
import AuthContextProvider from './contexts/authContext'
import ProductContextProvider from './contexts/productsContext'
import FavoriteContextProvider from './contexts/favotiteContext'
import BasketContextProvider from './contexts/basketContext'
import MainRoutes from './MainRoutes'
import { PersonContextProvider } from './contexts/peopleDataContext'
import { AnimateBackground } from './components/AnimateBackground'

function App() {
	return (
		<BasketContextProvider>
			<FavoriteContextProvider>
				<PersonContextProvider>
					<ProductContextProvider>
						<AuthContextProvider>
							<AnimateBackground />
							<MainRoutes />
						</AuthContextProvider>
					</ProductContextProvider>
				</PersonContextProvider>
			</FavoriteContextProvider>
		</BasketContextProvider>
	)
}

export default App
