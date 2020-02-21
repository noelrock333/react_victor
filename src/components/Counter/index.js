import React, { useState, useEffect, useEffect as algunNombre } from 'react';

function Counter({ startAt }) {
    let [counter, setCounter] = useState(startAt || 0);
    useEffect(() => {
        console.log('Ya me renderié');
    }, [])

    algunNombre(() => {
        console.log('Ya me renderié 2');
    })
    
    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => setCounter(estadoAnterior => estadoAnterior - 1)}>Restar</button>
                <button onClick={() => setCounter(startAt)}>Reiniciar</button>
                <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
            </div>
        </div>
    )
}

export default Counter;