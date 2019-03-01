import React from 'react';
import Button from './Button.js'

const CharacterInfo = props => {
    return(
        <li key={props.key}>
            <div>
                <img src={`https://api.got.show/${props.imageLink}`} alt="" />
                <h2>{props.name}</h2>
                <p>{props.house}</p>
                <Button />
            </div>
        </li>
    )
}

export default CharacterInfo