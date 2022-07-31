import CardDescription from './CardDescription'
import React from 'react'
import CardLogo from './CardLogo'

import './Card.css'

function Card(props){
   
    return <div className='card'>
        <CardLogo img={props.img} />
     <CardDescription title={props.description.title} about={props.description.about}/>
    </div>
}
export default Card;