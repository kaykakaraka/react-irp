import React from "react"

class FactButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className='list-button' onClick={this.props.handleClick}>FACTS</button>
    )
  }
}

export default FactButton;