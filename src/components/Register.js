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
            <div onClick={ this.handleSubmit } className="ui fluid large teal submit button">Register</div>
          </div>

          <div className="ui error message">
            <ul>{
              this.state.errors.map((error) => <li>{error}</li>)
            }</ul>
          </div>

        </form>
        <div className="ui message">
            Been here before? <a onClick={this.props.setRegister}>Login</a>
          </div>
      </div>
    </div>

    );
  }
}
