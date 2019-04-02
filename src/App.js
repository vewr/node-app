import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,    Route } from 'react-router-dom' 
import ReactPlayer from 'react-player';
import NavBar from './components/navbar';
import Uploader from './components/uploader';
import { Typography } from '@material-ui/core';
import VideoPlayer from './components/videoPlayer';

class App extends Component {
	render() {
		return (
			<Router >
			
				<Route path="/" component={NavBar} exact />
				<Route path="/uploader" component={Uploader} exact  />
				<Route path="/" component={VideoPlayer} exact />
				    
				
			</Router>
			
		);
	}
}

export default App;
