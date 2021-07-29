import React from 'react'
import style from './style.module.css'

function Rating({ stars }) {
    let result = [];
    for (let i = 1; i < 6; i++) {
        result.push(<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
            d="M16 6.18179L10.1863 5.79957L7.99681 0.299072L5.80734 5.79957L0 6.18179L4.45419 9.96385L2.99256 15.701L7.99681 12.5379L13.0011 15.701L11.5395 9.96385L16 6.18179Z" 
            fill={i <= stars ? '#DC780B' : '#EDEDED'}/>
        </svg>)
    }
    return (
        <div className={style.rating}>
            {result}
        </div>
    )
}

export default Rating