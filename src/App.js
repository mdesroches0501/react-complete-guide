import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Mike', age: '31' },
      { name: 'Stephanie', age: '25' }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = ( newName ) => {
    //console.log('Clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Maximilion';
    this.setState( {
      persons: [
        { name: newName, age: '28' },
        { name: 'Mike', age: '31' },
        { name: 'Stephanie', age: '28' }
      ] 
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!!')} >My Hobbies: Hiking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;