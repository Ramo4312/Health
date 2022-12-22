import React from 'react'
import '../styles/Button.css'

export default function Button(props) {
  return (
    <button className='button' onClick={props.onClick} value={props.value} type={props.type} disabled={props.disabled}>{props.desc}</button>
  )
}
