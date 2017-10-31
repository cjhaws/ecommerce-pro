import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { graphql, gql, } from 'react-apollo'

//copy in from graphql what that info is from the query. will need to create a const and assign as QUERY


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default graphql(QUERY)(App)
