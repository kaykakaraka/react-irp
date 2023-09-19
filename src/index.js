import React from 'react';
import ReactDOM from 'react-dom';
import vignettes from './objects/vignettes';
import Title from './components/title'
import Sudoku from './components/sudoku/sudoku'
import SceneOne from './components/sceneOne/sceneOne';
import TheArtistIsPresent from './components/theArtistIsPresent';
import HowToGoOutside from './components/howToGoOutside';
import './styles.css'
import LindaMeditates from './components/linda_meditates/lindaMeditates';
import Facts from './components/facts/facts';
import Timer from './components/timer/timer';
import UIfx from 'uifx';
import successBell from '../public/success_bell.mp3';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vignettes: vignettes,
      scene: 0,
      length: vignettes.length,
      sudoku: false
    }
    this.beep = new UIfx(successBell);
    this.changeScene = this.changeScene.bind(this)
    this.reload = this.reload.bind(this)
    this.break = this.break.bind(this)
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
    } else {
      this.setState({
        scene: this.state.scene = 3
      })
    }
    this.beep.play();
  }

  break() {
    <Breaking/ >
  }

  render() {
    { setTimeout( () => (this.break()), 900000) } 
    return (
      <div className='main'>
        <Title scene={this.state.scene} vignettes={this.state.vignettes}/>
        { this.state.scene == 3 ? <SceneOne vibrations={this.state.vignettes[this.state.scene].vibrations}/> : null }
        { this.state.scene == 4 ? <Sudoku/> : null }
        { this.state.scene == 5 ? <LindaMeditates choices={this.state.vignettes[this.state.scene].choices}/> : null }
        { this.state.scene == 7 ? <TheArtistIsPresent /> : null}
        { this.state.scene == 9 ? <Facts facts={this.state.vignettes[this.state.scene].facts}/> : null}
        <button onClick={this.changeScene} tabIndex={0}></button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);