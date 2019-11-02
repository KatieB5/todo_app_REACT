import React from 'react';
import uuid from "uuid/v4";
import moment from "moment";
import Header from "./Header";
import RemainingTask from "./RemainingTask";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import './App.css';


class App extends React.Component {
  state = {
    tasks: [
      {text: "buy peanut butter", completed: true, date: "2019-10-21", id: uuid(), dueDate: "2019-12-25"  },
      {text: "buy spoon", completed: true, date: "2019-10-22", id: uuid(), dueDate: "2019-12-23" },
      {text: "eat peanut butter with spoon", completed: false, date: "2019-10-23", id: uuid() , dueDate: "2020-11-30" },
      {text: "go for a walk in the countryside", completed: false, date: "2019-10-31", id: uuid(), dueDate: "2020-01-23" }
    ]
  };

    // this function should update the state with a new task
    addNewTask = (taskText, dueByDate) => {
      //take a copy of the array and make anew array
      const tasksCopy = this.state.tasks.slice();
      const newTask = {
        text: taskText,
        completed: false,
        date: moment().format("YYYY-MM-DD"),
        id: uuid(),
        dueDate: dueByDate
      };
  
      tasksCopy.push(newTask);
  
      this.setState({
        tasks: tasksCopy
      });
    };

    deleteTask = id => {
      const remainingTasks = this.state.tasks.filter(task => {
        return task.id !== id;
      });

      this.setState({
        tasks: remainingTasks
      });
    }

    completeTask = id => {
      const updatedTasks = this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = true;
        }
        return task;
      });
  
      this.setState({
        tasks: updatedTasks
      });
    }
  
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
          <div className="container p-3 m-3" id="incompleteTaskContainer">
          <h3>Things you need to do</h3>
            {incompleteTasks.map(task => {
              return <TaskItem text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} completeTaskFunc={this.completeTask} date={task.date} dueDate={task.dueDate}/>
            })}
          </div>
          <div className="container p-3 m-3" id="completeTaskContainer">
          <h3>Things you've already done</h3>
            {completedTasks.map(task => {
              return <TaskItem text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.date} dueDate={task.dueDate}/>
            })}
          </div>
        </div>
      )
    }
}

export default App;
