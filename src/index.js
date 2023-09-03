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

  generateTitle() {
    let num = this.state.number;
    let title = this.state.vignettes[num].title;
    return title;
  }

  changeScene() {
    if (this.state.number < this.state.length - 1) {
      this.setState({
        number: this.state.number += 1
      })
    }
  }

  render() {
    return (
      <div className='main'>
        <h1 id='title'>{this.generateTitle()}</h1>
        <button onClick={this.changeScene}></button>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);