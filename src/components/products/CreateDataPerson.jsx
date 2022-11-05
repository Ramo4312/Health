import React from 'react'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import '../../styles/CRUD.css'
import { usePerson } from '../../contexts/peopleDataContext'
import { useNavigate } from 'react-router-dom'

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
			!name.trim() ||
			!illness.trim() ||
			!photo.trim() ||
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
			name,
			illness,
			photo,
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

		setName('')
		setIllness('')
		setPhoto('')
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
		<div className='crud-parent-block'>
			<div
				className='crud-block'
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div className='crud-inputs-block3'>
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						type='text'
						className='name'
						placeholder='Имя'
					/>
					<input
						value={photo}
						onChange={e => setPhoto(e.target.value)}
						type='file'
						className='photo'
						placeholder='Фото'
					/>
					<div className='crud-input-block1'>
						<input
							value={age}
							onChange={e => setAge(e.target.value)}
							type='number'
							placeholder='Возраст'
							className='age'
						/>
						<input
							value={height}
							onChange={e => setHeight(e.target.value)}
							type='number'
							placeholder='Рост'
							className='height'
						/>
						<input
							value={weight}
							onChange={e => setWeight(e.target.value)}
							type='number'
							placeholder='Вес'
							className='weight'
						/>
					</div>
				</div>
				<div className='crud-inputs-block4'>
					<FormControl
						style={{
							width: '150px',
							marginRight: '40px',
						}}
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
							onChange={e => setBloodType(e.target.value)}
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
						style={{
							width: '150px',
							marginLeft: '40px',
						}}
						color='warning'
						variant='standard'
					>
						<InputLabel id='demo-simple-select-standard-label'>
							Инвалидность
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={disability}
							onChange={e => setDisability(e.target.value)}
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
					<div className='input-block2'>
						<input
							value={illness}
							onChange={e => setIllness(e.target.value)}
							type='text'
							className='illness'
							placeholder='Болезнь'
						/>
						<input
							value={allergy}
							onChange={e => setAllergy(e.target.value)}
							type='text'
							className='allergy'
							placeholder='Алергии'
						/>
						<input
							value={inijury}
							onChange={e => setInijury(e.target.value)}
							type='text'
							className='inijury'
							placeholder='Травмы'
						/>
						<input
							value={symptoms}
							onChange={e => setSymptoms(e.target.value)}
							type='text'
							className='symptoms'
							placeholder='Симптомы...'
						/>
					</div>
					<button
						className='create-btn'
						onClick={() => {
							// navigate('/')
							handleSave()
						}}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreateDataPerson
