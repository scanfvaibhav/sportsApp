import React, { Component } from 'react';
import {createStore} from 'redux';
import MyPosts from './MyPosts.js';
import Pofile from './Pofile.js';
import Header from  './Header'

function increase(state=0,action) {
    return state+1;
 };
 var store = createStore(increase);
 
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            data : [{topic:"test1",details:"helowww"}],
            count: 0,
            userData: JSON.parse(localStorage.userInfo)
        }
        this.increaseValue = this.increaseValue.bind(this);
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({value:0});
        });
    }
    increaseValue(){
        store.dispatch({type:""});
    }
    
   
render(){
    return (

<div>
<Header />
        <div className="container">
       
    <div className="left-col">
     <Pofile data={this.state.userData}/>
    </div>
    
    <div className="center-col">
        <MyPosts data={store.getState()}/>
    </div>
    
    <div className="right-col">
      Right col
    </div>
  </div>
  </div>
    );
}
}