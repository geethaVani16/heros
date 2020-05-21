import React from 'react'
import './styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    console.log(handleChange,"han")
    return (
        <input
            className='searchBox'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}