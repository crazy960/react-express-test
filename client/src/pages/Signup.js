import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import InputBox from '../component/InputBox/InputBox';

import styled from 'styled-components';

const Container = styled.div`
`

const CheckList = styled.li`
	color: rgb(0,124,137);

`

const Text = styled.span`
	color :black;
`




class Signup extends Component {
	
	render(){
		return(
			<Container>
				<h1>Welcome to Asahan</h1>
				find your Skill. Engage your Customers. Build Your Brand <br/>
				Already have your account? <Link to ="/login">Log in.</Link><br/>
				
				<InputBox label = "Username" type = "text" placeholder = ""></InputBox>
				<InputBox label = "Email" type = "text" placeholder = ""></InputBox>
				<InputBox label = "Password" type = "password" placeholder = ""></InputBox>
				
				<ul>
					<CheckList><Text>One Lowercase Character</Text></CheckList>
					<CheckList><Text>One Uppercase Character</Text></CheckList>
					<CheckList><Text>One Number</Text></CheckList>
				</ul>
				
				<Footer></Footer>
			</Container>
			
		)
	};
}

export default Signup;