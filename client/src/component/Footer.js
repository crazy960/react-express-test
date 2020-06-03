import React , { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
	
	state = {
		onload : false
	}
	componentDidMount(){
		console.log("footer componentdidmount");
		setTimeout( function(){
		this.setState({
			onload : true
		})
		}.bind(this) , 0 );
	}
	render(){
		var footer_height;
		if(this.state.onload === true)
			footer_height = 'translateY(0)';
		return(
			<div className = "footer_container">
				<div className = "footer" style = {{ transform : footer_height}}>
					<span className="footer_text">We use cookies to provide website functionality, to analyze traffic on our Mailchimp Sites, personalize content, serve targeted advertisements and to enable social media functionality. Our Cookie Statement 
					provides more information and explains how to update your cookie settings. View our</span>
				</div>
			</div>
		);
	};
}

export default Footer;