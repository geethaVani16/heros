import React from 'react'
import '../CardList/styles.css'
import { Card } from '../CardItem/CardComp'

export const Cardlist = (props) => {
    return (
        <div className='cardlist'>

            {props.monsters.length>0 && props.monsters.map(monster => <Card key={monster.id} monster={monster} />
            )}
        </div>
    )
}