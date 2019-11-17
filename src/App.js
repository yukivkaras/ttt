import React, { Component } from 'react';
import './App.css';
// import  FoodTable  from './table.js';
import  AddNewRestaurant  from './addNewRestaurant.js';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   }
  
  // componentDidMount(){
  //   var datas = document.getElementById("aa").value;
  //   fetch('http://192.168.2.107:8080/', {
  //       method: 'GET',
  //       mode: 'cors',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(datas)
  //     })
  //   .then(res => res.text())
  //   .then(res => console.log(res))
  // }
  render() {
    return (
     <AddNewRestaurant/>
    );
  }
}

export default App;
