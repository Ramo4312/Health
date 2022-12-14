import React from 'react'
import '../styles/HomePage.css'
import HeaderImage from '../images/Healthy lifestyle-bro (1) 1.svg'
import { motion } from 'framer-motion'
import '../styles/adaptive/HomePage-adaptive.css'
import { useNavigate } from 'react-router-dom'
import { AnimateBackground } from '../components/AnimateBackground'

const HomePage = () => {
	const navigate = useNavigate()

	return (
		<>
			<motion.div
				initial={{ opacity: 0, translateX: -50 }}
				animate={{ opacity: 1, translateX: 0 }}
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				<div className='home-container'>
					<div className='home-container__left'>
						<h1 className='home-container__left-text-big'>
							<span className='logo-color'>HEALTH</span>-Расчет калорий
							употребляемые вами в день.
						</h1>
						<p className='home-container__left-text-small'>
							Мы вам поможем найти свой идеальный вес, рассчитать калории и
							подобрать рецепты правильного питания.
						</p>
						<motion.button
							whileHover={{ translateY: '-3px' }}
							className='home-container__left-button def-block2'
							onClick={() => navigate('/login')}
						>
							Начать
						</motion.button>
					</div>
					<div className='home-container-right'>
						<img src={HeaderImage} alt='error' className='home-container-img' />
					</div>
				</div>
				<div className='bg-ellipse-1'></div>
				<div className='bg-ellipse-2'></div>
			</motion.div>

			{/* <AnimateBackground /> */}
		</>
	)
}

export default HomePage
