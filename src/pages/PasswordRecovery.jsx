import React, { useState } from 'react'
import Button from '../components/Button'
import Circle_background from '../components/Circle_background'
import Input from '../components/Input'
import { useAuth } from '../contexts/authContext'
import '../styles/PasswordRecovery.css'

const PasswordRecovery = () => {
	const { passwordRecovery, verificationCode } = useAuth()

	const [loading, setLoading] = useState(false)
	const [disabled, setDisabled] = useState(false)

	const [email, setEmail] = useState('')

	const [code, setCode] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')

	const [block1, setBlock1] = useState(false)
	const [block2, setBlock2] = useState(false)
	const [block3, setBlock3] = useState(true)

	function sendCode() {
		if (!email.trim()) {
			alert('Some inputs are empty')
			return
		}
		/* setLoading(true) */
		setBlock1(!block1)
		setBlock2(!block2)
		setTimeout(() => {
			setDisabled(true)
		}, 2000)
		/* passwordRecovery(email) */
		console.log('kkkk')
	}

	function handleRecovery() {
		if (!code.trim() || !password.trim()) {
			alert('Some inputs are empty')
			return
		}
		verificationCode(code, password, password2)
	}

	function loadingScreen() {

	}

	return (
		<div className='password-recovery-page'>
			<Circle_background />
			{block1 ?
				<div className='recovery-form'>
					<div className='recovery-form-block-1'>Забыли пароль ?</div>
					<div className='recovery-form-block-2'>На вашу почту будет выслана инстуркция по восстановлению пароля.</div>
					<div className='recovery-form-block-3'>
						E-mail
						<Input
							disabled={disabled ? true : false}
							readOnly={disabled ? true : false}
							value={email}
							onChange={e => setEmail(e.target.value)}
							type='text'
						/>
					</div>
					<Button /* disabled={disabled ? true : false} */ onClick={sendCode} desc='Отправить' />
				</div> : null
			}

			{block2 ? (
				<div className='recovery-form'>
					<div className='recovery-form2-block-1'>Код доступа</div>
					<div className='recovery-form2-block-2'>Введите 4х значный код высланный на вашу почту</div>
					<div className='recovery-form2-block-3'>
						<Input
							// disabled={disabled ? null : true}
							type='text'
							value={code}
							onChange={e => setCode(e.target.value)}
							placeholder='Actived code'
						/>
					</div>
					{/* <Button
							// disabled={disabled ? null : true}
							value={password}
							onChange={e => setPassword(e.target.value)}
							type='text'
							desc='Отправить'
						/> */}
					<Button onClick={handleRecovery} desc='Отправить' />
				</div>
			) : (
				<div className='loader' style={loading ? { display: 'block' } : { display: 'none' }}>
					<i className='layer'></i>
					<i className='layer'></i>
					<i className='layer'></i>
				</div>
			)}

			{block3 ?
				<div className='recovery-form'>
					<div className='recovery-form3-block-1'>Придумайте пароль</div>
					<div className='recovery-form3-block-2'>
						Новый пароль
						<Input
							// disabled={disabled ? null : true}
							type='text'
							value={code}
							onChange={e => setCode(e.target.value)}
							placeholder='Actived code'
						/>
					</div>
					<div className='recovery-form3-block-3'>
						Повторите пароль
						<Input
							// disabled={disabled ? null : true}
							value={password}
							onChange={e => setPassword(e.target.value)}
							type='text'
							desc='Отправить'
						/>
					</div>
					<Button onClick={handleRecovery} desc='Отправить' />
				</div> : null}
		</div>
	)
}

export default PasswordRecovery
