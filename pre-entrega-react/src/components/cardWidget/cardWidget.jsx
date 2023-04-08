import React from 'react'
import '../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CardWidget() {
    return (
        <div className="cardWidget">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>0</span>
        </div>
    ) 
}

export default CardWidget

