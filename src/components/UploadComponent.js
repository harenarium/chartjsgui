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
