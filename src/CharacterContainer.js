import React from 'react';
import Button from './Button.js'

const CharacterContainer = props => {
    return(
        <ul>
            {props.characters.map((character, i) => {
                return(
                    <li key={i}>
                        <div>
                            <img src={`https://api.got.show/${character.imageLink}`} alt={character.name} />
                            <h2>{character.name}</h2>
                            <p>{character.house}</p>
                            <Button />
                        </div>
                    </li>
                )
            })
            }
        </ul>
    )
}





export default CharacterContainer