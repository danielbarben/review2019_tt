import React, { Component } from 'react';
import Event from '../Event';
import elements from '../Data/elements.json'
import './Stream.css';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
      ]
    }
  }
  
  componentDidMount() {
    let newEvents = [];
    for (let el in elements) {
      newEvents.push({'date': elements[el].date, 'headline': elements[el].headline, 'text' : elements[el].text, 'image': elements[el].image})
    }
    this.setState({events:newEvents});
  }

  render() {
    let List = this.state.events.map((item, index) => <Event date={item.date} headline={item.headline} text={item.text} image={item.image} key={index.toString()}/>)
    return <ul className="events">{List}</ul>;
  }
}
export default Stream;
