import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Logout from './Logout'


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


        <div style={{position: "absolute", right: ".5%", top: "15%"}}>
            <div onClick={ this.props.logout } className="ui fluid medium white-smoke submit button">Logout</div>
            {/* <Link style={{textDecorationLine: "none"}} to="/logout">Logout</Link> */}
       </div>
     <Switch>
       <Route path="/logout" render={ (renderProps) => {
         return <Logout logout={ this.props.logout } history={ renderProps.history } />;
       } } />
     </Switch>

        <img src={require('../chart-logo-01.png')} alt="Gooey Charts Logo" style={{height: '80%', position: 'absolute', top: '13%', left: '2%'}}/>
      </div>
    );
  }
}

export default Navbar;
