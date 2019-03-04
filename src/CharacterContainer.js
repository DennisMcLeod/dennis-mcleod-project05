import React from 'react';
import Button from './Button.js'

const handleClick = isAlive => {
    if (isAlive === true) {
        alert('Still Kicking!');
    } else {
        alert('Definitely not alive');
    }
}
const CharacterContainer = props => {
    return(
        <div class="wrapper">
            <ul className='grid-container'>
                {props.characters.map((character, i) => {
                    console.log(character.img)
                    return(
                        <li key={i} id={i}>
                            <div className="character-container">
                                <div className="image">
                                    <img 
                                    src={character.img} 
                                    alt={character.name} 
                                    />
                                
                                </div>
                                <h2>{character.name}</h2>
                                <p>{character.house}</p>
                                <Button 
                                    handleClick={handleClick}
                                    isAlive={character.alive}
                                />
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        
        </div>
    )
}





export default CharacterContainer