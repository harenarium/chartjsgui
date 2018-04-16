import React, { Component } from 'react';

const style = {
	// border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '2%',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
  width: '90%',
	cursor: 'move',
	float: 'left',
}

class Button extends Component {
  render() {
    let name = this.props.name
    return (
      <div className="Button" style={{...style}} id={name} onClick={this.props.clickHandler}>
      {name}
      </div>
    );
  }
}

export default Button;
