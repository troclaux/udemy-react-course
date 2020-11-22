import React from 'react';
import {useState} from 'react';

export default function Arthur(props) {

    //let text = props.text.toUpperCase();
    let [cont, setCont] = useState(1);
    function aumenta(){
        setCont(cont => cont + 1);
    }
    function diminui(){
        setCont(cont => cont - 1);
    }
    return (
        <div>
            <div>
                <button onClick={diminui}>-</button>
                {cont}
                <button onClick={aumenta}>+</button>
            </div>
        </div>

    );
}
