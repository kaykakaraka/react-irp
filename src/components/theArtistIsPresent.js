import React from 'react'
import './theArtistIsPresent.css'

class TheArtistIsPresent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='video-container'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xlf68X2qEpM?si=-FrtmggaRMkHwnJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    )
  }
}
export default TheArtistIsPresent;