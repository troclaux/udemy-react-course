import React from 'react';

export default function BotaoNavbar(props) {
    return (
        <button onClick={props.}>
            {props.children}
        </button>
    )
}
