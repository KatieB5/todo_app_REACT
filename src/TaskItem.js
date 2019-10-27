import React from "react";

class TaskItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6 TaskItemText">
                    <p className={this.props.completed ? "completed" : ""}>
                    {this.props.text}
                    </p>
                </div>
                <div className="col-3" id="complete_button">
                    {!this.props.completed && (
                        <button type="button" className="btn btn-success"disabled={this.props.completed}>
                        Complete
                        </button>
                    )}
                </div>
                <div className="col-3" id="delete_button">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}

export default TaskItem;