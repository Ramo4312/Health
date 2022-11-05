import React from 'react'
import '../styles/HomePage.css'
import HeaderImage from '../images/zyro-image.png'
import { motion } from 'framer-motion'
import '../styles/adaptive/HomePage-adaptive.css'

const HomePage = () => {
	return (
		<motion.div
			className='home-container'
			initial={{ width: 0, opacity: 0 }}
			animate={{ width: '100%', opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className='home-container__left'>
				<h1 className='home-container__left-text-big'>
					<span className='logo-color'>Health</span> решение для всех ваших
					проблем со здоровьем
				</h1>
				<p className='home-container__left-text-small'>
					По вашим характеристикам мы подбираем вам блюдо, тренировки,
					расписание
				</p>
				<button className='home-container__left-button def-block2'>
					Начать
				</button>
			</div>
			<div className='home-container-right'>
				<img src={HeaderImage} alt='error' className='home-container-img' />
			</div>
			<button className='home-container__left-button def-none2'>Начать</button>
		</motion.div>
	)
}

export default HomePage
