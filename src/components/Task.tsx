import React from 'react';

export const Task = (props) => {

    return(
        <>
            <li>{props.text}</li>
            <button onClick={() => props.onRemove(props.id)}>x</button>
        </>
    )

}