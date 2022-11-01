import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import '../styles/RegistrationPage.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

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

	console.log(sex)

	function registerSystem() {
		// if (
		// 	!name.value.trim() ||
		// 	!surname.value.trim() ||
		// 	!email.value.trim() ||
		// 	!password.value.trim() ||
		// 	!password2.value.trim() ||
		// 	!nickname.value.trim() ||
		// 	!sex.value.trim()
		// ) {
		// 	alert('some inputs are empty')
		// 	return
		// }
		// registration(name, surname, nickname, email, password, password2, sex)
		navigate('/login')
	}

	return (
		<div className='registration-page'>
			<div className='register-form'>
				<h3>Sign Up</h3>

				<input
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
				/>
				<input
					value={nickname}
					onChange={e => setNickname(e.target.value)}
					type='text'
					placeholder='Nickname'
					className='nickname-inp'
				/>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='text'
					placeholder='Email'
					className='reg_email-inp'
				/>
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
				<FormControl className='gender-select'>
					<RadioGroup
						className='radio-group'
						row
						aria-labelledby='demo-row-radio-buttons-group-label'
						name='row-radio-buttons-group'
						value={sex}
						onChange={e => setSex(e.target.value)}
					>
						<FormControlLabel
							value='male'
							control={<Radio color='info' />}
							label='Male'
						/>
						<FormControlLabel
							value='female'
							control={<Radio color='info' />}
							label='Female'
						/>
						<FormControlLabel
							value='packemon'
							control={<Radio />}
							label='Packemon'
						/>
					</RadioGroup>
				</FormControl>

				<button className='register-btn' onClick={registerSystem}>
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default RegistrationPage
