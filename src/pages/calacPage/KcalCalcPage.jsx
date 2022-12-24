import React from 'react'
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'
import SiteBar from '../../components/SiteBar'
import { motion } from 'framer-motion'
import '../../styles/KcalCalcPage.css'
import calender from '../../images/calendar_month.png'

export default function KcalCalcPage() {
  const navigate = useNavigate()

  return (
    <div className='main-container'>
      <SiteBar />
      <div className='calc-container__info-parent-block'>
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='calc-container__info-child-block'
        >
          <div className='calc-block-1'>
						<span>Ваш дневной прием калорий: 1507 ккал/день</span>
            <div className='subBlock-2'>
              <img src={calender}/>
              Дата
            </div>
					</div>

          <div className='calc-block-2'>
            <span>Ккал: 0</span>
            <span>Белки: 0</span>
            <span>Жиры: 0</span>
            <span>Углеводы: 0</span>
          </div>

          <div className='calc-block-3'>

            <button onClick={() => navigate('/dishes')}>
              <span>Завтрак</span>
              <span>Рекомендовано: </span>
            </button>

            <button onClick={() => navigate('/dishes')}>
              <span>Полдник</span>
              <span>Рекомендовано: </span>
            </button>

            <button onClick={() => navigate('/dishes')}>
              <span>Обед</span>
              <span>Рекомендовано: </span>
            </button>

            <button onClick={() => navigate('/dishes')}>
              <span>Ужин</span>
              <span>Рекомендовано: </span>
            </button>

          </div>
        </motion.div>

        <div className='back-ellipse-1'></div>
        <div className='back-ellipse-2'></div>
        <div className='back-ellipse-3'></div>
        <div className='back-ellipse-4'></div>
        <div className='back-ellipse-5'></div>

      </div>
    </div>
  )
}
