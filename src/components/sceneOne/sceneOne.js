import React from 'react'
import VibrationButton from './vibrationButton'

class SceneOne extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const list = this.props.sceneInfo.vibrations.map((vibration) => <ul>{vibration}</ul>)
    return (
      <div>
        <VibrationButton />
        { list }
      </div>
    )
  }
}

export default SceneOne;