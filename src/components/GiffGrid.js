import React, { useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiffGridItem } from './GiffGridItem'

export const GiffGrid = ({ category }) => {

    const { title, data: gifs, loading } = useFetchGifs(category);




    return (
        <>
            {loading && <div className='animate__animated animate__fadeIn' id="loading"></div>}
            <h2 className='title__category'>{title}</h2>
            <article className=' animate__animated animate__fadeIn giffGrid'>{

                gifs.map(gif =>
                    <GiffGridItem key={gif.id} {...gif} />)
            }</article>

        </>
    )
}
