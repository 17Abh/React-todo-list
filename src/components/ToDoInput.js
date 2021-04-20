import React, { Component } from 'react'

class ToDoInput extends Component {
    render(){
        const {item, handleChange , handleSubmit, editItem } = this.props
        return(
            <div className="card card-body my-3" >
                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-dark text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>

                        <input type="text" className="form-control" placeholder="add task here" value={item} item={item}  onChange={handleChange} />
                    </div>
                    <button disabled={!item}
                     type="submit" 
                    className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-dark mt-3"} >
                        {editItem ? 'Edit Task' : 'Add Task'}</button>
                </form>
            </div>

        )
    }
}

export default ToDoInput