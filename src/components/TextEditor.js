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
        radius: ${props.chartData.radius}
      }]
    },
    options: ${JSON.stringify(props.chartData.options)}
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
