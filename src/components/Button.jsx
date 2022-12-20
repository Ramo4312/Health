import React from 'react'
import '../styles/Button.css'

export default function Button(props) {
  return (
    <button className='button'>{props.desc}</button>
  )
}
