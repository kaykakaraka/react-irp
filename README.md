## Independent Research Project in React
### Working Title: Linda 

_Linda_ is a live performance which the audience interact with through this software. The show is split into scenes, and when the audience press the grey button (imitating a space bar), or the space bar on the laptop, the next scene begins.  There are a finite number of scenes and if they get to the end, they return to the first scene.

There are also yellow buttons - I call these list buttons.  When these buttons are pressed, I used setTimeout to show a new list item after a regular interval - you can see SceneOne.js for an example of this. Every two seconds a new piece of text appears on the screen that describes 'something that makes Linda vibrate'.

For the performance I ran this program locally on my laptop, projected, and an audience member sat with the laptop.
 
I wanted the interactive part of the show to end after 20 minutes, and to do so via the program stopping working, ie. showing an error message. I created a break() function that calls an Object - Linda - which I had not created, along with a sound effect (white noise). When the show begins - as an audience member presses the grey button for the first time - I used setTimeout to call this function after 20 minutes.  In performance, this was really effective - there were gasps!

### Process

I wanted to learn React and I also wanted the program to run without refreshing in order to create a more immersive experience, so I learn React via the freeCodeCamp website. As their syllabus teaches OOP React, this is what I used. I also found this to be helpful with structuring the code, as I contained each scene in a component.

### Tech Stack
* ReactJS
* Webpack
* Babel

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

Certain aspects will not run as large files (such as sound and video files) are stored locally on my computer.

### Design notes

* Designed to evoke ideas of the early internet
* The button to move to the next scene is designed to mirror the space bar
* Uses some ideas of colour theory and reward sounds to encourage the audience to move through the scenes
* Larger font sizes than you would usually expect on your computer as it is designed to be projected for a larger audience to view
