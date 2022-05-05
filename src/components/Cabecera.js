import React from 'react'
import { AddCategory } from './AddCategory'



export const Cabecera = ({ setCategories }) => {
    return (

        <header>
            <h2 className='header__title'>giiify</h2>
            < AddCategory setCategories={setCategories} />
        </header>

    )
}
