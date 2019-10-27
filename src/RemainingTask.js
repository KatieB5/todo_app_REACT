import React from "react"

class RemainingTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12"></div>
                    <p>You have {this.props.count} incomplete tasks</p>
            </div>
        )
    }
}

export default RemainingTask;