import React, {Component} from 'react';
import './Event.css';
import {FaCaretDown, FaCaretUp } from 'react-icons/fa'
import gallery from '../img'

class Event extends Component {
  state = {
    index:1,
    visibility: false
  };


open = () => {
  let newVisibility = this.state.visibility ? false : true;
  this.setState({
    visibility:newVisibility
  })
}
  render() {
    return (
    <li>
      <div className = "date" onClick = {() => this.open()}>{this.props.date} {this.state.visibility ?  <FaCaretUp /> : <FaCaretDown />}</div>
      <h3 className = "headline">{this.props.headline}</h3>
      <p className = {this.state.visibility ? "text visible" : "text hidden"}>{this.props.text}<br/>
      <img src={gallery[this.props.image]} alt="" className="image"/>
      </p>
    </li>
  )}
}

export default Event;