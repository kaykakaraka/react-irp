import React from 'react';
import './title.js'

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  generateTitle() {
    let num = this.props.scene;
    let title = this.props.vignettes[num].title;
    return title;
  }

  render() {
    return (
      <h1 id='title'>
        {this.generateTitle()}
      </h1>
    )
  }
}

export default Title;