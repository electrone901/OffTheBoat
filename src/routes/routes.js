import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import InfoContainer from '../components/info/InfoContainer';
import {onUsersEnter} from './route_data';
import AllSteps from '../components/steps/allsteps-page';


export default (
	<Route path="/" component={App}>
		<Route component ={HomePage}>
			<IndexRoute  component ={InfoContainer} />
		</Route>
		<Route path ="steps" component={AllSteps}/>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
