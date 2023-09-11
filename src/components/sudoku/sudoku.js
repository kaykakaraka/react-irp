import React from 'react';
import Board from './board'
import boardArray from '../../objects/boardArray';
import './sudoku.css'

class Sudoku extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: boardArray
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(position, event) {
    event.persist()
    this.setState({
      board: this.state.board.map((item) => {
        if (item.position == position) {
          return {...item, input: event.target.value}
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return(
      <main>
        <div>
          <div>
            <Board board={this.state.board} handleChange={this.handleChange} />
          </div>
        </div> 
      </main>
    )
  }
}

export default Sudoku;