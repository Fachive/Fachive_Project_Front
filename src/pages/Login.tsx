import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<form>
				<label htmlFor="loginEmail">user email</label>
				<input id="loginEmail" type="email" />
				<label htmlFor="loginPassword">password</label>
				<input id="loginPassword" type="password" />
				<button>log in</button>
				<Link to={'/'}>sign in</Link>
			</form>
		</div>
	);
};

export default Login;
