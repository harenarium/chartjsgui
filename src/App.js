import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Toolbar from './components/Toolbar.js'
import Container from './components/Container.js'
import Data from './data.json'
// import Register from './components/Register';
import Login from './components/Login';
// import Logout from './components/Logout';
import { Route/*, Switch, Link*/ } from 'react-router-dom';
import Background from './background-01.png'

class App extends Component {
  constructor(){
    super()

    this.state = {
      chartData:{
        type: "line",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        borderDash: [0,0],
        lineTension: 0.4,
        radius: 0,
        pointStyle: "circle",
        label: "",
        labels: Data.labels,
        data: Data.data,
        options: {},
      },
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      auth: null,
      loggedIn: false
    }
  }

//   componentDidMount() {
//   if (localStorage.getItem('jwt')) {
//     this.props.getCurrentUser()
//   }
//   this.props.getLocation()
// }

componentDidMount(){
   if (localStorage.user) {
     this.setState({
       auth: JSON.parse(localStorage.user)
     }, ()=> {
       console.log(this.state)
     })
   } else{
  }
 }

 gotAuthToken = (user) => {
   this.setState({
     auth: user
   })
   localStorage.user = JSON.stringify(user)
 }

 logout = (history) => {
   localStorage.user = ""
   this.setState({
     auth: null
   }, () => history.push("/"))
 }


  setType = (type) => {
    this.setState({
      chartData:{
        ...this.state.chartData,
        type: type
      }
    })
  }

  setPointStyle = (radius, style) => {
    this.setState({
      chartData:{
        ...this.state.chartData,
        radius: radius,
        pointStyle: style
      }
    })
  }

  setLineColor = (red, green, blue, alpha) => {
    this.setState({
      chartData:{
        ...this.state.chartData,
        borderColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
      }
    })
  }

  setFillColor = (red, green, blue, alpha) => {
    this.setState({
      chartData:{
        ...this.state.chartData,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
      }
    })
  }

  setBackgroundColor = (red, green, blue, alpha) => {
    this.setState({
      backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
    })
  }

  setLineThickness = (thickness, dashSolid, dashSpace, tension) => {
    console.log(thickness)
    this.setState({
      chartData:{
        ...this.state.chartData,
        borderWidth: thickness,
        borderDash: [dashSolid, dashSpace],
        lineTension: tension
      }
    })
  }

  setData = (data) => {
    let json = JSON.parse(data)
    this.setState({
        chartData:{
        ...this.state.chartData,
        data: json.data,
        labels: json.labels,
        label: json.name
      }
    }, () => {console.log(this.state.chartData)})
  }

  // renderLogin = () => {
  //   this.setState({loggedIn: !this.state.loggedIn})
  // }

  render() {
    console.log(!!this.state.auth)
    let array = Background.split(".")
    array.splice(1,1)
    let source = array.join(".")
    console.log(source)
    this.state.auth ? document.body.style.backgroundImage = null : document.body.style.backgroundImage = `${source}`
    return (
      <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%'}} className="App">
        {this.state.auth ? <div>
          {/* <header className="App-header">
           <Link to="/logout">Logout</Link>
         </header>
       <Switch>
         <Route path="/logout" render={ (renderProps) => {
           return <Logout logout={ this.logout } history={ renderProps.history } />;
         } } />
       </Switch> */}
          <Navbar logout={this.logout}/>
          <Toolbar setType={this.setType} setPointStyle={this.setPointStyle} setData={this.setData} chartData={this.state.chartData} backgroundColor={this.state.backgroundColor} setLineColor={this.setLineColor} setFillColor={this.setFillColor} setBackgroundColor={this.setBackgroundColor} setLineThickness={this.setLineThickness}/>
          <Container chartData={this.state.chartData} backgroundColor={this.state.backgroundColor} />
        </div> :  <Route path="/" render={ (renderProps) => {
           return <Login registeredCallback={this.gotAuthToken} renderLogin={this.renderLogin} loggedInCallback={ this.gotAuthToken } history={ renderProps.history } />;
         } } />}
      </div>
    );
  }
}

export default App;
