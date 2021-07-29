import React from 'react'
import Rating from './Rating'
import s from './style.module.css'

function Card() {
    return (
        <div className={s.card}>
            <img src={'https://kartinkin.com/uploads/posts/2021-04/thumbs/1617232330_39-p-zharenaya-kurochka-krasivo-50.jpg'} />
            <div className={s.description}>
                <div className={s.name}>
                    <h2>Vegie Muffen</h2>
                    <h2>16$</h2>
                </div>
                <p>
                There are many things are needed to start the Fast Food Business.
                </p>
                <div className={s.rating}>
                    <button className={s.add}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.74868 6.74868V12H5.25132V6.74868H0V5.25132H5.25132V0H6.74868V5.25132H12V6.74868H6.74868Z" fill="white"/>
                        </svg>
                    </button>
                    <Rating stars={4} />
                </div>
            </div>
        </div>
    )
}

export default Card