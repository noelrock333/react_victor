import React from 'react';
import { connect } from 'react-redux';

function Footer(props) {
    return (
        <footer>
            Soy un footer {props.name} {props.last_name}
            <br/>
            Mis mascotas son: {props.pets.join(', ')}
        </footer>
    )
}

const mapStateToProps = ({ user, pets }) => {
    return {
        name: user.name,
        last_name: user.last_name,
        pets
    }
} 

export default connect(mapStateToProps)(Footer);
