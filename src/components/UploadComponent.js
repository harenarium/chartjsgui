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


class UploadComponent extends Component{

  changeHandler = (event) => {
    let file = event.target.files[0];
    let fr = new FileReader();
    fr.readAsText(file)
    fr.onload = () => {
      this.props.setData(fr.result)
    };

    // console.log(event.target.files[0])
    //  var reader = new FileReader()
    //  reader.readAsText = function(theFile) {
    //    console.log(theFile)
    //  }
    //  reader.readAsText(event.target.files[0])
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
            <input type="file" id="file" onChange={this.changeHandler} />
          </div><br></br>
        </div>
    )
  }
}

export default UploadComponent;
