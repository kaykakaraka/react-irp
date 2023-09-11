import React from "react";
import howToGoOutside17_4 from '../../public/howToGoOutside17_4.mp4'

class HowToGoOutside extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <video width="640" height="480" autoPlay>
          <source src={howToGoOutside17_4} type="video/mp4"/>
        </video>
      </div>
    )
  }
}

export default HowToGoOutside;