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
    console.log('helalkjfeljke')
    this.setState({register: !this.state.register})
  }

  render() {
    return (
      <div style={{width: '25%', position: "absolute", top: "28%", left:"36%"}}>
        <div>
          <img className='column' src={require('../chart-logo-01.png')} style={{width:"100%"}} />
        </div>
        {this.state.register ? <div>
          <Switch>
            <Route path="/" render={ (renderProps) => {
              return <Register setRegister={this.setRegister} registeredCallback={ this.props.registeredCallback } history={ renderProps.history } />;
            }} />
          </Switch>
        </div> :
        <div className="ui middle aligned center aligned grid" >
          <div className="column">
            <form className="ui large form" >
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input onChange={ this.onChange } value={ this.state.username }  type="text" name="username" placeholder="Username" id="username" />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input onChange={ this.onChange } value={ this.state.password } type="password" name="password" id="password" placeholder="Password" />
                  </div>
                </div>
                <div onClick={ this.handleSubmit } className="ui fluid large teal submit button">Login</div>
              </div>

              <div className="ui error message">
                <ul>{
                  this.state.errors.map((error) => <li>{error}</li>)
                }</ul>
              </div>

            </form>
            <div className="ui message">
              New to us? <a onClick={this.setRegister}>Register</a>
            </div>
          </div>

        </div>
      }
    </div>
  )
}
}

{/* <div>
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
        </div>} */}
