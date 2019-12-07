import React from "react";
import moment from "moment";

class TaskItem extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }

    handleComplete = () => {
        this.props.completeTaskFunc(this.props.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-3 TaskItemText">
                    <p className={this.props.completed ? "completed" : ""}>
                        {this.props.text}
                    </p>
                </div>
                <div className="col-2">
                    <p>{moment(this.props.date, "YYYY-MM-DD").format("dddd Do MMMM")}</p>
                </div>
                <div className="col-2">
                    <p>Due {moment(this.props.dueDate, "YYYY-MM-DD").fromNow()}</p>
                </div>
                <div className="col-2">
                    {!this.props.completed && (
                        <button type="button" className="btn btn-success" id="complete_button" disabled={this.props.completed} onClick={this.handleComplete}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/BlueFlat_tick_icon.svg/512px-BlueFlat_tick_icon.svg.png" height="70px" /></button>
                    )}
                </div>
                <div className="col-2">
                    <button className="btn btn-danger" id="delete_button" onClick={this.handleDelete}> <img src="https://img.icons8.com/plasticine/2x/delete-forever.png" height="90px" /></button>
                </div>
            </div>
        )
    }
}

export default TaskItem;