import React from 'react'
import '../CardItem/styles.css'


export const Card = (props) => {
    return (
        <div  className='CardItem'>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <div className='heroName'>{props.monster.name}</div>

        </div>

    )
}