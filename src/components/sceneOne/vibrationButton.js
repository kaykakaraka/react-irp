import React from "react"
import './listButton.css'

class VibrationButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className='list-button' onClick={this.props.handleClick}>VIBRATIONS</button>
    )
  }
}

export default VibrationButton;