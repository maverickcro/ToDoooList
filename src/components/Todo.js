import React, {Component} from 'react';
import './Todo.css';
class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleRemove=this.handleRemove.bind(this);
        this.toogleForm=this.toogleForm.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleToogle=this.handleToogle.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toogleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }
    handleUpdate(evt){
        evt.preventDefault();
        //ovdje moramo definirati task koji ce se updateati i slati parentu odnosno ToDoListi
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
     }
     handleToogle(evt) {
         this.props.toogleTodo(this.props.id);
     }
    render() {
        let result;
        if(this.state.isEditing) {
            result = (<div className="Todo">
                <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                    <input 
                        type="text" 
                        value={this.state.task} 
                        name="task"
                        onChange={this.handleChange}
                        >
                    </input>
                    <button >Save</button>
                </form>
            </div>);
        } else {
            result = (<div className="Todo">
                <li onClick={this.handleToogle} 
                className={this.props.completed ? 
                    "Todo-task completed" : "Todo-task"} >
                    {this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toogleForm}>
                            <i class='fas fa-pen'/>
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class='fas fa-trash'/>
                        </button>
                    </div>
                
            </div>);
        }
        return result;
            
    
    }
}

export default ToDo;