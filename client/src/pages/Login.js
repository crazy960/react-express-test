import React , { Component } from 'react';
import './Login.css';
import Footer from '../component/Footer';
import InputBox from '../component/InputBox/InputBox';
import CheckBox from '../component/CheckBox/CheckBox';
/* 연습을 위해 안쓴다
import { Button , Form } from 'react-bootstrap';
*/

class Login extends Component {
	/*
	componentDidMount(){
		
		this.callApi().then(res => console.log(res))
		.catch(err=>console.log(err));
		console.log('login componentdidmount');
		
	}
	
	callApi = async function(){
		const response = await fetch('/api');
		const body = await response.json();
		return body;
	}
	*/
	
	render(){
		return(
			<div >
				<div className = 'login_container'>
					<div className = 'login_left'>

						
						<div id ="left_img">
							<img src = "/img/login_left.png" width = "150" height = "150" /><br></br>
							<h1>Log In</h1>
						</div>
						
						<p>
							Need a Asahan's account? <a href = "signup">Create an account</a>
						</p>
					
						<form>
							<InputBox label = "Username" type = "text" placeholder = ""></InputBox>
							<InputBox label = "Password" type = "password" placeholder = ""></InputBox>
							<input className = "btn_login" type = "submit" value = "Log In"></input><br></br>
							<CheckBox label="Keep me Logged in" value = "keep"></CheckBox>
							
						</form>
						
						<div>
							<a href="/">Forgot UserName?</a>&ensp;&middot;&ensp;<a href="/">Forgot Password?</a>
						</div>
						<div className = 'footer_text'>
							©2001–2020 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Cookie 									Preferences, Privacy, and Terms.
						</div>
  
					</div>
					<div className = 'login_right'>
						<div id ="right_text">
							We've got your back and your free .com<br></br>
							Start with a free custom domain for up to 5 years, then build a free<br></br>
							website to get your business online quickly.<br></br>
						</div>
						<div>
							<input type = "button" value = "Get a Free Custom Domain"></input>
						</div>
						<div>
							<img src = "/img/login_right.jpg" width = "300" height = "300"></img>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
	  );
	}
}

export default Login;