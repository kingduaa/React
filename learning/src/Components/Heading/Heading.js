import React from 'react'
import styles from './Heading.css'

export const Heading = (props) => {
    return (
        <>
            <h1>
            {props.title}
            </h1>
        </>
    )
}
export default Heading;