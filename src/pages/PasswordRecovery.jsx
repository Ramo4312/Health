import React from 'react'
import '../styles/PasswordRecovery.css'

const PasswordRecovery = () => {
	function unDisabled() {
		document.querySelector('.verification-input').removeAttribute('disabled')
		document.querySelector('.verification-btn').removeAttribute('disabled')
	}

	return (
		<div className='recovery-block'>
			<div className='recovery-form'>
				<div className='inputs-block'>
					<div className='send-block'>
						<input className='send-input' type='text' placeholder='Email' />
						<button onClick={unDisabled}>Send</button>
					</div>
					<div className='pin_code-block'>
						<input
							disabled
							type='text'
							className='verification-input'
							placeholder='verification code'
						/>
						<button disabled className='verification-btn'>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PasswordRecovery
