## Independent Research Project in React
### Working Title: Linda (experiments in presence)

### Tech Stack
* React
* Webpack

### Features:
* A series of scenes (written as objects) that the audience can move between by pressing a button
* Certain scenes contain 'list buttons', which produce lists, each item at a 2 second gap
* A timeOut function that begins when the 'scenes' begin, so that an error code displays after a set number of time (set at 20 minutes for this version)
* A game of sudoku built in React
* Embedded videos, one from YouTube and one from my local drive
* Sound effects for changing scene and for when the error code runs

If I had more time, I would:
* Allow the user to enter the time-limit for the timeOut function at the beginning
* Store the video and audio files online
* Integrate tests
* Develop further interactive scenes
* Refactor so that the list button component is reused, using props to specialise for each use

### To run on your computer

1. Fork this repository
2. Clone your fork to your local machine
3. Install node.js dependencies `npm install`
4. Start the server `npm start`
5. Open http://localhost:8080/

### Design notes

* Designed to evoke ideas of the early internet
* The button to move to the next scene is designed to mirror the space bar
* Uses some ideas of colour theory and reward sounds to encourage the audience to move through the scenes
* Larger font sizes than you would usually expect on your computer as it is designed to be projected for a larger audience to view
