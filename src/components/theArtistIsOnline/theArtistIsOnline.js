import React from "react";
import ReactPlayer from "react-player";
import video from '../../../public/TheArtistIsOnline.mp4'

class TheArtistIsOnline extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ReactPlayer
        url={video}
        controls={true}
        width='75%'
        height='75%'
      />
    )
  }
}

export default TheArtistIsOnline;