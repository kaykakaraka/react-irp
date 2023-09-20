import React from "react";

class NextButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.props.changeScene} tabIndex={0}></button>
    )
  }

}

export default NextButton;