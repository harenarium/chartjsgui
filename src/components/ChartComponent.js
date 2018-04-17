import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

const style = {
  // border: '1px dashed gray',
  // padding: '0.5rem 1rem',
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  float: 'right',
  position: 'absolute',
  top: '15%',
  left: '25%',
  width: '50%',
  height: '40%'
}

class ChartComponent extends Component {
  constructor(props){
    super(props)
  }

  setChartParams = (props) => {
    const config = {
      type: props.chartData.type,
      data: {
        labels: props.chartData.labels,
        datasets: [{
          label: props.chartData.label,
          data: props.chartData.data,
          backgroundColor: props.chartData.backgroundColor,
          borderColor: props.chartData.borderColor,
          borderWidth: props.chartData.borderWidth,
          borderDash: props.chartData.borderDash,
          lineTension: props.chartData.lineTension,
          radius: props.chartData.radius
        }]
      },
      options: {maintainAspectRatio: false}
    }
    return config
  }

  initializeChart(options) {
    let el = ReactDOM.findDOMNode(this.refs.chart);
    let ctx = el.getContext("2d");
    let chart = new Chart(ctx, options);
  }

  componentWillReceiveProps(nextProps){
    this.initializeChart(this.setChartParams(nextProps));
  }

  componentDidMount(){
    this.initializeChart(this.setChartParams(this.props));
  }

  render() {
    return (
      <div className="ChartComponent" style={{ ...style, background: this.props.backgroundColor}} >
        <canvas ref='chart' name='chart'/>
      </div>
    );
  }
}

export default ChartComponent;
