import React, { Component } from 'react'
import Upload from 'rc-upload'

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


class UploadComponent extends Component{

  constructor(props){
    super(props)

    this.state={

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

  changeHandler = (event) => {
    // console.log(event.target.value);
    // console.log(json)
    // import Data from `${event.target.value}`
  }

  render() {

    return (
        <div style={{ ...style}} >
          <div style={{padding: '10px'}}>
            Fill Color
          </div>
          <div>
            <Upload />
          </div><br></br>
          <div style={{backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha/100})`, height: '100px', width: '100px', margin: 'auto'}}>
          </div>
        </div>
    )
  }
}

export default UploadComponent;
