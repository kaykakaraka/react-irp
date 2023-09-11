import React from "react"

class ChoiceButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className='list-button' onClick={this.props.handleClick}>CHOICES</button>
    )
  }
}

export default ChoiceButton;