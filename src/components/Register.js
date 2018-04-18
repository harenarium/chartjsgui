import React, { Component } from 'react';
import gat from '../modules/gat';

export default class Register extends Component {

  state = {
    username: "",
    password: "",
    errors: []
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    gat.register(this.state.username, this.state.password)
    // fetch('http://localhost:3001/users', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accepts": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    // })
      .then((req) => req.json())
      .then((data) => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          });
        } else {
          this.setState({ errors: [] })
          this.props.registeredCallback(data)
          this.props.history.push("/");
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">Username: </label>
          <input onChange={ this.onChange } value={ this.state.username } type="text" name="username" id="username" /><br />
          <label htmlFor="password">Password: </label>
          <input onChange={ this.onChange } value={ this.state.password } type="password" name="password" id="password" /><br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
