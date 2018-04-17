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
      value = parseInt(event.target.value)
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
          <div style={{padding: '10px'}}>
            Point Style
          </div>
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
