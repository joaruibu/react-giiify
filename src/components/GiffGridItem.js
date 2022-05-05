import React from 'react'

export const GiffGridItem = ({ title, url }) => {
    return (
        <>
            <section className='animate__animated animate__fadeIn giffGrid__item'>

                <img src={url} alt={title} />
                <h4>{title}</h4>

            </section>
        </>
    )
}

