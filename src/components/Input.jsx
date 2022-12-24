import React from 'react'
import '../styles/Input.css'

export default function Input(props) {
	return (
		<input
			className='input'
			onChange={props.onChange}
			value={props.value}
			type={props.type}
		/>
	)
}
