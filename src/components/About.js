import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileFunctional from './Profile'
import { Component } from 'react'

class About extends Component{
  constructor(props){
    super(props);
    
    console.log("Parent constructor");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        <h1>About us page</h1>
        <Profile/>
      </div>
    )

  }
}

export default About
