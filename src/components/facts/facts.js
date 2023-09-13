import React from "react";
import FactButton from "./factButton";

class Facts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing: false,
      items: []
    } 
    this.handleClick = this.handleClick.bind(this)
  } 
  
  handleClick() {
    this.props.facts.map((fact, index) => {
      setTimeout(() => {
        const newItem = <div key={index}>{fact}</div>;
      
        this.setState(prevState => ({
        showing: true,
        items: [...prevState.items, newItem]
        }))
      }, index * 10000);
    })
  }


  render() {
    const list = this.state.items
    return (
      <div id='facts-container'>
        { this.state.showing ? <ul>{list}</ul> : <FactButton handleClick={this.handleClick}/> }
      </div>
    )
  }

}

export default Facts;