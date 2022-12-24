import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../images/logo.svg'
import vector1 from '../images/account_circle.svg'
import vector2 from '../images/balance.svg'
import vector3 from '../images/restaurant.svg'
import vector4 from '../images/weather (1).png'
import '../styles/SiteBar.css'
import '../styles/adaptive/SiteBar-adaptive.css'
import { useAuth } from '../contexts/authContext'
import { motion } from 'framer-motion'

const SiteBar = ({ open, setOpen }) => {
	const { logout } = useAuth()

	const [hover, setHover] = useState('white')
	// const [url, setUrl] = useState('/profile')

	const navigate = useNavigate()

	const location = useLocation()

	const url = `${location.pathname}`

	function handleLogout() {
		let { refresh } = JSON.parse(localStorage.getItem('token'))
		logout(refresh)
	}

	const navigates = [
		{
			path_name: 'Профиль',
			path: '/profile',
			id: 1,
			icon: vector1,
			width: 20,
			siteBar_open: false,
		},
		{
			path_name: 'Расчет калорий',
			path: '/calc',
			id: 2,
			icon: vector2,
			width: 20,
			siteBar_open: false,
		},
		{
			path_name: 'Рецепты',
			path: '/recipes',
			id: 3,
			icon: vector3,
			width: 17,
			siteBar_open: false,
		},
		{
			path_name: 'Погода',
			path: '/weather',
			id: 4,
			icon: vector4,
			width: 23,
			siteBar_open: false,
		},
	]

	return (
		<div
			style={
				open
					? {
							position: 'absolute',
							width: '60%',
							transform: 'translateX(0)',
							zIndex: 2,
							transition: '.6s',
					  }
					: null
			}
			className='siteBar'
		>
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
				{navigates.map(item => (
					<button
						key={item.id}
						onClick={() => {
							navigate(item.path)
							// setUrl(item.path)

							setOpen(false)
							// console.log(open)
						}}
						className='profile-btn'
						style={
							url == item.path
								? {
										backgroundColor: '#fff',
										transform: 'translateY(-1px)',
										boxShadow: ' 0 15px 20px -20px red',
								  }
								: null
						}
					>
						<img src={item.icon} alt={item.path} width={item.width} />
						{item.path_name}
					</button>
				))}
			</div>
			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.9, delay: 0.2 }}
				className='logout-btn'
				onClick={handleLogout}
				onMouseMove={() => setHover('black')}
				onMouseLeave={() => setHover('white')}
				style={{ color: hover }}
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
