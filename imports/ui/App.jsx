import React, { Component } from 'react';
import Layout from './layouts';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <p> my name is rowland </p>
    ));
  }
 
  render() {
    return (
        <div>
          <Layout />
        </div>
    );
  }
}