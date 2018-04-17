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


class LineThickness extends Component{

  constructor(props){
    super(props)

    this.state={
      thickness: props.chartData.borderWidth,
      dashSolid: props.chartData.borderDash[0],
      dashSpace: props.chartData.borderDash[1],
      tension: props.chartData.lineTension * 10
    }
  }

  setLine = (event) => {
    let name = event.target.name
    let value = parseInt(event.target.value)
    if(name === 'tension' && value > 100){
      value = 100
    }
    if(value > 255){
      value = 255
    } else if (value < 0){
      value = 0
    }
    if (typeof value === "number"){
      this.setState({[name]: value}, () => {

        this.props.setLineThickness(this.state.thickness, this.state.dashSolid, this.state.dashSpace, this.state.tension/10) })
    }
  }

  render() {

    return (
        <div style={{ ...style}} >
          <div style={{padding: '10px'}}>
            Line Color
          </div>
          <div>
            Line Thickness: <input onChange={this.setLine} value={this.state.thickness} name="thickness" type="number" placeholder="" min={0} max={255}/> <br />
            Dash: <input onChange={this.setLine} value={this.state.dashSolid} name="dashSolid" type="number" placeholder="" min={0} max={255}/>
            <input onChange={this.setLine} value={this.state.dashSpace} name="dashSpace" type="number" placeholder="" min={0} max={255}/> <br />

            Line Tension: <input onChange={this.setLine} value={this.state.tension} name="tension" type="number" placeholder="" min={0} max={100}/>
          </div><br></br>
        </div>
    )
  }
}

export default LineThickness;
