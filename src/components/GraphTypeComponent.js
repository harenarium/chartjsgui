import React, { Component } from 'react'

const style = {
  height: '200px',
  width: '200px',
	backgroundColor: '#F5F5F5',
	float: 'left',
	position: 'absolute',
	top: '65%',
	left: '10%',
  height: '30%',
  width: '80%'
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
