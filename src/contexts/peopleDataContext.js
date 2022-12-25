import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const API = 'http://35.226.2.99/person/'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

export const PersonContextProvider = ({ children }) => {
	const [persons, setPersons] = useState([])
	const [person, setPerson] = useState(null)

	async function addPerson(
		username,
		age,
		height,
		currentWeight,
		wishfulWeight,
		gender,
		bmi
	) {
		let formData = new FormData()
		formData.append('username', username)
		formData.append('age', age)
		formData.append('height', height)
		formData.append('weight_now', currentWeight)
		formData.append('weight_want', wishfulWeight)
		formData.append('gender', gender)
		formData.append('massa', bmi)

		try {
			const token = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.post(API, formData, config)
		} catch (err) {
			console.log(err.response.data, err.message)
		}
	}

	async function getPerson() {
		try {
			let username = JSON.parse(localStorage.getItem('username'))
			const { data } = await axios(API)
			data.find(item => {
				if (item.username == username) {
					setPerson(item)
				}
			})
		} catch (err) {
			console.log(err, 'haha')
		}
	}

	async function updatePerson(id, newPerson) {
		try {
			const token = JSON.parse(localStorage.getItem('token'))
			const Authorization = `Bearer ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}
			let { data } = await axios.patch(`${API}${id}/`, newPerson, config)

			setPersons(data)
			// console.log(data)
			// alert('update successfully')
		} catch (err) {
			console.log(err)
		}
	}

	async function deletePerson(id) {
		try {
			const token = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.delete(`${API}${id}/`, config)
			setPersons(null)
			// getPerson()
		} catch (err) {
			console.error(err, 'qwert')
		}
	}

	const values = {
		addPerson,
		getPerson,
		updatePerson,
		deletePerson,

		persons,
		person,
		setPerson,
	}
	return (
		<personContext.Provider value={values}>{children}</personContext.Provider>
	)
}
