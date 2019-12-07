import React from 'react';
import axios from "axios";
import moment from "moment";
import Header from "./Header";
import RemainingTask from "./RemainingTask";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import './App.css';


class App extends React.Component {
  state = {
    tasks: []
    // {text: "buy peanut butter", completed: true, date: "2019-10-21", id: uuid(), dueDate: "2019-12-25"  },
  };

  componentDidMount() {
    axios.get("https://bd30im28na.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then((response) => {
        const tasks = response.data;
        this.setState({
          tasks: tasks
        });
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      })
  }

  // this function should update the state with a new task
  addNewTask = (taskText, dueByDate) => {
    //take a copy of the array and make a new array
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText,
      completed: false,
      dateCreated: moment().format("YYYY-MM-DD"),
      dateDue: dueByDate,
      userID: 1
    };

    axios.post("https://bd30im28na.execute-api.eu-west-1.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const tasksFromDB = response.data;
        console.log(tasksFromDB);
        tasksCopy.push(tasksFromDB);

        this.setState({
          tasks: tasksCopy
        });
      })

      .catch((err) => {
        console.log(err);
      })
  };

  deleteTask = id => {
    axios.delete("https://bd30im28na.execute-api.eu-west-1.amazonaws.com/dev/tasks/" + id)
      .then((response) => {
        console.log(response);
        const remainingTasks = this.state.tasks.filter(task => {
          return task.taskID !== id;
        });
        this.setState({
          tasks: remainingTasks
        });
      })

      .catch((err) => {
        console.log(err);
      })
  }

  completeTask = id => {
    axios.put("https://bd30im28na.execute-api.eu-west-1.amazonaws.com/dev/tasks/" + id)
      .then((response) => {
        console.log(response);
        const updatedTasks = this.state.tasks.map(task => {
          if (task.taskID === id) {
            task.completed = true;
          }
          return task;
        });
        this.setState({
          tasks: updatedTasks
        });
      })

      .catch((err) => {
        console.log(err);
      })
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
            return <TaskItem text={task.text} completed={task.completed} key={task.taskID} deleteTaskFunc={this.deleteTask} id={task.taskID} completeTaskFunc={this.completeTask} date={task.dateCreated} dueDate={task.dateDue} />
          })}
        </div>
        <div className="container p-3 m-3" id="completeTaskContainer">
          <h3>Things you've already done</h3>
          {completedTasks.map(task => {
            return <TaskItem text={task.text} completed={task.completed} key={task.taskID} deleteTaskFunc={this.deleteTask} id={task.taskID} date={task.dateCreated} dueDate={task.dateDue} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
