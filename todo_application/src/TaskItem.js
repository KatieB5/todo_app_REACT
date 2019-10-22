import React from "react";

class TaskItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-2 TaskItemText">
                    <p>{this.props.text}</p>
                </div>
                <div className="col-1" id="complete_button">
                <button type="button" className="btn btn-success">Complete</button>
                </div>
                <div className="col-1" id="delete_button">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}

export default TaskItem;