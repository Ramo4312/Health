import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import NativeSelect from '@mui/material/NativeSelect'
import '../styles/RegistrationPage.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#fff',
		},
	},
})

const RegistrationPage = () => {
	let navigate = useNavigate()

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [nickname, setNickname] = useState('')
	const [sex, setSex] = useState('')

	function registerSystem() {
		// if (!name)
		// registration(name, surname, nickname, email, password, password2, gender)
		navigate('/login')
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

				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder='Name'
					className='reg_name-inp'
				/>
				<input
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
					type='text'
					placeholder='Surname'
					className='reg_surname-inp'
				/>
				<input
					value={nickname}
					onChange={(e) => setNickname(e.target.value)}
					type='text'
					placeholder='Nickname'
					className='nickname-inp'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='text'
					placeholder='Email'
					className='reg_email-inp'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='text'
					placeholder='Password'
					className='reg_password-inp'
				/>
				<input
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					type='text'
					placeholder='Password Confirmation'
					className='passwordConf-input'
				/>

				<select
					className='gender-select'
					value={sex}
					onChange={(e) => setSex(e.target.value)}
					defaultValue='none'
				>
					<option className='options' value='none'>
						None
					</option>
					<option className='options' value='male'>
						Male
					</option>
					<option className='options' value='female'>
						Female
					</option>
				</select>
				{/* <ThemeProvider theme={lightTheme}>
					<FormControl fullWidth>
						<InputLabel variant='standard' htmlFor='uncontrolled-native'>
							Gender
						</InputLabel>
						<NativeSelect
							value={gender}
							onChange={e => setGender(e.target.value)}
						>
							<MenuItem value='male'>Male</MenuItem>
							<MenuItem value='female'>Female</MenuItem>
						</NativeSelect>
					</FormControl>
				</ThemeProvider> */}

				<button className='register-btn' onClick={registerSystem}>
					Sign Up
				</button>
			</div>
		</motion.div>
	)
}

export default RegistrationPage
