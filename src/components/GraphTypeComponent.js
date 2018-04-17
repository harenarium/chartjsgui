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


class GraphTypeComponent extends Component{

  constructor(props){
    super(props)

    this.state={
      type: props.chartData.type
    }
  }

  setGraphType = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({[name]: value}, () => {
      this.props.setType(this.state.type)
    })
  }

  render() {

    return (
        <div style={{ ...style}} >
          <div style={{padding: '10px'}}>
            Point Style
          </div>
          <div>
            Style: <select onChange={this.setGraphType} name="type">
              <option value='line'>Line</option>
              <option value='bar'>Bar</option>
              <option value='radar'>Radar</option>
              <option value='doughnut'>Doughnut</option>
              <option value='scatter'>Scatter</option>
              <option value='pie'>Pie</option>
              <option value='bubble'>Bubble</option>
            </select>
          </div><br></br>
        </div>
    )
  }
}

export default GraphTypeComponent;
