import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Luna Smith",
      age: 37,
      img: "https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1600",
      note: "“Art is not a thing, it is a way.”",
    },
    {
      name: "Ross Miller",
      age: 35,
      img: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1600",
      note: "“The principle of true art is not to portray, but to evoke.”",
    }
  ])

  return (
    <div className="App">
      <h1>Club Members</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
