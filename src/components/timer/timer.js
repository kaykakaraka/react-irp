import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 20,
      seconds: 0
    }
    this.countDown = this.countDown.bind(this)
  }

  repeatCountDown() {
    setTimeout(this.countDown(), 1000)
  }

  // countDown() {
  //   let minutes = this.state.minutes
  //   let seconds = this.state.seconds
  //   if (seconds == 0) {
  //     minutes = this.state.minutes - 1
  //     seconds = 59
  //   } else {
  //     seconds =- 1
  //   }

  //   this.setState(this.state = {
  //     minutes: minutes,
  //     seconds: seconds
  //   })
  // }

  render() {
    return (
      <div id='timer'> 
        {this.state.minutes} : {this.state.seconds}
      </div>
    )
  }
}

export default Timer;