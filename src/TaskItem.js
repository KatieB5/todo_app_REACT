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
                <div className="col-3">
                    {!this.props.completed && (
                        <button type="button" className="btn btn-success" id="complete_button" disabled={this.props.completed}>
                        Complete
                        </button>
                    )}
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" id="delete_button"> <img src="https://img.icons8.com/bubbles/2x/delete-sign.png" height="70px"/></button>
                </div>
            </div>
        )
    }
}

export default TaskItem;