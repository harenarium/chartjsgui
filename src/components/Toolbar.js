import React, { Component } from 'react';
import Button from './Button.js'
import LineColorComponent from './LineColorComponent.js'
import FillColorComponent from './FillColorComponent.js'
import BackgroundColorComponent from './BackgroundColorComponent.js'
import LineThickness from './LineThickness.js'



const style = {
  position: 'fixed',
  height:'100%',
  width: '20%',
	backgroundColor: 'black',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

const compStyle = {
	// border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentComponent: "",
    }
  }

  clickHandler = (event) => {
    this.setState({currentComponent: event.target.id})
  }

  render() {
    let components= {
      "Line Color": <LineColorComponent chartData={this.props.chartData} setLineColor={this.props.setLineColor}/>,
      "Fill Color": <FillColorComponent chartData={this.props.chartData} setFillColor={this.props.setFillColor}/>,
      "Background Color": <BackgroundColorComponent backgroundColor={this.props.backgroundColor} setBackgroundColor={this.props.setBackgroundColor}/>,
      "Line Thickness": <LineThickness chartData={this.props.chartData} setLineThickness={this.props.setLineThickness}/>,
    }

    let currentComponent = components[this.state.currentComponent]

    return (
      <div className="Toolbar" style={{ ...style}}>
        <Button name="Background Color" clickHandler={this.clickHandler}/>
        <Button name="Line Color" clickHandler={this.clickHandler}/>
        <Button name="Fill Color" clickHandler={this.clickHandler}/>
        <Button name="Line Thickness" clickHandler={this.clickHandler}/>
        <Button name="Graph Type" clickHandler={this.clickHandler}/>
        <Button name="Point Size" clickHandler={this.clickHandler}/>
        <Button name="Another one" clickHandler={this.clickHandler}/>
        {this.state.currentComponent === "" ? null : (
          <div>
            {currentComponent}
          </div>
        )}
      </div>
    );
  }
}

export default Toolbar;
