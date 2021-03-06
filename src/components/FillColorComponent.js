import React, { Component } from 'react'

const style = {
	padding: '5%',
	backgroundColor: '#F5F5F5',
	float: 'left',
	position: 'absolute',
	top: '65%',
	left: '10%',
  height: '30%',
  width: '80%'
}


class FillColorComponent extends Component{

  constructor(props){
    super(props)

    this.state={
      red: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[1], 10),
      green: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[2], 10),
      blue: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[3], 10),
      alpha: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[4], 10) * 100
    }
  }

  setColor = (event) => {
    let name = event.target.name
    let value = parseInt(event.target.value, 10)
    if(name === 'alpha' && value > 100){
      value = 100
    }
    if(value > 255){
      value = 255
    } else if (value < 0){
      value = 0
    }
    if (typeof value === "number"){
      this.setState({[name]: value}, () => { this.props.setFillColor(this.state.red, this.state.green, this.state.blue, this.state.alpha/100) })
    }
  }

  render() {

		return (
        <div style={{ ...style}} >
          <h3 style={{padding: '0%'}}>
            Fill Color
          </h3>
          <div style={{textAlign: 'right', marginRight: '35%'}}>
            Red: <input onChange={this.setColor} value={this.state.red} name="red" type="number" placeholder="Red Value" min={0} max={255}/><br></br>
            Green: <input onChange={this.setColor} value={this.state.green} name="green" type="number" placeholder="Green Value" min={0} max={255}/><br></br>
            Blue: <input onChange={this.setColor} value={this.state.blue} name="blue" type="number" placeholder="Blue Value" min={0} max={255}/><br></br>
            Alpha: <input onChange={this.setColor} value={this.state.alpha} name="alpha" type="number" placeholder="Alpha" min={0} max={100}/><br></br>
          </div><br></br>
          <div style={{border: '1px solid silver', backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha/100})`, height: '100px', width: '100px', margin: 'auto'}}>
          </div>
        </div>
    )
  }
}

export default FillColorComponent;
