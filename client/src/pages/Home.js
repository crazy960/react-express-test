import React , { Component } from 'react';
import Top from '../component/Top';
import Footer from '../component/Footer';

class Home extends Component {
	
	render(){
		return(
			<div>
				<Top></Top>
				<Footer></Footer>
			</div>
		);
	};
}

export default Home;