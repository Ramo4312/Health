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

	const [block1, setBlock1] = useState(true)
	const [block2, setBlock2] = useState(false)
	const [block3, setBlock3] = useState(false)

	function sendCode() {
		if (!email.trim()) {
			alert('Поле ввода пустое')
			return
		}
		setBlock1(!block1)
		setBlock2(!block2)
	}

	function goToRecovery() {
		if (!code.trim()) {
			alert('Поле ввода пустое')
			return
		}
		/* verificationCode(code, password, password2) */
		setBlock2(!block2)
		setBlock3(!block3)
	}

	function handleRecovery() {
		if (!password.trim() || !password2.trim()) {
			alert('Поле ввода пустое')
			return
		}
		verificationCode(code, password, password2)
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
					<Button onClick={sendCode} desc='Отправить' />
				</div> : null
			}

			{block2 ? (
				<div className='recovery-form'>
					<div className='recovery-form2-block-1'>Код доступа</div>
					<div className='recovery-form2-block-2'>Введите 4х значный код высланный на вашу почту</div>
					<div className='recovery-form2-block-3'>
						<Input
							type='text'
							value={code}
							onChange={e => setCode(e.target.value)}
							placeholder='Actived code'
						/>
					</div>
					<Button onClick={goToRecovery} desc='Отправить' />
				</div>
			) : (
				<div className='loader' style={loading ? { display: 'block' } : { display: 'none' }}>
					<i className='layer'></i>
					<i className='layer'></i>
					<i className='layer'></i>
				</div>
			)}

			{block3 ?
				<div className='recovery-form3'>
					<div className='recovery-form3-block-1'>Придумайте пароль</div>
					<div className='recovery-form3-block-2'>
						Новый пароль
						<Input
							// disabled={disabled ? null : true}
							type='text'
							value={password}
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
