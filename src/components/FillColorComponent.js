import React, { Component } from 'react'

const style = {
	// border: '1px dashed gray',
  height: '200px',
  width: '200px',
	backgroundColor: 'silver',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
	position: 'absolute',
	top: '50%',
	left: ''
}


class FillColorComponent extends Component{

  constructor(props){
    super(props)

    this.state={
      red: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[1]),
      green: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[2]),
      blue: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[3]),
      alpha: parseInt(props.chartData.backgroundColor.split(/[(),]+/)[4]) * 100
    }
  }

  setColor = (event) => {
    let name = event.target.name
    let value = parseInt(event.target.value)
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
          <div style={{padding: '10px'}}>
            Fill Color
          </div>
          <div>
            <input onChange={this.setColor} value={this.state.red} name="red" type="number" placeholder="Red Value" min={0} max={255}/>
            <input onChange={this.setColor} value={this.state.green} name="green" type="number" placeholder="Green Value" min={0} max={255}/>
            <input onChange={this.setColor} value={this.state.blue} name="blue" type="number" placeholder="Blue Value" min={0} max={255}/>
            <input onChange={this.setColor} value={this.state.alpha} name="alpha" type="number" placeholder="Alpha" min={0} max={100}/>
          </div><br></br>
          <div style={{backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha/100})`, height: '100px', width: '100px', margin: 'auto'}}>
          </div>
        </div>
    )
  }
}

export default FillColorComponent;
