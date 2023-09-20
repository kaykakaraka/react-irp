import React from 'react'
import VibrationButton from './vibrationButton'

class SceneOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vibrationsShowing: false,
      items: []
    } 
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.vibrations.map((vibration, index) => {
      setTimeout(() => {
        const newItem = <div key={index}>{vibration}</div>;
      
        this.setState(prevState => ({
        vibrationsShowing: true,
        items: [...prevState.items, newItem]
        }))
      }, index * 2000);
    })
  }

  render() {
    const list = this.state.items;
    return (
      <div id='scene-one-container'>
        { this.state.vibrationsShowing ? <p>{list}</p> : <VibrationButton handleClick={this.handleClick}/> }
      </div>
    )
  }

}

export default SceneOne;