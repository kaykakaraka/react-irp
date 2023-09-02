import React from 'react';
import ReactDOM from 'react-dom';
import vignettes from './objects/vignettes';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vignettes: vignettes,
      number: 0
    }
  }

  generateTitle() {
    let num = this.state.number;
    let title = this.state.vignettes[num].title;
    return title;
  }

  render() {
    return (
      <h1>{this.generateTitle()}</h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);