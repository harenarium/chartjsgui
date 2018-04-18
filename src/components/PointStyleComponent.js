import React, { Component } from 'react'

const style = {
	backgroundColor: '#F5F5F5',
	float: 'left',
	position: 'absolute',
	top: '65%',
	left: '10%',
  height: '30%',
  width: '80%'
}



class PointStyleComponent extends Component{

  constructor(props){
    super(props)

    this.state={
      radius: props.chartData.radius,
      pointStyle: props.chartData.pointStyle
    }
  }

  setPoint = (event) => {
    let name = event.target.name
    let value
    if(name === 'pointStyle'){
      value = event.target.value
    } else {
      value = parseInt(event.target.value, 10)
      if(value > 255){
        value = 255
      } else if (value < 0){
        value = 0
      }
    }
    this.setState({[name]: value}, () => {
      this.props.setPointStyle(this.state.radius, this.state.pointStyle)
    })
  }

  render() {

    return (
        <div style={{ ...style}} >
          <h3 style={{padding: '0%'}}>
            Point Style
          </h3>
          <div>
            Point Size: <input onChange={this.setPoint} value={this.state.radius} name="radius" type="number" placeholder="" min={0} max={255}/> <br />
            Style: <select onChange={this.setPoint} name="pointStyle">
              <option value='circle'>Circle</option>
              <option value='cross'>Cross</option>
              <option value='crossRot'>X</option>
              <option value='dash'>Dash</option>
              <option value='line'>Line</option>
              <option value='rect'>Rectangle</option>
              <option value='rectRounded'>Rounded Rectangle</option>
              <option value='rectRot'>Diamond</option>
              <option value='star'>Star</option>
              <option value='triangle'>Triangle</option>
            </select>
          </div><br></br>
        </div>
    )
  }
}

export default PointStyleComponent;
