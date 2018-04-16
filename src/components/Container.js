import React, { Component } from 'react';
import ChartComponent from './ChartComponent.js'
import TextEditor from './TextEditor.js'


class Container extends Component {

  render() {
    return (
      <div className="Container">
        <ChartComponent chartData={this.props.chartData} backgroundColor={this.props.backgroundColor}/>
        <TextEditor chartData={this.props.chartData}/>
      </div>
    );
  }
}

export default Container;
