import React from 'react'
import styles from './Images.css'

const Images = (props) => {
  const links = ["https://img.icons8.com/color/48/html-5--v1.png", "https://img.icons8.com/plasticine/100/css3.png", "https://img.icons8.com/color/48/javascript--v1.png", "https://img.icons8.com/officel/16/react.png"]
  return (
    <>
      {links.map((e)=> <img src={e} />)}
    </>
  )
}

export default Images