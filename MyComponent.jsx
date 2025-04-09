import React, { Component } from 'react';

class MyComponent extends Component{
  constructor(props){
    super(props);
    this.state={ count: 0 };
    console.log('Constructor called');
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps called');
    return null;
  }

  componentDidMount(){
    console.log('componentDidMount called');
  }

  render(){
    console.log('Render called');
    return(
      <div>
      <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
export default MyComponent