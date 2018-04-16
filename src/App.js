import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Toolbar from './components/Toolbar.js'
import Container from './components/Container.js'
import Data from './data.json'

class App extends Component {
  constructor(){
    super()

    this.state = {
      chartData:{
        type: "line",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        borderDash: [],
        lineTension: 0.5,
        radius: 0,
        label: "",
        labels: Data.labels,
        data: Data.data,
        options: {},
      },
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  }

  setLineColor = (red, green, blue, alpha) => {
    this.setState({
      chartData:{
        ...this.state.chartData,
        borderColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
      }
    },()=>{
      console.log("state in setLineColor",this.state);
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

  render() {
    console.log(Data.data)
    return (
      <div className="App">
        <Navbar />
        <Toolbar chartData={this.state.chartData} backgroundColor={this.state.backgroundColor} setLineColor={this.setLineColor} setFillColor={this.setFillColor} setBackgroundColor={this.setBackgroundColor} setLineThickness={this.setLineThickness}/>
        <Container chartData={this.state.chartData} backgroundColor={this.state.backgroundColor} />
      </div>
    );
  }
}

export default App;
