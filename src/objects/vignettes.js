import vibrations from "./vibrations";
import choices from "./choices"
import facts from "./facts"
import aShowAbout from "./aShowAbout";

const vignettes = [
  {
    title: 'how to be together / now'
  }, {
    title: 'experiments in presence',
    aShowAbout: aShowAbout
  },{
    title: 'now'
  },{
    title: 'Linda gets a girlfriend',
    vibrations: vibrations,
  }, {
    title: 'Sudoku'
  }, {
    title: 'Linda becomes linda_meditates',
    choices: choices
  }, {
    title: 'Tetris'
  }, {
    title: 'The Artist is Present'
  }, {
    title: 'The Artist is Really Present'
  }, {
    title: 'Facts',
    facts: facts
  }, {
    title: 'The End'
  }
]

export default vignettes;