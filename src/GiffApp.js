import React, { useState } from 'react'
import { Cabecera } from './components/Cabecera'
import { GiffGrid } from './components/GiffGrid'

export const GiffApp = () => {
    const [categories, setCategories] = useState([''])

    return (
        <>
            <Cabecera setCategories={setCategories} />

            {
                categories.map((category => <GiffGrid
                    key={category}
                    category={category} />))
            }

        </>
    )
}
