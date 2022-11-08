import React, { useContext, createContext, useState } from 'react'
import axios from 'axios'

const personContext = createContext()
export const usePerson = () => useContext(personContext)

const API = 'http://34.28.220.66/'

export const PersonContextProvider = ({ children }) => {
	const [persons, setPerson] = useState([])

	async function addPerson(newPerson) {
		try {
			const tokens = JSON.parse(localStorage.getItem('token'))
			const Authorization = `Bearer ${tokens.access}`

			const config = {
				headers: {
					Authorization,
				},
			}

			const { data } = await axios.post(`${API}api/v1/crud/`, newPerson)
			// setPerson(formData)
			console.log(data)
		} catch (err) {
			console.error(err)
		}
	}

	async function updatePerson() {}

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

		persons,
	}
	return (
		<personContext.Provider value={values}>{children}</personContext.Provider>
	)
}
