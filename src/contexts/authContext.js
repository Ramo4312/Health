import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const authContext = createContext()
export const useAuth = () => useContext(authContext)

const API = 'http://127.0.0.1:8000/'

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const config = {
		headers: {},
	}

	const registration = async (
		username,
		surname,
		nickname,
		email,
		password,
		password2,
		sex
	) => {
		let formData = new FormData()
		formData.append('username', username)
		formData.append('surname', surname)
		formData.append('nickname', nickname)
		formData.append('email', email)
		formData.append('password', password)
		formData.append('password2', password2)
		formData.append('sex', sex)

		try {
			const res = await axios.post(`${API}accounts/register/`, formData, config)
			navigate('/login')
			console.log(res)
		} catch (error) {
			setError('Error occured')
		}
	}

	const login = async (
		username,
		surname,
		nickname,
		email,
		password,
		password2,
		sex
	) => {
		let formData = new FormData()
		formData.append('username', username)
		formData.append('surname', surname)
		formData.append('nickname', nickname)
		formData.append('email', email)
		formData.append('password', password)
		formData.append('password2', password2)
		formData.append('sex', sex)

		try {
			const res = await axios.post(`${API}api/token/`, formData, config)

			navigate('/')

			localStorage.setItem('token', JSON.stringify(res.data))
			localStorage.setItem('username', JSON.stringify(username))
			setUser(username)
		} catch (error) {
			setError('WRONG USERNAME OR PASSWORD', error)
		}
	}

	function logout() {
		localStorage.removeItem('token')
		localStorage.removeItem('username')
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
