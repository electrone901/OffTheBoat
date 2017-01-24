//This component handles the header navbar component
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import $ from 'jquery';

const Header = (props) => {
	$(() => {
		$(".nav-pills").on("tabsactivate", (event, ui) => window.location.hash = ui.panel.id);
	});
	return (
		<div>
			<div id="google_translate_element"></div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
						</button>
						<a className="navbar-brand" href="#">Off The Boat</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><IndexLink to="/" activeClassName="active">Home<span className="sr-only"/></IndexLink>
							</li>
							<li><Link to="about">About</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<form className="form-inline">
								<div className="form-group">
									<input style={{marginTop: 10 + 'px'}} type="email" className="form-control"
										   id="email" placeholder="Enter email"/>
								</div>
								<div className="form-group">
									<input style={{marginTop: 10 + 'px'}} type="password" className="form-control"
										   id="password" placeholder="Password"/>
								</div>
								<ul className="nav navbar-nav navbar-right">
									<li>
										<button className="btn btn-outline-primary" href="#">Sign Up</button>
									</li>
									<li><input className="btn btn-outline-primary" type="submit" value="Sign In"/></li>
								</ul>
							</form>
						</ul>
					</div>
				</div>
			</nav>
			<div id="google_translate_element"></div>
			<div className="sectionNav">
				<ul className="nav nav-pills center">
					<li><IndexLink to="/">HomePage</IndexLink></li>
					<li><Link to="/checklist">CheckList</Link></li>
				</ul>
			</div>

		</div>
	);
};
Header.propTypes = {
	submit: PropTypes.func
};

export default Header;
