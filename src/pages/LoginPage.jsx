import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import '../styles/LoginPage.css'

const LoginPage = () => {
	const { login } = useAuth()

	const [username, setNickname] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	function loginSystem() {
		if (!username.trim() || !password.trim()) {
			alert('Some inputs are empty')
			return
		}
		login(username, password, navigate)
	}
	return (
		<div className='login'>
			<div className='login-container'>
				<div className='login-inner'>
					<div className='login-content'>
						<h3 className='login-title'>Войти</h3>
						<form className='login-form'>
							<label>Имя</label>
							<input
								value={username}
								onChange={e => setNickname(e.target.value)}
								type='username'
								className='login-username'
							/>
							<label>Пароль</label>
							<input
								value={password}
								onChange={e => setPassword(e.target.value)}
								type='password'
								className='login-password'
							/>
						</form>

						<div className='forgot-pass'>
							<Link to='/recovery' className='forgot-pass-link'>
								Забыли пароль?
							</Link>

							<button onClick={loginSystem} className='login-btn'>
								Войти
							</button>

							<Link className='registration-link' to='/register'>
								Регистрация
							</Link>
						</div>
					</div>
				</div>
				<div className='log-ellips-group'>
					<div className='log-ellips-1'></div>
					<div className='log-ellips-2'></div>
					<div className='log-ellips-3'></div>
					<div className='log-ellips-4'></div>
					<div className='log-ellips-5'></div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
