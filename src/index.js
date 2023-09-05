import React from 'react';
import ReactDOM from 'react-dom';
import vignettes from './objects/vignettes';
import Title from './components/title'
import Sudoku from './components/sudoku';
import SceneOne from './components/sceneOne/sceneOne';
import './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vignettes: vignettes,
      scene: 0,
      length: vignettes.length,
      sudoku: false
    }
    this.changeScene = this.changeScene.bind(this)
    this.reload = this.reload.bind(this)
  }

  thereAreTitlesLeft() {
    return (this.state.scene < this.state.length - 1);
  }

  reload() {
    window.location.reload(false);
  }

  changeScene() {
    if (this.thereAreTitlesLeft()) {
      this.setState({
        scene: this.state.scene += 1
      })
    }
  }

  render() {
    return (
      <div className='main'>
        <Title scene={this.state.scene} vignettes={this.state.vignettes}/>
        { this.state.scene == 1 ? <SceneOne sceneInfo={this.state.vignettes[1]}/> : null }
        { this.state.scene == 4 ? <Sudoku/> : null }
        <button onClick={this.changeScene} tabIndex={0}></button>
        { this.state.scene == vignettes.length - 1 ? <button className='reload' onClick={this.reload}>RELOAD</button> : null }
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);