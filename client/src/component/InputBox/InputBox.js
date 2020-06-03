import React, { Component } from 'react';
import  "./InputBox.css";


class InputBox extends Component {
	
	render(){
		return(
			<div>
				<div className = "InputBox">
					<label>{this.props.label}</label><br></br>
					<input type = {this.props.type} placeholder = {this.props.placeholder}>
						{this.props.children}</input>
				
				</div>
			</div>
		);
	}
	
}
export default InputBox;