import React, { useEffect, useState } from 'react'
import SiteBar from '../components/SiteBar'
import '../styles/RecipesPage.css'
import '../styles/adaptive/RecipesPage-adaptive.css'

import arrowLeft from '../images/arrow-left.svg'
import photo1 from '../images/photo-1.png'
import photo2 from '../images/photo-2.png'
import photo3 from '../images/photo-3.png'
import photo4 from '../images/photo-4.png'
import photo5 from '../images/photo-5.png'
import photo6 from '../images/photo-6.png'

import recPhoto1 from '../images/rec-photo-1.png'
import recPhoto2 from '../images/rec-photo-2.png'
import recPhoto3 from '../images/rec-photo-3.png'
import recPhoto4 from '../images/rec-photo-4.png'
import recPhoto5 from '../images/rec-photo-5.png'

import { useTheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

import toggler from '../images/menu.svg'

const RecipesPage = () => {
	const [open, setOpen] = useState(false)

	const [block, setBlock] = useState(true)

	const theme = useTheme()

	const products = [
		{
			title: 'ПП оладьи',
			fats: 50,
			squirrels: 50,
			carbohydrates: 50,
			kcal: 250,
			img: photo1,
			id: 1,
		},
		{
			title: 'Греческий салат',
			fats: 50,
			squirrels: 50,
			carbohydrates: 50,
			kcal: 250,
			img: photo2,
			id: 2,
		},
		{
			title: 'Чечевица',
			fats: 50,
			squirrels: 50,
			carbohydrates: 50,
			kcal: 250,
			img: photo3,
			id: 3,
		},
		{
			title: 'Cалат из курицы',
			fats: 50,
			squirrels: 50,
			carbohydrates: 50,
			kcal: 250,
			img: photo4,
			id: 4,
		},
		{
			title: 'Завтрак из шпината',
			fats: 50,
			squirrels: 50,
			carbohydrates: 50,
			kcal: 250,
			img: photo5,
			id: 5,
		},
		{
			title: 'Легкий салат',
			fats: 50,
			squirrels: 50,
			carbohydrates: 50,
			kcal: 250,
			img: photo6,
			id: 6,
		},
	]

	function switcher() {
		let blockState = localStorage.setItem('block', JSON.stringify(!block))
		setBlock(blockState)
	}

	useEffect(() => {
		let blockState = JSON.parse(localStorage.getItem('block'))
		setBlock(blockState)
	}, [block])

	const [age, setAge] = React.useState('')

	const handleChange = event => {
		setAge(event.target.value)
	}

	return (
		/*Recipes first ----------------------------*/
		<>
			<div className='recipes-container'>
				<SiteBar open={open} setOpen={setOpen} />
				<img
					src={toggler}
					onClick={() => setOpen(!open)}
					alt='icon'
					className='siteBar-toggler-recipes'
				/>

				{block ? (
					<div
						className='recipes-parent-block-second'
						onClick={() => setOpen(false)}
					>
						<div className='recipes-child-block-second'>
							<div className='recipes-title-breakf'>Рецепты</div>
							<div className='recipes-serch-box'>
								<input className='recipes-serching' />
								<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
									<InputLabel
										id='demo-select-small'
										className='recipes-select-label'
									>
										Все
									</InputLabel>
									<Select
										className='recipes-select'
										labelId='demo-select-small'
										id='demo-select-small'
										value={age}
										label='Age'
										onChange={handleChange}
									>
										<MenuItem value=''>Все рецепты</MenuItem>
										<MenuItem value='завтрак'>Завтрак</MenuItem>
										<MenuItem value='обед'>Обед</MenuItem>
										<MenuItem value='полдник'>Полдник</MenuItem>
										<MenuItem value='ужин'>Ужин</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className='recipes-menu-block'>
								{products?.map(item => (
									<div
										className='recipes-menu-items'
										key={item.id}
										onClick={switcher}
									>
										<img src={item.img} alt='img' className='photo-1' />
										<div className='recipes-menu-div'>
											<div className='recipes-menu-kcal'>
												<p className='recipes-menu-txt'>{item.title}</p>
												<p className='recipes-menu-txt-kcal'>
													{item.kcal} ккал
												</p>
											</div>
											<div className='recipes-menu-prod'>
												<p className='menu-prod-item'>Жиры: {item.fats}</p>
												<p className='menu-prod-item'>
													Белки: {item.squirrels}
												</p>
												<p className='menu-prod-item'>
													Углеводы: {item.carbohydrates}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className='bg-ellips-1'></div>
						<div className='bg-ellips-2'></div>
						<div className='bg-ellips-3'></div>
					</div>
				) : (
					<div
						className='recipes-parent-block-third'
						onClick={() => setOpen(false)}
					>
						<div className='recipes-child-block-third'>
							<div className='recipes-arrow-break-3'>
								<img
									src={arrowLeft}
									onClick={switcher}
									alt='img'
									className='arrow-left'
								/>
								ПП оладьи
							</div>
							<p className='recipes-txt-4'>
								Рекомендуемый прием калорий на завтрак: 250 ккал
							</p>
							<div className='recipes-menu-ingrid'>
								<div className='recipes-ingrid-prod-kcal'>
									<img src={recPhoto5} alt='img' className='photo-ingrid' />
									<div className='recipes-ingrid-kcal'>
										<div className='recipes-ingrid-catalog'>
											<div className='recipes-ingrid-kcal-pargraf-1'>
												<p className='recipes-menu-txt-a'>ПП оладьи</p>
												<p className='recipes-menu-kcal'>220 ккал</p>
											</div>
											<div className='recipes-ingrid-menu-items'>
												<p className='menu-ingrid-item'>Жиры: 50</p>
												<p className='menu-ingrid-item'>Белки: 50</p>
												<p className='menu-ingrid-item'>Углеводы: 50</p>
											</div>
										</div>
										<div className='recipe-ingridients'>
											<p className='ingridients-title'>Ингридиенты</p>
											<div className='ingridients-box'>
												<p>Кефир</p>
												<p>200 мл</p>
											</div>
											<div className='ingridients-box'>
												<p>Яйца</p>
												<p>2 шт</p>
											</div>
											<div className='ingridients-box'>
												<p>Рисовая мука</p>
												<p>200 мл</p>
											</div>
											<div className='ingridients-box'>
												<p>Кефир</p>
												<p>200 мл</p>
											</div>
										</div>
									</div>
								</div>
								<div className='recipe-ingridients2'>
									<p className='ingridients-title'>Ингридиенты</p>
									<div className='ingridients-box'>
										<p>Кефир</p>
										<p>200 мл</p>
									</div>
									<div className='ingridients-box'>
										<p>Яйца</p>
										<p>2 шт</p>
									</div>
									<div className='ingridients-box'>
										<p>Рисовая мука</p>
										<p>200 мл</p>
									</div>
									<div className='ingridients-box'>
										<p>Кефир</p>
										<p>200 мл</p>
									</div>
								</div>
								<div className='recipe-ingridients-mobile'>
									<p className='ingridients-title'>Ингридиенты</p>
									<div className='ingridients-box'>
										<p>Кефир</p>
										<p>200 мл</p>
									</div>
									<div className='ingridients-box'>
										<p>Яйца</p>
										<p>2 шт</p>
									</div>
									<div className='ingridients-box'>
										<p>Рисовая мука</p>
										<p>200 мл</p>
									</div>
									<div className='ingridients-box'>
										<p>Кефир</p>
										<p>200 мл</p>
									</div>
								</div>
								<div className='recipes-steps-blc'>
									<div className='recipes-step-cont'>
										<img src={recPhoto1} alt='img' className='rec-photo-1' />
										<div className='recipes-step'>
											<p className='recipes-desc-txt-1'>Шаг 1</p>
											<p className='recipes-desc-txt-2'>
												Для этого кефир возьмите нежирный, исключите сахар и
												масло для обжаривания. Не заменяйте соду разрыхлителем,
												если придерживаетесь безглютеновой диеты - разрыхлитель
												содержит пшеничную муку в составе.
											</p>
										</div>
									</div>
									<div className='recipes-step-cont'>
										<img src={recPhoto2} alt='img' className='rec-photo-2' />
										<div className='recipes-step'>
											<p className='recipes-desc-txt-1'>Шаг 2</p>
											<p className='recipes-desc-txt-2'>
												Кефир выньте из холодильника заранее или подогрейте его
												до теплого состояния. Всыпьте в кефир соду, перемешайте.
												В теплом кефире реакция начнется быстрее, поэтому мы его
												и греем. Оставьте кефир на 5 минут для реакции.
											</p>
										</div>
									</div>
									<div className='recipes-step-cont'>
										<img src={recPhoto3} alt='img' className='rec-photo-3' />
										<div className='recipes-step'>
											<p className='recipes-desc-txt-1'>Шаг 3</p>
											<p className='recipes-desc-txt-2'>
												Разбейте в кефир яйцо, добавьте соль. Перемешайте.
											</p>
										</div>
									</div>
									<div className='recipes-step-cont'>
										<img src={recPhoto4} alt='img' className='rec-photo-4' />
										<div className='recipes-step'>
											<p className='recipes-desc-txt-1'>Шаг 4</p>
											<p className='recipes-desc-txt-2'>
												Для этого кефир возьмите нежирный, исключите сахар и
												масло для обжаривания. Не заменяйте соду разрыхлителем,
												если придерживаетесь безглютеновой диеты - разрыхлитель
												содержит пшеничную муку в составе.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='recipes-bg-ellips-1'></div>
							<div className='recipes-bg-ellips-2'></div>
							<div className='recipes-bg-ellips-3'></div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default RecipesPage
