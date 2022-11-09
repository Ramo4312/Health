import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

const API = 'http://34.133.205.247/'

export const PersonContextProvider = ({ children }) => {
	const [person, setPerson] = useState(null)

	async function addPerson(newPerson) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			const res = await axios.post(`${API}person/`, newPerson, config)
			console.log(res)
		} catch (err) {
			console.error(err)
		}
	}

	async function getPerson() {
		try {
			const { data } = await axios(`${API}person/`)
			data.forEach(item => setPerson(item))
		} catch (err) {
			console.log(err)
		}
	}

	console.log(person)

	// console.log(res)

	async function updatePerson(id, newPerson) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `JWT ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}
			const res = await axios.patch(`${API}person/${id}/`, newPerson, config)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
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
