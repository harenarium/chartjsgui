import React, { Component } from 'react';
import gat from '../modules/gat';
import { Route, Switch, Link } from 'react-router-dom'
import Register from './Register'
import Background from '../background-01.png'
// import './Login.css'

export default class Login extends Component {

  state = {
    username: "",
    password: "",
    errors: [],
    register: false
  }

  componentWillMount(){
    document.body.style.backgroundImage = `${Background}`
    // document.body.style.backgroundImage = null
  }


  handleSubmit = (e) => {
    e.preventDefault()
    gat.login(this.state.username, this.state.password)
      .then((req) => req.json())
      .then((data) => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          })
        } else {
          document.body.style.backgroundImage = null
          this.setState({ errors: [] }) //clear any errors in state
          this.props.loggedInCallback(data) //set snacks to parent state
          this.props.history.push("/"); //go to snacks
          // this.props.renderLogin()
        }
      })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setRegister = () => {
    this.setState({register: !this.state.register})
  }

  render() {
    return (
      <div style={{backgroundColor: "rgba(75,175,255,0.55)", padding: '3% 5% 5% 5%', width: "20%", position: "absolute", top: "28%", left:"36%"}}>
        {this.state.register ? <div>
          <header className="App-header">
            <Link onClick={this.setRegister} to="/">Login</Link>
          </header>
          <Switch>
            <Route path="/" render={ (renderProps) => {
              return <Register registeredCallback={ this.props.registeredCallback } history={ renderProps.history } />;
            } } />
          </Switch>
        </div> : <div>
          <header className="App-header">
            <Link onClick={this.setRegister} to="/">Register</Link>
          </header>
          <h1>Login</h1>
          <ul>{
            this.state.errors.map((error) => <li>{error}</li>)
          }</ul>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="username">Username: </label>
            <input onChange={ this.onChange } value={ this.state.username } type="text" name="username" id="username" /><br />
            <label htmlFor="password">Password: </label>
            <input onChange={ this.onChange } value={ this.state.password } type="password" name="password" id="password" /><br />
            <input type="submit" />
          </form>
        </div>}
      </div>
    );
  }
}
