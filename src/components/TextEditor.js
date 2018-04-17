import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/tomorrow-night-bright.css'
import 'codemirror/mode/javascript/javascript.js'


const style = {
  // border: '1px solid gray',
  // marginRight: '1%',
  // marginBottom: '1%',
  float: 'right',
  position: 'absolute',
  top: '60%',
  left: '25%',
  width: '50%',
  height: '40%',
  textAlign: 'left'
}

let key = 0

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
      code: newCode
    })
  }

  componentDidMount(){
    let newCode = this.setCode(this.props)

    this.setState({
      code: newCode
    })

  }

  setCode = (props) => {
    return (`//copy into body of html file
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
<canvas id="myChart" width="400" height="400"></canvas>
<script>
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "${props.chartData.type}",
    data: {
      labels: [${props.chartData.labels}],
      datasets: [{
        label: "${props.chartData.label}",
        data: [${props.chartData.data}],
        backgroundColor: ["${props.chartData.backgroundColor}"],
        borderColor: ["${props.chartData.borderColor}"],
        borderWidth: ${props.chartData.borderWidth},
        borderDash: [${props.chartData.borderDash}],
        lineTension: ${props.chartData.lineTension},
        radius: ${props.chartData.radius},
        pointStyle: "${props.chartData.pointStyle}",
      }]
    },
    options: ${JSON.stringify(props.chartData.options)}
  });
</script>
`)
  }



  render() {
    let options = {
      lineNumbers: true,
      theme: "tomorrow-night-bright",
      mode: "javascript",
      lineWrapping: false
    }
    key += 1
    return (
      <div className="TextEditor" style={{ ...style}}>
        <CodeMirror key={key} value={this.state.code} options={options} />
      </div>
    );
  }
}

export default TextEditor;
