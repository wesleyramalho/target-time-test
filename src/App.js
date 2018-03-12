import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TargetTime from './TargetTime';

class App extends Component {
    render() {
        let weekObj = [];
        for (let i = 0; i < 7; i++) {
            weekObj[i] = new Array();
            for (let x = 0; x < 16; x++) {
                //if (x % 2 === 0) weekObj[i].push(true);
                weekObj[i].push(true);
            }
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <TargetTime week={weekObj} onChange={week => console.log(week)} />
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
