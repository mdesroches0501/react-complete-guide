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

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: '28' },
        { name: event.target.value, age: '31' },
        { name: 'Stephanie', age: '25' }
      ] 
    } )
  }

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!!</p>
        <button 
          style={style}
          onClick={ () => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!!')}
          changed={this.nameChangedHandler} >My Hobbies: Hiking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;