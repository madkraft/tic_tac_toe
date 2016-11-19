import React from 'react';

export default class Cell extends React.Component {
  onClick (index) {
      console.log(index)
  }
  
  render() {
    return (
      <div className="cell" onClick={this.onClick.bind(null, this.props.index)} >
        {this.props.index}
      </div>
    )
  }
}
