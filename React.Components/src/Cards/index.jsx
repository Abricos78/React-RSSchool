import React from 'react'
import Card from './Card'
import style from './style.module.css'

function Cards() {
    return (
        <div className={style.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards