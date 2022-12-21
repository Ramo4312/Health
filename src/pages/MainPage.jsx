import React, { useEffect, useState } from 'react'
import '../styles/MainPage.css'
import SiteBar from '../components/SiteBar'
import { usePerson } from '../contexts/peopleDataContext'
import men from '../images/men.svg'
import woman from '../images/Woman.svg'
import { motion } from 'framer-motion'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const MainPage = () => {
	const { getPerson, addPerson, person, updatePerson, deletePerson } =
		usePerson()

	const [edit, setEdit] = useState(false)
	const [display, setDisplay] = useState(false)
	const [initial, setInitial] = useState(person)

	const [age, setAge] = useState(0)
	const [height, setHeight] = useState(0)
	const [gender, setGender] = useState('male')
	const [currentWeight, setCurrentWeight] = useState(0)
	const [wishfulWeight, setWishfulWeight] = useState(0)
	const [massa, setMassa] = useState(18)

	useEffect(() => {
		getPerson()
	}, [])

	useEffect(() => {
		if (person !== null) {
			// setEdit(true)

			setInitial(person)

			setAge(person.age)
			setCurrentWeight(person.weight_now)
			setHeight(person.height)
			setGender(person.gender)
			setWishfulWeight(person.weight_want)
		}
	}, [person])

	useEffect(() => {
		if (initial !== null) {
			if (
				age !== initial.age ||
				height !== initial.height ||
				currentWeight !== initial.weight_now ||
				wishfulWeight !== initial.weight_want ||
				gender !== initial.gender
			) {
				setDisplay(true)
			} else {
				setDisplay(false)
			}
		}
	}, [age, height, gender, currentWeight, wishfulWeight])

	function handleAdd() {
		if (
			!age.trim() ||
			!height.trim() ||
			!currentWeight.trim() ||
			!wishfulWeight.trim()
		) {
			alert('Some inputs are empty')
			return
		}

		const username = JSON.parse(localStorage.getItem('username'))

		addPerson(
			age,
			height,
			currentWeight,
			wishfulWeight,
			gender,
			username,
			massa
		)

		getPerson()

		setEdit(true)
	}

	useEffect(() => {
		localStorage.setItem('isEdit', JSON.stringify(edit))
		console.log(edit)
	}, [edit])

	useEffect(() => {
		// setTimeout(() => {
		// 	console.log(person)
		// }, 1500)
		// if (age !== person.age) {
		// 	setDisplay(true)
		// }
	}, [])

	function handleEdit() {
		let newPerson = {
			age: age,
			height: height,
			weight_now: currentWeight,
			weight_want: wishfulWeight,
			gender: gender,
		}

		updatePerson(person.id, newPerson)
	}

	function handleDelete(id) {
		deletePerson(id)
		getPerson()
	}

	let list = [
		{
			title: 'Недостаточная масса',
			color: 'rgba(181, 194, 44, 1)',
			nums: '<18,5',
			id: 1,
		},
		{
			title: 'Нормальная',
			color: 'rgba(119, 194, 42, 1)',
			nums: '18,5-24,9',
			id: 2,
		},
		{
			title: 'Избыточная',
			color: 'rgba(245, 180, 0, 1)',
			nums: '25,0-29,9',
			id: 3,
		},
		{
			title: 'Ожирение 1 степени',
			color: 'rgba(245, 131, 0, 1)',
			nums: '30,0-34,9',
			id: 4,
		},
		{
			title: 'Ожирение 2 степени',
			color: 'rgba(245, 90, 0, 1)',
			nums: '35,0-39,9',
			id: 5,
		},
		{
			title: 'Ожирение 3 степени',
			color: 'rgba(214, 58, 59, 1)',
			nums: '40,0 и выше',
			id: 6,
		},
	]

	return (
		<div className='main-container'>
			<SiteBar />
			<div className='main-container__info-parent-block'>
				<motion.div
					initial={{ opacity: 0, translateX: -50 }}
					animate={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='main-container__info-child-block'
				>
					<div className='weights-block'>
						<h4>Ваша цель : 50 кг</h4>
						<h4>Текущий вес : 60 кг</h4>
					</div>
					<div className='person-form'>
						<div className='height-inp-block'>
							<span>Рост</span>
							<input
								type='number'
								value={height}
								onChange={e => setHeight(e.target.value)}
							/>
						</div>
						<div>
							<span>Вес</span>
							<input
								type='number'
								value={currentWeight}
								onChange={e => setCurrentWeight(e.target.value)}
							/>
						</div>
						<div className='gender-inp-block'>
							<span>Пол</span>
							<select
								className='gender-select'
								name='Пол'
								onChange={e => setGender(e.target.value)}
							>
								<option value='male'>муж</option>
								<option value='female'>жен</option>
							</select>
						</div>
						<div className='age-inp-block'>
							<span>Возраст</span>
							<input
								type='number'
								value={age}
								onChange={e => setAge(e.target.value)}
							/>
						</div>
					</div>
					<div className='diagram-container'>
						<div className='diagram-container__left-block'>
							<img
								className='siluet'
								src={gender == 'male' ? men : woman}
								alt={gender}
							/>
						</div>
						<ul className='diagram-container__right-block'>
							{list.map(item => (
								<li key={item.id}>
									<div>
										<div style={{ backgroundColor: item.color }}></div>
										<h5>{item.title}</h5>
									</div>
									<h5>{item.nums}</h5>
								</li>
							))}
						</ul>
					</div>
					<div className='weight-inp-block'>
						<div>
							<span>Желаемый вес</span>
							<input
								type='number'
								value={wishfulWeight}
								onChange={e => setWishfulWeight(e.target.value)}
							/>
						</div>

						{display ? (
							<button className='save-btn' onClick={handleEdit}>
								Update
							</button>
						) : (
							<button
								style={!edit ? { display: 'block' } : { display: 'none' }}
								className='save-btn'
								onClick={handleAdd}
							>
								Save
							</button>
						)}
					</div>
					{person ? (
						<button onClick={() => handleDelete(person.id)}>Delete</button>
					) : null}
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

export default MainPage
