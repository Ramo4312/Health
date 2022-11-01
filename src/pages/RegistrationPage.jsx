import React from 'react'
import '../styles/RegistrationPage.css'
import Button from '@mui/material/Button'
import HomePage from './HomePage'

const RegistrationPage = () => {
	return (
		<div className='registration-page'>
			<div className='bg'></div>
			<div className='register-form'>
				<h3>Sign Up</h3>
				{/* <input type='text' placeholder='Name' className='name-input' /> */}
				{/* <input type='text' placeholder='Surname' className='surname-input' /> */}
				{/* <input type='text' placeholder='Profile image' className='pfp-input' /> */}
				{/* <input type='text' placeholder='Email' className='email-input' /> */}
				<input type='text' placeholder='Password' className='password-input' />
				<input
					type='text'
					placeholder='Password Confirmation'
					className='passwordConf-input'
				/>
			</div>
		</div>
	)
}

export default RegistrationPage
