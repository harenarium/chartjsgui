import React, { Component } from 'react';

const style = {
  position: 'fixed',
  height:'5%',
  width: '100%',
	backgroundColor: '#5e9bff',
  zIndex: '10'
	// padding: '0.5rem 1rem',
	// marginRight: '1.5rem',
	// marginBottom: '1.5rem',
	// float: 'top',
}

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar" style={{...style}}>
        <img src={require('../chart-logo-01.png')} style={{height: '100%', position: 'absolute', left: '0%'}}/>
      </div>
    );
  }
}

export default Navbar;
