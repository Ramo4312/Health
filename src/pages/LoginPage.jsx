import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LoginPage.css'

const LoginPage = () => {
	return (
		<div className='login'>
			<div className='login-container'>
				<div className='login-inner'>
					<div className='login-content'>
						<h3 className='login-title'>Войти</h3>
						<form className='login-form'>
							<label>Имя</label>
							<input type='username' className='login-username' />
							<label>Пароль</label>
							<input type='password' className='login-password' />
						</form>

						<div className='forgot-pass'>
							<Link to='/recovery' className='forgot-pass-link'>
								Забыли пароль?
							</Link>

							<button className='login-btn'>Войти</button>

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
