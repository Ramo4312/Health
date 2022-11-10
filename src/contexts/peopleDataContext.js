import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

const API = 'http://34.133.205.247/'

export const PersonContextProvider = ({ children }) => {
	const [person, setPerson] = useState(null)

	async function addPerson(
		name,
		surname,
		person_images,
		age,
		height,
		weight,
		sex,
		bloodType,
		allergy,
		disability,
		injury,
		illness,
		symptoms
	) {
		let formData = new FormData()

		formData.append('name', name)
		formData.append('surname', surname)
		formData.append('person_images', person_images)
		formData.append('age', age)
		formData.append('height', height)
		formData.append('weight', weight)
		formData.append('sex', sex)
		formData.append('blood_type', bloodType)
		formData.append('allergy', allergy)
		formData.append('symptoms', symptoms)
		formData.append('disability', disability)
		formData.append('injury', injury)
		formData.append('illness', illness)
		console.log(age)
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			const res = await axios.post(`${API}person/`, formData, config)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	async function getPerson() {
		try {
			const { data } = await axios(`${API}person/`)

			data.forEach((item) => setPerson(item))
		} catch (err) {
			console.log(err, 'haha')
		}
	}

	// console.log(person)

	// console.log(res)

	async function updatePerson(id, newPerson) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `Bearer ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}
			const res = await axios.patch(`${API}person/${id}/`, newPerson, config)
			setPerson(res)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	async function deletePerson(id) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${tokens.access}`

			console.log(tokens)

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.delete(`${API}person/${id}/`, config)
			setPerson(null)
		} catch (err) {
			console.error(err, 'qwert')
		}
	}

	const values = {
		addPerson,
		getPerson,
		updatePerson,
		deletePerson,

		person,
	}
	return (
		<personContext.Provider value={values}>{children}</personContext.Provider>
	)
}
