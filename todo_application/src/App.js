import React from 'react';
import Header from "./Header";
import RemainingTask from "./RemainingTask";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RemainingTask count={6}/>
        <AddTask />
        <TaskItem text="Buy birthday card"/>
        <TaskItem text="Book holiday"/>
        <TaskItem text="Rent skis"/>
      </div>
    )
  }
}

export default App;
