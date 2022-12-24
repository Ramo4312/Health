import React, { useState } from 'react'
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../images/logo.svg'
import vector1 from '../images/account_circle.svg'
import vector2 from '../images/balance.svg'
import vector3 from '../images/restaurant.svg'
import vector4 from '../images/weather (1).png'
import logout from '../images/logout.svg'
import '../styles/SiteBar.css'
import { useAuth } from '../contexts/authContext'
import { motion } from 'framer-motion'
import KcalCalcPage from '../pages/calacPage/KcalCalcPage'

const SiteBar = () => {
	const { logout } = useAuth()

	const [hover, setHover] = useState('white')

	const navigate = useNavigate()

	const location = useLocation()

	const url = `${location.pathname}`

	function handleLogout() {
		let { refresh } = JSON.parse(localStorage.getItem('token'))
		logout(refresh)
	}

	return (
		<div className='siteBar'>
			<div
				initial={{ opacity: 0, translateX: -25, scale: 0.8 }}
				animate={{ opacity: 1, translateX: 0, scale: 1 }}
				transition={{ duration: 0.3, delay: 0.2 }}
				className='logo-block'
			>
				<img src={Logo} alt='' width={70} />
				<h2>Health</h2>
			</div>
			<hr className='siteBar-line' />
			<div
				initial={{ opacity: 0, translateX: -25, scale: 0.8 }}
				animate={{ opacity: 1, translateX: 0, scale: 1 }}
				transition={{ duration: 0.3, delay: 0.2 }}
				className='navigate-block'
			>
				<button
					onClick={() => navigate('/profile')}
					className='profile-btn'
					style={
						url == '/profile'
							? {
								backgroundColor: '#fff',
								transform: 'translateY(-1px)',
								boxShadow: ' 0 15px 20px -20px red',
							}
							: null
					}
				>
					<img src={vector1} alt='' />
					Профиль
				</button>
				
				<button
				onClick={() => navigate('/calc')}
					className='calculation-btn'
					style={
						url == '/calc' || '/dishes'
							? {
								backgroundColor: '#fff',
								transform: 'translateY(-1px)',
								boxShadow: ' 0 15px 20px -20px red',
							}
							: null
					}
				>
					<img src={vector2} alt='' />
					Расчет калорий
				</button>

				<button
					className='recipes-btn'
					style={
						url == '/recipes'
							? {
								backgroundColor: '#fff',
								transform: 'translateY(-1px)',
								boxShadow: ' 0 15px 20px -20px red',
							}
							: null
					}
				>
					<img src={vector3} alt='' />
					Рецепты
				</button>

				<button
					onClick={() => navigate('/weather')}
					className='weather-btn'
					style={
						url == '/weather'
							? {
								backgroundColor: '#fff',
								transform: 'translateY(-1px)',
								boxShadow: ' 0 15px 20px -20px red',
							}
							: null
					}
				>
					<img src={vector4} alt='' width={23} />
					Погода
				</button>
			</div>
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
				// whileHover={{ background: 'red' }}
				className='logout-btn'
				onClick={handleLogout}
				onMouseMove={() => setHover('red')}
				onMouseLeave={() => setHover('white')}
			>
				<svg
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z'
						fill={hover}
					/>
				</svg>
				Выйти
			</motion.button>
		</div>
	)
}

export default SiteBar
