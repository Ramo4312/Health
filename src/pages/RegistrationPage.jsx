import React, { useState } from 'react'
import '../styles/RegistrationPage.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/authContext'
import { useEffect } from 'react'
import Select from '@mui/material/Select'

const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff',
		},
	},
})

const RegistrationPage = () => {
	const { registration } = useAuth()

	let navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [username, setNickname] = useState('')
	const [sex, setSex] = useState('')
	const [age, setAge] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')

	function registerSystem() {
		if (
			!username.trim() ||
			!email.trim() ||
			!password.trim() ||
			!password2.trim()
		) {
			alert('Some inputs are empty')
			return
		}
		registration(email, username, sex, +age, password, password2, navigate)
	}

	return (
		<motion.div
			className='registration-page'
			initial={{ width: 0, opacity: 0 }}
			animate={{ width: '80vw', opacity: 1 }}
			exit={{ width: window.innerWidth, opacity: 0 }}
		>
			<div className='register-form'>
				<h3>Sign Up</h3>

				{/* <input
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					placeholder='Name'
					className='reg_name-inp'
				/>
				<input
					value={surname}
					onChange={e => setSurname(e.target.value)}
					type='text'
					placeholder='Surname'
					className='reg_surname-inp'
				/> */}
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='text'
					placeholder='Email'
					className='reg_email-inp'
				/>
				<input
					value={username}
					onChange={e => setNickname(e.target.value)}
					type='text'
					placeholder='Nickname'
					className='nickname-inp'
				/>

				<input
					type='number'
					value={age}
					onChange={e => setAge(e.target.value)}
					name=''
					id=''
				/>
				<select
					name=''
					id=''
					defaultValue='gender'
					onChange={e => setSex(e.target.value)}
				>
					<option value='gender'>Gender</option>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
				</select>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='text'
					placeholder='Password'
					className='reg_password-inp'
				/>
				<input
					value={password2}
					onChange={e => setPassword2(e.target.value)}
					type='text'
					placeholder='Password Confirmation'
					className='passwordConf-input'
				/>
				<button className='register-btn' onClick={registerSystem}>
					Sign Up
				</button>
			</div>
		</motion.div>
	)
}

export default RegistrationPage
