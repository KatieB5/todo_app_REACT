import React from "react";
import moment from "moment";

class AddTask extends React.Component {
    state = {
      newItemText: "",
      dateSelected: moment().format("YYYY-MM-DD")
    };
  
    // functions which update state must always live where the state lives
    updateNewItemText = (event) => {
      // this function should update the state whenever someone types
      this.setState({
        newItemText: event.target.value
      });
    };
  
    handleClick = (event) => {
      event.preventDefault();
      this.props.addNewTaskFunc(this.state.newItemText, this.state.dateSelected);
      this.setState({
        newItemText: "", 
        dateSelected: moment().format("YYYY-MM-DD")
      });
    };

    handleDateChange = e => {
        console.log(e.target.value);
        this.setState({
          dateSelected: e.target.value
        });
    }

    render() {
        return (
            <form className="form-inline" id="addItemForm">
            <div className="form-group mx-sm-3 mb-2">
                <input
                type="text"
                className="form-control"
                id="newItem"
                placeholder="Type an item here"
                value={this.state.newItemText}
                onChange={this.updateNewItemText} >
                </input>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="date" onChange={this.handleDateChange}></input>
            </div>
            <button type="submit" className="btn btn-primary mb-2" id="addTaskButton" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}>Add task</button>
        </form>
        )
    }
}

export default AddTask;