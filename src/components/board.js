import React from 'react';
import Square from './square';

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='board'>
        {this.props.board.map((item) => <Square position={item.position} input={item.input} content={item.content} answer={item.answer} key={item.position} handleChange={this.props.handleChange}/>)}
      </div>
    ) 
  }
}

export default Board;