import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const authContext = createContext()
export const useAuth = () => useContext(authContext)

const API = 'http://34.121.113.174/accounts/'

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const config = {
		headers: { 'Content-Type': 'application/json' },
	}

	const registration = async (
		email,
		username,
		gender,
		age,
		password,
		password2,
		navigate
	) => {
		let formData = new FormData()
		formData.append('email', email)
		formData.append('username', username)
		formData.append('gender', gender)
		formData.append('age', age)
		formData.append('password', password)
		formData.append('password2', password2)

		try {
			const res = await axios.post(`${API}register/`, formData)
			console.log(res.data)
			navigate('/login')
		} catch (err) {
			setError('Error occured')
			console.log(err)
		}
	}

	const login = async (username, password, navigate) => {
		try {
			console.log(1234)
			let formData = new FormData()
			formData.append('username', username)
			formData.append('password', password)

			const res = await axios.post(`${API}login/`, formData)

			localStorage.setItem('token', JSON.stringify(res.data))

			// alert('login successfully')

			localStorage.setItem('username', JSON.stringify(username))
			setUser(username)
			navigate('/profile')
			// setPassword(password)
		} catch (err) {
			setError('WRONG USERNAME OR PASSWORD', err)
		}
	}

	async function checkAuthorization() {
		let token = JSON.parse(localStorage.getItem('token'))

		try {
			const Authorization = `Bearer ${token.access}`

			let res = await axios.post(
				`${API}refresh/`,
				{ refresh: token.refresh },
				{ headers: { Authorization } }
			)
			localStorage.setItem(
				'token',
				JSON.stringify({ refresh: token.refresh, access: res.data.access })
			)

			let username = localStorage.getItem('username')
			setUser(username)
		} catch (err) {
			console.error(err)
		}
	}

	async function logout(refresh) {
		try {
			let formData = new FormData()
			formData.append('refresh', refresh)

			const token = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${token.access}`
			const config = {
				headers: {
					Authorization,
				},
			}
			await axios.post(`${API}logout/`, formData, config)
			localStorage.removeItem('token')
			localStorage.removeItem('username')
			setUser('')
			navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

	async function passwordRecovery(email) {
		let formData = new FormData()
		formData.append('email', email)

		try {
			let res = await axios.post(`${API}forgot/`, formData)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	async function verificationCode(code, password, password2) {
		let formData = new FormData()
		formData.append('code', code)
		formData.append('password', password)
		formData.append('password2', password2)

		try {
			let res = await axios.post(`${API}restore/`, formData, config)
			console.log(res)
			navigate('/login')
		} catch (err) {
			console.error(err)
		}
	}

	const values = {
		user,
		password,
		error,

		registration,
		login,
		logout,
		passwordRecovery,
		verificationCode,
		checkAuthorization,
	}

	return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContextProvider
