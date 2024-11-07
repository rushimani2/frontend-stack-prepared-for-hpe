import React, { Component } from 'react'

export default class CBC extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <h1> hello CBC {this.props.value}</h1>
      </div>
    )
  }
}
