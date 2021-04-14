import React, { Component } from 'react'

import ToDoItem from './TodoItem'

class ToDoList extends Component {
    render(){
        const {items, clearList, handleDelete, handleEdit} = this.props
        return(
            <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center" >Task List</h3>
                    {
                        items.map(item=>
                            
                                <ToDoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)} />
                            
                        )
                    }
                    

                    <button type="button" className="btn btn-danger btn-block mt-5" onClick={clearList} >Clear All Tasks</button>
            </ul>
        )
    }
}

export default ToDoList