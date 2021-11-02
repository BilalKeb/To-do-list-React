import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks:[]
      

    }


    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }
  
  addTask(string) {
    const object = {status:"To do",description:string}
   
    // console.log(object)
    this.setState({ tasks:[object, ...this.state.tasks] })
   
  }
  deleteTask(index) {
    // console.log(index);
    const array= [...this.state.tasks]
   array.splice(index, 1)
    this.setState({tasks: array})
  }
  
  
  render()  { 
    
   
    return (
      <div className="container">

        <div className="row">
            <Form addTask = {this.addTask}/>
        </div>
         <div className="row">
         {this.state.tasks.map((element, index) => {
            <List task={element} key={index} deleteTask={this.deleteTask} index={index}/> 
            
          })}
            </div>
      </div>
    );
  }
}

export default App;
