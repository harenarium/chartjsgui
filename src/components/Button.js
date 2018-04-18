import React, { Component } from 'react';

const style = {
	// border: '1px dashed gray',
	backgroundColor: 'WhiteSmoke',
	padding: '2% 0% 2% 0%',
	marginRight: '10%',
	marginBottom: '5%',
	marginLeft: '10%',
	marginTop: '5%',
  width: '80%',
	borderRadius: "5px"
	// borderLeftStyle: 'solid',
	// borderColor: 'white'
	// float: 'left',
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
