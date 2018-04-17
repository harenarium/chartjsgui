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
    let value = parseInt(event.target.value, 10)
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
