import React ,  { Component } from 'react';
import "./Top.css";
import Button from "./Button/Button";
import ButtonStyle from './Button/Button.module.css'
import Container from "./Container";
import { Link } from 'react-router-dom';



class Top extends Component {
	
	state = {
		onMouse : false
	}

	idle() {
		return;
	}

	menuLists = [
		{
			title : "Asahan" ,
			onHover : this.idle ,
			onOut : this.idle
		} , 
		{
			title : "Why Mail Champ?" ,
			onHover : this.idle ,
			onOut : this.idle
		} , 
		{
			title : "Marketing platform" ,
			onHover : function(e){
				this.setState({
					onMouse : true
				});
	
				
			}.bind(this) ,
			onOut : function(e){
				this.setState({
					onMouse : false
				});
			}.bind(this)
		} , 
		{
			title : "Pricing" ,
			onHover : this.idle ,
			onOut : this.idle
		} , 
		{
			title : "Recources" ,
			onHover : function(e){
				this.setState({
					onMouse : true
				});
			}.bind(this) , 
			onOut : function(e){
				
				this.setState({
					onMouse : false
				});
			}.bind(this)
		}

	];
	
	render(){
		
		var menu = new Array;
		for(var i =0; i< this.menuLists.length; i++)
			menu.push(<Button key = {i} 
						      text = {this.menuLists[i].title} 
						      onMouse = {  this.menuLists[i].onHover  } 
						      onOut = { this.menuLists[i].onOut }
						      className = {ButtonStyle.Menu} 
						      style ={ {margin : "10px"}}>								  
				      </Button>);
		
		return(
			<div className = 'top'>
				<Container onMouse = {this.state.onMouse}></Container>
				<span className = 'menuContainer'>
					{menu}
				</span>
					
				<span className='buttonContainer' >
					<Link to = '/login'>
				    <Button text = 'Log in' className = { ButtonStyle.Login }  ></Button>
					</Link>
	
					<Link to = '/signup'>
					<Button text = 'Sign up' className = { ButtonStyle.Signup } style ={{ marginLeft : "10px"}}></Button>
					</Link>
				</span>
				
				
			</div>
		);
	}
	
}

export default Top;