import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  giveClassName() {
    let className = 'square '
    this.props.position % 3 == 0 ? className += 'thick-right-border' : null;
    this.needsThickBottom() ? className += ' thick-bottom' : null;
    this.isIncorrect() ? className += ' incorrect' : null;
    return className;
  }

  needsThickBottom() {
    const p = this.props.position
    return ((p > 18 && p < 28) || (p > 45 && p < 55))
  }

  shouldBeDisabled() {
    return ( this.props.content == this.props.answer || this.props.input == this.props.answer )
  }

  isIncorrect() {
    return ( this.props.input && this.props.input != this.props.answer )
  }

  createSquare() {
    return ( 
      <input className={this.giveClassName()} 
        placeholder={this.props.content}
        value={this.props.input} 
        onChange={(event) => this.props.handleChange(this.props.position, event)}
        disabled={ this.shouldBeDisabled() ? 'disabled' : null} 
      /> 
    );
  }

  render() {
    let square = this.createSquare()
    return (
      <div>{square}</div>
    )
  }
}

export default Square;