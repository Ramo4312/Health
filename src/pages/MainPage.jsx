import React, { useEffect, useState } from 'react'
import '../styles/MainPage.css'
import SiteBar from '../components/SiteBar'
import { usePerson } from '../contexts/peopleDataContext'
import { motion } from 'framer-motion'
import woman from '../images/Woman.svg'
import men from '../images/men.svg'
import arrow from '../images/arrow.svg'
import toggler from '../images/menu.svg'

const MainPage = () => {
	const {
		getPerson,
		addPerson,
		person,
		updatePerson,
		setPerson,
		deletePerson,
	} = usePerson()

	const [open, setOpen] = useState(false)

	const [edit, setEdit] = useState(false)
	const [display, setDisplay] = useState(false)
	const [initial, setInitial] = useState(person)

	const [age, setAge] = useState(0)
	const [height, setHeight] = useState(0)
	const [gender, setGender] = useState('male')
	const [currentWeight, setCurrentWeight] = useState(0)
	const [wishfulWeight, setWishfulWeight] = useState(0)
	const [massa, setMassa] = useState(0)
	const [massaIndex, setMassaIndex] = useState(0)
	const [massaClass, setMassaClass] = useState('')

	useEffect(() => {
		getPerson()
	}, [])

	useEffect(() => {
		if (person !== null) {
			setEdit(true)

			setInitial(person)

			setAge(person.age)
			setCurrentWeight(person.weight_now)
			setHeight(person.height)
			setGender(person.gender)
			setWishfulWeight(person.weight_want)
			setMassa(person.massa)

			if (massa < 18.5) {
				setMassaIndex(1)
				setMassaClass('disadvantage')
			} else if (massa < 24.9 && massa > 18.6) {
				setMassaIndex(2)
				setMassaClass('norma')
			} else if (massa < 29.9 && massa > 24.9) {
				setMassaIndex(3)
				setMassaClass('excess')
			} else if (massa < 34.9 && massa > 29.9) {
				setMassaIndex(4)
				setMassaClass('fatness-1')
			} else if (massa < 39.9 && massa > 34.9) {
				setMassaIndex(5)
				setMassaClass('fatness-2')
			} else if (massa >= 40) {
				setMassaIndex(6)
				setMassaClass('fatness-3')
			}
		} else {
			setAge(0)
			setCurrentWeight(0)
			setHeight(0)
			setWishfulWeight(0)
			setMassa(0)
		}
	}, [person])

	useEffect(() => {
		if (massa < 18.5) {
			setMassaIndex(1)
			setMassaClass('disadvantage')
		} else if (massa < 24.9 && massa > 18.6) {
			setMassaIndex(2)
			setMassaClass('norma')
		} else if (massa < 29.9 && massa > 24.9) {
			setMassaIndex(3)
			setMassaClass('excess')
		} else if (massa < 34.9 && massa > 29.9) {
			setMassaIndex(4)
			setMassaClass('fatness-1')
		} else if (massa < 39.9 && massa > 34.9) {
			setMassaIndex(5)
			setMassaClass('fatness-2')
		} else if (massa >= 40) {
			setMassaIndex(6)
			setMassaClass('fatness-3')
		}
	}, [massa])

	useEffect(() => {
		if (!person) localStorage.setItem('isEdit', JSON.stringify(false))
	}, [])

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

		let personHeight = height / 100

		let bmi = currentWeight / (personHeight * personHeight)

		if (gender === 'male') {
			bmi = bmi * 1.1
		} else if (gender === 'female') {
			bmi = bmi * 0.9
		}

		if (age < 45) {
			bmi = bmi * 1.2
		} else if (age > 44 && age < 65) {
			bmi = bmi * 1.1
		} else if (age > 64 && age < 75) {
			bmi = bmi * 1.0
		} else if (age > 74) {
			bmi = bmi * 0.9
		}

		bmi = Math.round(bmi * 10) / 13.16

		bmi = Math.floor(bmi * 100) / 100

		addPerson(username, age, height, currentWeight, wishfulWeight, gender, bmi)

		// setMassa(bmi)

		setEdit(true)
	}

	useEffect(() => {
		if (edit) localStorage.setItem('isEdit', JSON.stringify(edit))
	}, [edit])

	useEffect(() => {
		let isEdit = JSON.parse(localStorage.getItem('isEdit'))
		setEdit(isEdit)
	}, [])

	function handleEdit() {
		let personHeight = height / 100

		let bmi = currentWeight / (personHeight * personHeight)

		if (gender === 'male') {
			bmi = bmi * 1.1
		} else if (gender === 'female') {
			bmi = bmi * 0.9
		}

		if (age < 45) {
			bmi = bmi * 1.2
		} else if (age > 44 && age < 65) {
			bmi = bmi * 1.1
		} else if (age > 64 && age < 75) {
			bmi = bmi * 1.0
		} else if (age > 74) {
			bmi = bmi * 0.9
		}

		bmi = Math.round(bmi * 10) / 13.16

		bmi = Math.floor(bmi * 100) / 100

		let newPerson = {
			age: age,
			height: height,
			weight_now: currentWeight,
			weight_want: wishfulWeight,
			gender: gender,
			massa: bmi,
		}

		setMassa(bmi)

		updatePerson(person.id, newPerson)
		setInitial(newPerson)
		setDisplay(false)
	}

	function handleDelete(id) {
		deletePerson(id)
		setEdit(false)
		setDisplay(true)
		setPerson(null)
	}

	useEffect(() => {
		console.log(person)
	}, [person])

	let list = [
		{
			title: '?????????????????????????? ??????????',
			color: 'rgba(181, 194, 44, 1)',
			nums: '<18,5',
			id: 1,
		},
		{
			title: '????????????????????',
			color: 'rgba(119, 194, 42, 1)',
			nums: '18,5-24,9',
			id: 2,
		},
		{
			title: '????????????????????',
			color: 'rgba(245, 180, 0, 1)',
			nums: '25,0-29,9',
			id: 3,
		},
		{
			title: '???????????????? 1 ??????????????',
			color: 'rgba(245, 131, 0, 1)',
			nums: '30,0-34,9',
			id: 4,
		},
		{
			title: '???????????????? 2 ??????????????',
			color: 'rgba(245, 90, 0, 1)',
			nums: '35,0-39,9',
			id: 5,
		},
		{
			title: '???????????????? 3 ??????????????',
			color: 'rgba(214, 58, 59, 1)',
			nums: '40,0 ?? ????????',
			id: 6,
		},
	]

	return (
		<div className='main-container'>
			<SiteBar open={open} setOpen={setOpen} />
			<div className='main-container__info-parent-block'>
				<img
					src={toggler}
					className='siteBar-toggler'
					onClick={() => setOpen(true)}
				/>
				<motion.div
					onClick={() => setOpen(false)}
					initial={{ opacity: 0, translateX: -50 }}
					animate={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='main-container__info-child-block'
				>
					<div className='weights-block'>
						<h4>???????? ???????? : {wishfulWeight} ????</h4>
						<h4>?????????????? ?????? : {currentWeight} ????</h4>
					</div>
					<div className='person-form'>
						<div className='height-inp-block'>
							<span>????????</span>
							<input
								type='number'
								value={height}
								onChange={e => setHeight(e.target.value)}
							/>
						</div>
						<div>
							<span>??????</span>
							<input
								type='number'
								value={currentWeight}
								onChange={e => setCurrentWeight(e.target.value)}
							/>
						</div>
						<div className='gender-inp-block'>
							<span>??????</span>
							<select
								className='gender-select'
								name='??????'
								onChange={e => setGender(e.target.value)}
							>
								<option value='male'>??????</option>
								<option value='female'>??????</option>
							</select>
						</div>
						<div className='age-inp-block'>
							<span>??????????????</span>
							<input
								type='number'
								value={age}
								onChange={e => setAge(e.target.value)}
							/>
						</div>
					</div>
					<div className='diagram-container'>
						<div className='diagram-container__left-block'>
							<img src={arrow} alt='' className={massaClass} />
							<img
								className='siluet'
								src={gender == 'male' ? men : woman}
								alt={gender}
							/>
						</div>
						<ul className='diagram-container__right-block'>
							{list.map(item => (
								<li
									key={item.id}
									style={
										massaIndex == item.id
											? {
													backgroundColor: '#C7CDFF',
													borderRadius: '15px',
											  }
											: null
									}
								>
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
							<span>???????????????? ??????</span>
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
						{person ? (
							<button
								className='delete-btn'
								onClick={() => handleDelete(person.id)}
							>
								Delete
							</button>
						) : null}
					</div>
					<div className='bodyIndex-block'>
						<h3>?????? ???????????? ???????????? ???????? - {massa}</h3>
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

export default MainPage
