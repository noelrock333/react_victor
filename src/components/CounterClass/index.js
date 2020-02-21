import React, { Component } from 'react';

class CounterClass extends Component {
    state = {
        counter: this.props.startAt
    }

    componentDidMount() {
        console.log('Ya me monté');
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <div>
                    <button onClick={() => this.setState(({ counter }) => ({ counter: counter - 1 }))}>Restar</button>
                    <button onClick={() => this.setState({ counter: this.props.startAt })}>Reiniciar</button>
                    <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Aumentar</button>
                </div>
            </div>
        )
    }
}

export default CounterClass;