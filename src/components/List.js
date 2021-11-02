import React, { Component } from 'react';


class List extends Component {
    render() {
        const { description, status } = this.props.task
        const { index } = this.props

        
        return (
            <>
                <div className="col-9 mx-1">
            {description}
                </div>
                <div className="col-1">
            {status}
                </div>
                <div className="col-1">
                
                <button type="button" class="btn btn-danger"onClick={() => this.props.deleteTask(index)}>supprimer</button>
            
                </div>
        </>
        )
    }
}

export default List;