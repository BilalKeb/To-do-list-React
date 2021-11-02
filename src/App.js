import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks:[]
      

    }


    this.addTask = this.addTask.bind(this)
    
  }
  
  addTask(string) {
    const object = {status:"To do",description:string}
   
    console.log(object)
    this.setState({ tasks:[object,...this.state.tasks] })
   
  }
  
  
  render()  { 
    return (
      <div>
        <Form addTask = {this.addTask}/>
        
        
      </div>
    );
  }
}

export default App;
