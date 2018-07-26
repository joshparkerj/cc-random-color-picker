import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './button';

class Random extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {color: [
      Math.floor(Math.random()*256),
      Math.floor(Math.random()*256),
      Math.floor(Math.random()*256)
    ]};
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick() {
    this.setState({color: this.chooseColor()});
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Hello Turtle!
        </h1>
	<h1 onClick={this.handleClick}>
	  click me pls
	</h1>
	<h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}
        </h1>
	<Button onClick={this.handleClick} light={this.isLight()} />
      </div>
    );
  }
}

const App = Random;

export default App;
