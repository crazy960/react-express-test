import React , { Component } from 'react'
import { Link } from 'react-router-dom'; 


class Button extends Component{
	
	
	
	constructor(props){
		super(props);
	}
	
	onClick(e){
		this.props.onClick(e);
	}
	onMouseOver(e) {
		this.props.onMouse(e);
	}
	onMouseOut(e){
		this.props.onOut(e);
	}
	
	render(){
	
		return(

				<input type = "button" 
				   value = {this.props.text} 
				   onMouseOver = { this.props.onMouse} 
				   onMouseOut = { this.props.onOut}
				   className = { this.props.className} 
				   style = { this.props.style} 
				   >
				</input>
			
		);
	}
}

export default Button;