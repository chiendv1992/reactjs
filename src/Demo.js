import React, { Component } from 'react';
class Demo extends Component {
	render(){
		return(
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li className="active">
							<a >Home</a>
						</li>
						<li>
							<a>Link</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Demo;