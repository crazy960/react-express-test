import React , { Component } from 'react';
import "./Top.css"

class Container extends Component {
	
	
	render(){
		
		var vh = '0px';
		if(this.props.onMouse === true)
			vh = '400px';
		else
			vh = '0px';
		
		return(
			<div className = "container" style = {{height :vh}}></div>
		);
	}
}

export default Container;