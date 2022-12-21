import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const API = 'http://34.121.113.174/person/'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

export const PersonContextProvider = ({ children }) => {
	const [persons, setPersons] = useState([])
	const [person, setPerson] = useState(null)

	async function addPerson(
		age,
		height,
		currentWeight,
		wishfulWeight,
		gender,
		username,
		massa
	) {
		try {
			let formData = new FormData()
			formData.append('age', age)
			formData.append('height', height)
			formData.append('weight_now', currentWeight)
			formData.append('weight_want', wishfulWeight)
			formData.append('gender', gender)
			formData.append('username', username)
			formData.append('massa', massa)

			const token = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${token.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.post(API, formData, config)
		} catch (err) {
			console.log(err)
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
			await axios.patch(`${API}${id}/`, newPerson, config)

			// setPersons(res)
			// console.log(res)
			alert('update successfully')
		} catch (err) {
			console.log(err)
		}
	}

	async function deletePerson(id) {
		try {
			const token = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${token.access}`

			// console.log(token)

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.delete(`${API}${id}/`, config)
			setPersons(null)
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
	}
	return (
		<personContext.Provider value={values}>{children}</personContext.Provider>
	)
}
