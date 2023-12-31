import React from 'react';
import ReactDOM from 'react-dom';
import vignettes from './objects/vignettes';
import Title from './components/title'
import Sudoku from './components/sudoku/sudoku'
import SceneOne from './components/sceneOne/sceneOne';
import TheArtistIsPresent from './components/theArtistIsPresent';
import './styles.css'
import LindaMeditates from './components/linda_meditates/lindaMeditates';
import Facts from './components/facts/facts';
import UIfx from 'uifx';
import successBell from '../public/success_bell.mp3';
import bell from '../public/bell.mp3';
import candleBuzz from '../public/candle-buzz.mp3';
import NextButton from './components/nextButton/nextButton';
import ThisShowIsAbout from './components/thisShowIsAbout/thisShowIsAbout';
import ExampleButton from './components/preShow3/exampleButton';
import TheArtistIsOnline from './components/theArtistIsOnline/theArtistIsOnline';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vignettes: vignettes,
      scene: 0,
      length: vignettes.length,
      sudoku: false
    }
    this.beep = new UIfx(successBell, {volume: 0.5});
    this.bell = new UIfx(bell);
    this.buzz = new UIfx(candleBuzz);
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
    if (this.state.scene > 1) {this.beep.play()}
    if (this.thereAreTitlesLeft()) {
      this.setState({
        scene: this.state.scene += 1
      })
    } else {
      this.setState({
        scene: this.state.scene = 3
      })
    }
    
  }

  break() {
    this.buzz.play();
    <Linda/ >
  }

  render() {
    return (
      <div className='main'>
        <Title scene={this.state.scene} vignettes={this.state.vignettes}/>
        { this.state.scene == 1 ? <ThisShowIsAbout aShowAbout={this.state.vignettes[this.state.scene].aShowAbout}/> : null}
        { this.state.scene == 2 ? <ExampleButton /> : null }
        { this.state.scene == 3 ? <SceneOne break={this.break} vibrations={this.state.vignettes[this.state.scene].vibrations} bell={this.bell}/> : null }
        { this.state.scene == 4 ? <Sudoku/> : null }
        { this.state.scene == 5 ? <LindaMeditates choices={this.state.vignettes[this.state.scene].choices} bell={this.bell}/> : null }
        { this.state.scene == 8 ? <TheArtistIsPresent /> : null}
        { this.state.scene == 8 ? <Facts facts={this.state.vignettes[this.state.scene].facts} bell={this.bell}/> : null}
        { this.state.scene == 10 ? <TheArtistIsOnline /> : null}
        <NextButton changeScene={this.changeScene} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);