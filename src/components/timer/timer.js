import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 20,
      seconds: 0o0
    }
  }

  render() {
    return (
      <div id='timer'> 
        {this.state.minutes} : {this.state.seconds}
      </div>
    )
  }
}

export default Timer;