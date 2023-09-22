import React from 'react'
import ChoiceButton from './choiceButton'

class LindaMeditates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing: false,
      items: []
    } 
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.bell.play();
    this.props.choices.map((choice, index) => {
      setTimeout(() => {
        const newItem = <div key={index}>{choice}</div>;
      
        this.setState(prevState => ({
        showing: true,
        items: [...prevState.items, newItem]
        }))
      }, index * 10000);
    })
  }

  render() {
    const list = this.state.items;
    return (
      <div id='scene-one-container'>
        { this.state.showing ? <p>{list}</p> : <ChoiceButton handleClick={this.handleClick}/> }
      </div>
    )
  }

}

export default LindaMeditates;