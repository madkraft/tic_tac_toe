import React from 'react'
import Cell from './Cell'

export default class Board extends React.Component {
  constructor () {
    super ()
    this.cells = [1,2,3,4,5,6,7,8,9]
  }

  render() {
    return (
      <div className="board">
        { 
          this.cells.map((item, index) => {
            return <Cell index={index} key={index}/>
          })
        }
      </div>
    )
  }
}
