import React from 'react'
import '../styles/LoginPage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
	const navigate = useNavigate()

	return (
		<div className='login-page'>
			<div className='login-form'>
				<h3>Sign In</h3>
				<input type='text' placeholder='Name' className='login_name-inp' />
				<input type='text' placeholder='Email' className='login_email-inp' />
				<input
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
				<button className='login-btn'>Sign In</button>
			</div>
		</div>
	)
}

export default LoginPage
