import React from "react"

class AddTask extends React.Component {
    state = {
      newItemText: ""
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
      this.props.addNewTaskFunc(this.state.newItemText);
      this.setState({
        newItemText: ""
      });
    };

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
            <button type="submit" className="btn btn-primary mb-2" id="addTaskButton" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}>Add task</button>
        </form>
        )
    }
}

export default AddTask;