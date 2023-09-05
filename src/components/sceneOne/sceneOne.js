import React from 'react'
import VibrationButton from './vibrationButton'

class SceneOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vibrationsShowing: this.props.sceneInfo.vibrationsShowing
    } 
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      vibrationsShowing: true
    })
  }

  render() {
    const list = this.props.sceneInfo.vibrations.map((vibration) => <ul>{vibration}</ul>)
    return (
      <div id='scene-one-container'>
        { this.state.vibrationsShowing ? list : <VibrationButton handleClick={this.handleClick}/> }
      </div>
    )
  }
}

export default SceneOne;