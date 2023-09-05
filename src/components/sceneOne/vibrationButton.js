import React from "react"
import './vibrationButton.css'

class VibrationButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button id='vibration-button' onClick={this.props.handleClick}>VIBRATIONS</button>
    )
  }
}

export default VibrationButton;