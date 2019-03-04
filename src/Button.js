import React from 'react';

const Button = props => {
    return(
        <button onClick={() => {props.handleClick(props.isAlive)}}>Are they Alive?</button>
    )
}

export default Button