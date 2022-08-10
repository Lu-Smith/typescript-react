import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Luna Smith",
      age: 37,
      url: "https://images.pexels.com/photos/2422913/pexels-photo-2422913.jpeg?auto=compress&cs=tinysrgb&w=1600",
      note: "Life is good",
    }
  ]);

  return (
    <div className="App">
      <h1>Members</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
