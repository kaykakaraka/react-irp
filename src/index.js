import React from 'react';
import ReactDOM from 'react-dom';
import vignettes from './objects/vignettes';
import './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vignettes: vignettes,
      number: 0,
      length: vignettes.length
    }
    this.changeScene = this.changeScene.bind(this)
  }

  thereAreTitlesLeft() {
    return (this.state.number < this.state.length - 1);
  }

  changeScene() {
    if (this.thereAreTitlesLeft()) {
      this.setState({
        number: this.state.number += 1
      })
    }
  }

  render() {
    return (
      <div className='main'>
        <Title scene={this.state.number} vignettes={this.state.vignettes}/>
        <button onClick={this.changeScene}></button>
      </div>
    )
  }
}

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


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);