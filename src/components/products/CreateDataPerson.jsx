import React from 'react'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import '../../styles/CRUD.css'
import { usePerson } from '../../contexts/peopleDataContext'
import { Navigate, useNavigate } from 'react-router-dom'
import '../../styles/adaptive/CRUD-adaptive.css'

const CreateDataPerson = () => {
	const [name, setName] = React.useState('')
	const [illness, setIllness] = React.useState('')
	const [photo, setPhoto] = React.useState('')
	const [age, setAge] = React.useState('')
	const [height, setHeight] = React.useState('')
	const [weight, setWeight] = React.useState('')
	const [bloodType, setBloodType] = React.useState('')
	const [disability, setDisability] = React.useState('')
	const [allergy, setAllergy] = React.useState('')
	const [inijury, setInijury] = React.useState('')
	const [symptoms, setSymptoms] = React.useState('')

	let navigate = useNavigate()

	const { addPerson } = usePerson()

	function handleSave() {
		if (
			!illness.trim() ||
			!age.trim() ||
			!height.trim() ||
			!weight.trim() ||
			!allergy.trim() ||
			!illness.trim() ||
			!inijury.trim()
		) {
			alert('Some inputs are empty')
			return
		}

		addPerson(
			illness,
			age,
			height,
			weight,
			bloodType,
			disability,
			allergy,
			inijury,
			symptoms
		)
		alert('created')

		setIllness('')
		setAge('')
		setHeight('')
		setWeight('')
		setBloodType('')
		setDisability('')
		setAllergy('')
		setInijury('')
		setSymptoms('')
	}

	return (
		<div
			className='crud-block'
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div className='crud-inputs-block4'>
				<div className='crud-inputs-block4-select'>
					<FormControl
						className='crud-inputs__inner-select'
						color='warning'
						variant='standard'
					>
						<InputLabel id='demo-simple-select-standard-label'>
							Группа крови
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={bloodType}
							onChange={(e) => setBloodType(e.target.value)}
							label='Age'
						>
							<MenuItem className='menu-item' value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem className='menu-item' value={1}>
								I
							</MenuItem>
							<MenuItem className='menu-item' value={2}>
								II
							</MenuItem>
							<MenuItem className='menu-item' value={3}>
								III
							</MenuItem>
							<MenuItem className='menu-item' value={4}>
								IV
							</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						color='warning'
						variant='standard'
						className='crud-inputs__inner-select'
					>
						<InputLabel id='demo-simple-select-standard-label'>
							Инвалидность
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={disability}
							onChange={(e) => setDisability(e.target.value)}
							label='Age'
						>
							<MenuItem className='menu-item' value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem className='menu-item' value={false}>
								Нет
							</MenuItem>
							<MenuItem className='menu-item' value={true}>
								Да
							</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className='crud-input-block1'>
					<input
						value={age}
						onChange={(e) => setAge(e.target.value)}
						type='number'
						placeholder='Возраст'
						className='crud-inputs-mini'
					/>
					<input
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						type='number'
						placeholder='Рост'
						className='crud-inputs-mini'
					/>
					<input
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
						type='number'
						placeholder='Вес'
						className='crud-inputs-mini'
					/>
				</div>
				<div className='input-block2'>
					<input
						value={illness}
						onChange={(e) => setIllness(e.target.value)}
						type='text'
						className='crud-inputs'
						placeholder='Болезнь'
					/>
					<input
						value={allergy}
						onChange={(e) => setAllergy(e.target.value)}
						type='text'
						className='crud-inputs'
						placeholder='Алергии'
					/>
					<input
						value={inijury}
						onChange={(e) => setInijury(e.target.value)}
						type='text'
						className='crud-inputs'
						placeholder='Травмы'
					/>
					<input
						value={symptoms}
						onChange={(e) => setSymptoms(e.target.value)}
						type='text'
						className='crud-inputs'
						placeholder='Симптомы...'
					/>
				</div>
				<button className='create-btn' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	)
}

export default CreateDataPerson
