import React , {Component} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

class Routes extends Component {
	render(){
		return(
		<Router>
			<Switch>
				<Route exact path = '/' component={Home} />
				<Route path = '/login' component={ Login} />
				<Route path = '/signup' component = {Signup} />
			</Switch>
		</Router>
			);
	}
}

export default Routes;