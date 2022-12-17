import React, { useState } from 'react'
import '../styles/RegistrationPage.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

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
			!password2.trim() ||
			!age.trim()
		) {
			alert('Some inputs are empty')
			return
		}
		registration(email, username, sex, +age, password, password2, navigate)
	}

	return (
		<div className='register-form-page'>
			<div className='register-form-page-background-1'></div>
			<div className='register-form-page-background-2'></div>
			<div className='register-form-page-background-3'></div>
			<div className='register-form-page-background-4'></div>
			<div className='register-form-page-background-5'></div>

			<div className='register-form'>
				<h3>Регистрация </h3>

				<div className='input-desc'>Имя</div>
				<input
					value={username}
					onChange={e => setNickname(e.target.value)}
					type='text'
					className='nickname-inp'
				/>

				<div className='input-desc'>Email</div>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='text'
					className='reg_email-inp'
				/>

				<div className='age-gender-block'>
					<span>Возраст</span>
					<input value={age} onChange={e => setAge(e.target.value)} />
					<select
						name='Пол'
						placeholder='Пол'
						onChange={e => setSex(e.target.value)}
					>
						<option value='gender'>Пол</option>
						<option value='male'>муж</option>
						<option value='female'>жен</option>
					</select>
				</div>

				<div className='input-desc'>Пароль</div>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='text'
					className='reg_password-inp'
				/>

				<div className='input-desc'>Повторите пароль</div>
				<input
					value={password2}
					onChange={e => setPassword2(e.target.value)}
					type='text'
					className='passwordConf-input'
				/>

				<button className='register-btn' onClick={registerSystem}>
					Регистрация
				</button>

				<button
					className='register-btn-log-in'
					onClick={() => {
						navigate('/login')
					}}
				>
					Вход
				</button>
			</div>
		</div>
	)
}

export default RegistrationPage
