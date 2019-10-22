import React from "react"

class AddTask extends React.Component {
    render() {
        return (
            <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" id="inewItem" placeholder="Type a task here"></input>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add task</button>
        </form>
        )
    }
}

export default AddTask;