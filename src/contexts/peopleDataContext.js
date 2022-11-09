import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

// const API = 'http://34.28.220.66/'
const API = 'http://localhost:8000/specifications'

export const PersonContextProvider = ({ children }) => {
	const [person, setPerson] = useState(null)

	async function addPerson(newPerson) {
		try {
			// const tokens = JSON.parse(localStorage.getItem('token'))
			// const Authorization = `Bearer ${tokens.access}`

			// const config = {
			// 	headers: {
			// 		Authorization,
			// 	},
			// }

			await axios.post(API, newPerson)
			// const { data } = await axios.post(`${API}api/v1/crud/`, newPerson)
			// setPerson(formData)
			// console.log(data)
		} catch (err) {
			console.error(err)
		}
	}

	async function getPerson() {
		const { data } = await axios(API)

		data.forEach(item => setPerson(item))
	}

	console.log(person)

	async function updatePerson(newPerson) {
		const { data } = await axios.patch(`${API}/${1}`, newPerson)

		console.log(data)
	}

	async function deletePerson(id) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `Bearer ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			await axios.delete(`${API}/${id}`, config)
		} catch (err) {
			console.error(err)
		}
	}

	const values = {
		addPerson,
		getPerson,
		updatePerson,

		person,
	}
	return (
		<personContext.Provider value={values}>{children}</personContext.Provider>
	)
}
