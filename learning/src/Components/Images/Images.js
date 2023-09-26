import React from 'react'
import styles from './Images.css'

const Images = (props) => {
  return (
    <>
    <img src={props.link} alt={props.alt} />
    </>
  )
}

export default Images