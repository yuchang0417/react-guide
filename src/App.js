import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
 state = {
   person : [
     {name:'max', age:'23'},
     {name:"applle", age:"25"}
   ]
 }

  switchHandler = (newName) =>{
    //console.log("go to hell");
    this.setState({
      person : [
        {name:newName, age:'78'},
        {name:"applle", age:"25"}
      ]    
  })
  }

  nameChangeHandler = (event) =>{
    //console.log("go to hell");
    this.setState({
      person : [
        {name:"park", age:'78'},
        {name:event.target.value, age:"25"},
        {name:"Alex", age:"22"}
      ]    
  })
  }




  render() {
   const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border: '1px solid blue',
     padding: '8px'
   };

    return (
      <div className="App">
        <h1>Chang is start to react Js</h1>
        <p>First steps us first case</p>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}>Here come my hobby</Person>
        <button  style = {style} onClick = { () => this.switchHandler( "king")}>Swithch Name</button>
        <Person name = "Charly" age = "23"  click ={this.switchHandler.bind(this, "Quuen")}/>
        <Person name = {this.state.person[1].name} 
        age = {this.state.person[1].age}  
        changed = {this.nameChangeHandler}/>
        <Person name = "BestBuy" age = "33"/>
        </div>
    );
  }
}

export default App;
