import React from 'react'
import { useEffect } from 'react'
import { usePerson } from '../contexts/peopleDataContext'

const Profile = () => {
	const { person, getPerson } = usePerson()

	useEffect(() => {
		getPerson()
		console.log(person)
	}, [])

	return <div></div>
}

export default Profile
