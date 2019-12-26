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
      <div className = "date" onClick = {() => this.open()}>{this.props.date} {this.state.visibility ?  <FaCaretUp /> : <FaCaretDown />}<h3 className = "headline">{this.props.headline}</h3></div>
      <p className = {this.state.visibility ? "text visible" : "text hidden"}>{this.props.image !== "" ? <img src={gallery[this.props.image]} alt={this.props.headline} className="image"/> : ""}{this.props.text}
      </p>
    </li>
  )}
}

export default Event;