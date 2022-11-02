import React, { useState } from 'react'
import '../styles/LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

const LoginPage = () => {
	const { login } = useAuth()

	const [nickname, setNickname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	function loginSystem() {
		login(nickname, email, password)
	}

	return (
		<div className='login-page'>
			<div className='login-form'>
				<h3>Sign In</h3>
				<input
					type='text'
					value={nickname}
					onChange={e => setNickname(e.target.value)}
					placeholder='Nickname'
					className='login_nickname-inp'
				/>
				<input
					type='text'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Email'
					className='login_email-inp'
				/>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='text'
					placeholder='Password'
					className='login_password-inp'
				/>
				<h6 onClick={() => navigate('/recovery')} className='recovery'>
					Forgot your Password?
				</h6>
				<h5>Don't have an account?</h5>
				<h6 onClick={() => navigate('/register')} className='reg-link'>
					Register?
				</h6>
				<button className='login-btn' onClick={loginSystem}>
					Sign In
				</button>
			</div>
		</div>
	)
}

export default LoginPage
