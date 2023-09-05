import React from "react"
import './vibrationButton.css'

class VibrationButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button id='vibration-button'>VIBRATIONS</button>
    )
  }
}

export default VibrationButton;