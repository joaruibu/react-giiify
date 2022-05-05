import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('busca tu giff');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('')
        setCategories((cats) => [inputValue, ...cats])
    }

    return (
        <form onSubmit={handleSubmit} className='header__search'>

            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setInputValue('')}
            />

        </form>
    )
}
