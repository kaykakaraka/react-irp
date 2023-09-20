import React from "react";

class ThisShowIsAbout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    setTimeout(this.showOptions(), 5000);
  }

  showOptions() {
    this.props.aShowAbout.map((option, index) => {
      setTimeout(() => {
        const newItem = <div key={index}>{option}</div>;
      
        this.setState(prevState => ({
        showing: true,
        items: [...prevState.items, newItem]
        }))
      }, index * 3000);
    })
  }

  render() {
    const list = this.state.items;
    return (
      <div>
        <ul>{list}</ul>
      </div>
    )
  }
}

export default ThisShowIsAbout;