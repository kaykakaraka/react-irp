import React from "react"

class ChoiceButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
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
    return (
      <button className='list-button' onClick={this.props.handleClick}>CHOICES</button>
    )
  }
}

export default ChoiceButton;