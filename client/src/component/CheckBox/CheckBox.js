import React , {Component } from 'react'
import './CheckBox.css'


class CheckBox extends Component {
	

	constructor(props){
		super(props);
		this.state = {
			isChecked : false
		}
		
	}
	
	toggleChange(){
		this.setState({
			isChecked : !this.state.isChecked
		});

		
	}
	render(){
		return(
			<div className = "CheckBox">
					

						<input type="checkbox" value = {this.props.value}
							onChange = {this.toggleChange.bind(this)} 
							defaultChecked={this.state.isChecked}></input>
				<label>

						{this.props.label}
					</label>
			</div>
			
		)
		
	};
}


export default CheckBox;
