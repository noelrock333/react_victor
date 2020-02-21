import React, { useState, useEffect } from 'react';
import setUser from '../../redux/actions/setUser';
import setPet from '../../redux/actions/setPet';
import { connect } from 'react-redux';

function Header(props) {
    let [state, setState] = useState({ name: '', last_name: '' });
    let [pet, setPet] = useState('');

    useEffect(() => {
        console.log(state)
    })

    function handleInput(ev) {
        setState({
            ...state,
            [ev.target.name]: ev.target.value
        })
    }

    return (
        <header>
            Soy un header
            <div>
                <input type="text" name="name" onChange={(ev) => handleInput(ev)} value={state.name} />
                <input type="text" name="last_name" onChange={handleInput} value={state.last_name} />
            </div>
            <div>
                <input type="text" name="pet" value={pet} onChange={ev => setPet(ev.target.value)} />
            </div>
            <button onClick={() => {
                props.setUser(state);
                props.setPet(pet);
            }}>
                Traer usuario
            </button>
        </header>
    )
}

export default connect(null, { setUser, setPet })(Header);
