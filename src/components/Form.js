import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            task:""
      
        } 
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }
    
  handleTaskDescriptionChange(e){
    this.setState({ task:e.target.value})
    console.log(e.target.value)
    
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({task:""})
        // console.log(task)
    
      }
    
    render() {
      
   
        
        return (
            
            <div>

                <h1>to do List</h1>
                <form onSubmit={this.handleSubmit} className="row g-3">
                    <div className="col-auto">
                        <label   className="visually-hidden">Email</label>
                        <input type="text"  className="form-control-plaintext"   onChange={this.handleTaskDescriptionChange}/>
                    </div>
                    
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">submit</button>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default Form;