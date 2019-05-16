import React from 'react';
import { Link } from 'react-router';
const NotFound = () => (
	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<div></div>
				<h1>404</h1>
			</div>
			<h2>Page not found</h2>
			<p>The link you followed may be broken, or is temporarily unavailable.</p>
			<Link to='/'>home page</Link>
		</div>
	</div>
);

export default NotFound;
