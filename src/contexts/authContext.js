import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const authContext = createContext()
export const useAuth = () => useContext(authContext)

const API = 'http://34.28.29.118/api/v1/'

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const config = {
		headers: { 'Content-Type': 'multipart/form-data' },
	}

	const registration = async (
		name,
		surname,
		username,
		email,
		password,
		password2
	) => {
		let formData = new FormData()
		formData.append('name', name)
		formData.append('surname', surname)
		formData.append('username', username)
		formData.append('email', email)
		formData.append('password', password)
		formData.append('password2', password2)

		try {
			const res = await axios.post(`${API}accounts/register/`, formData, config)
			navigate('/login')
			console.log(res.data)
		} catch (err) {
			setError('Error occured')
			// console.log(err)
		}
	}

	const login = async (nickname, email, password) => {
		let formData = new FormData()
		formData.append('nickname', nickname)
		formData.append('email', email)
		formData.append('password', password)

		try {
			const res = await axios.post(`${API}accounts/login/`, formData)

			navigate('/')
			console.log(res.data)

			localStorage.setItem('token', JSON.stringify(res.data))
			localStorage.setItem('nickname', JSON.stringify(nickname))
			setUser(nickname)
		} catch (error) {
			setError('WRONG USERNAME OR PASSWORD', error)
		}
	}

	async function checkAuthorization() {
		let token = JSON.parse(localStorage.getItem('token'))

		try {
			const Authorization = `Bearer ${token.access}`

			let res = await axios.post(
				`${API}api/token/refresh/`,
				{ refresh: token.refresh },
				{ headers: { Authorization } }
			)
			localStorage.setItem(
				'token',
				JSON.stringify({ refresh: token.refresh, access: res.data.access })
			)

			let username = localStorage.getItem('username')
			setUser(username)
		} catch (error) {
			console.error(error)
			logout()
		}
	}

	function logout() {
		localStorage.removeItem('token')
		localStorage.removeItem('name')
		setUser('')
		navigate('/')
	}

	const values = {
		user,
		error,

		registration,
		login,
		logout,
	}

	return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContextProvider
