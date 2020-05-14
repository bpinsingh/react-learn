import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>
{
  const [ personsState, setPersonsState ] = useState(
    {
        persons: [
          { name: 'Bipin', age: 28 },
          { name: 'Moni', age: 25 },
          { name: 'Wilson', age: 27 }
        ]
      }
  )

  const [otherState, steOtherState] = useState('Some other value');
  console.log(personsState, otherState)
  const switchNameHandler = () =>
  {
    setPersonsState( {
        persons: [
          { name: 'Toni', age: 28 },
          { name: 'Moni', age: 25 },
          { name: 'Wilson', age: 27 }
        ]
    })
  }
  // render()
  // {
    return(
      <div className="App">
        <h1> Hi, I'm a react app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies: bahut saare hain</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/> 
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1', null, "Hi I am a react app!!!!"))
  // }
}
export default App;
// state = {
//   persons: [
//     { name: 'Bipin', age: 28 },
//     { name: 'Moni', age: 25 },
//     { name: 'Wilson', age: 27 }
//   ],
//   otherState: 'Some Other values'
// }
