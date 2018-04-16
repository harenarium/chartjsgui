import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/tomorrow-night-bright.css'
import 'codemirror/mode/javascript/javascript.js'

const style = {
  border: '1px solid gray',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  float: 'right',
  position: 'absolute',
  top: '60%',
  left: '25%',
  width: '70%',
  textAlign: 'left'
}

class TextEditor extends Component {
  constructor(){
    super()
    this.state={
      code: "// Code"
    }
  }

  componentWillReceiveProps(nextProps){
    let newCode = this.setCode(nextProps)

    this.setState({
      code: newCode,
    });

  }

  componentDidMount(){
    let newCode = this.setCode(this.props)

    this.setState({
      code: newCode,
    });

  }

  setCode = (props) => {
    console.log("pros\ps", props);
    return (`<canvas id="myChart" width="400" height="400"></canvas>
<script>
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ${props.chartData.backgroundColor},
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
</script>
`)
  }



  render() {
    // console.log(this.state.code);
    let options = {
      lineNumbers: true,
      theme: "tomorrow-night-bright",
      mode: "javascript"
    }
    return (
      <div className="TextEditor" style={{ ...style}}>
        <CodeMirror value={this.setCode(this.props)} options={options} />

      </div>
    );
  }
}

export default TextEditor;
