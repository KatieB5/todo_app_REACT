import React from 'react';
import uuid from "uuid/v4";
import Header from "./Header";
import RemainingTask from "./RemainingTask";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import './App.css';


class App extends React.Component {
  state = {
    tasks: [
      {text: "buy peanut butter", completed: true, date: "2019-10-21", id: uuid() },
      {text: "buy spoon", completed: true, date: "2019-10-22", id: uuid() },
      {text: "eat peanut butter with spoon", completed: false, date: "2019-10-23", id: uuid() },
      {text: "go for a walk in the countryside", completed: false, date: "2019-10-31", id: uuid() }
    ]
  };

    // this function should update the state with a new task
    addNewTask = (taskText) => {
      //take a copy of the array and make anew array
      const tasksCopy = this.state.tasks.slice();
      const newTask = {
        text: taskText,
        completed: false,
        date: "2019-10-23",
        id: uuid() 
      };
  
      tasksCopy.push(newTask);
  
      this.setState({
        tasks: tasksCopy
      });
    };
  
    render() {
      const completedTasks = this.state.tasks.filter(task => {
        return task.completed;
      });
  
      const incompleteTasks = this.state.tasks.filter(task => {
        return !task.completed;
      });
    
      return (
        <div className="container">
          <Header />
            <div className="remainingTask">
              <RemainingTask count={incompleteTasks.length} />
            </div>
          <AddTask addNewTaskFunc={this.addNewTask} />
          <h3>Things you need to do</h3>
            {incompleteTasks.map(task => {
              return <TaskItem text={task.text} completed={task.completed} key={task.id} />
            })}
          <h3>Things you've already done</h3>
            {completedTasks.map(task => {
              return <TaskItem text={task.text} completed={task.completed} key={task.id} />
            })}
        </div>
      )
    }
}

export default App;
