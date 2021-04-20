
import Modal from 'react-modal'
import React, { Component } from 'react'

Modal.setAppElement('#root')

class ToDoItem extends Component {
    constructor(props){
        super(props)

        this.state={
            modal:false
        }
    }

    openModal=() => {
        this.setState({
            modal:true
        })
    }

    render(){
        const {title, handleDelete, handleEdit} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" >
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success " onClick={handleEdit} > <i className="fas fa-pen" /> </span>
                    <span className="mx-2 text-danger " onClick={this.openModal} > <i className="fas fa-trash" /> </span>
                    <Modal 
                    isOpen={this.state.modal} onRequestClose={()=>this.setState({modal:false})}
                    style={{
                        content: {
                            position: 'absolute',
                            top: '200px',
                            left: '20%',
                            right: '20%',
                            bottom: '200px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px',
                            text: 'center'
                          }
                    }}
                    >
                        <h2 className="text-center mt-5" >Do you want to delete this task?</h2>
                        <div className="flex text-center">
                        <button onClick={()=>this.setState({modal:false})} className="btn btn-primary mx-3  my-4  " >Close</button>
                        <button onClick={handleDelete} className="btn btn-danger mx-3  my-4  " >Delete</button>
                        </div>
                    </Modal>
                </div>
            </li>
        )
    }
}

export default ToDoItem