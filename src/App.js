import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'


class App extends Component {

  state = {
    username: "jksantos_santos"
  }

  usernameHandler = (event) => {

    this.setState({
      username: event.target.value
    })

  }

  render() {
    return (
      <div className="App">

        <h1 style={{
          textAlign: "center",
          letterSpacing: '-.05rem'
        }}>Usernames Lists</h1>

        <UserInput change={this.usernameHandler.bind(this)} value={this.state.username} />

        <UserOutput
          username={this.state.username}
          />
        <UserOutput
          username={this.state.username}
          />
        <UserOutput username="Max">
          <span>Teacher's line from props.children</span>
        </UserOutput>

      </div>
    );
  }
}

export default App;
