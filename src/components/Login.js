import React from 'react';
import './Login.css';

function Login() {
  return (
		<div class="container">
			<input type="checkbox" id="check"/>
			<div class="login form">
				<header>Login</header>
				<form action="#">
					<input type="text" placeholder="Enter your email" required />
					<input type="password" placeholder="Enter your password" required />
					<a href="#">Forgot password?</a>
					<input type="button" class="button" value="Login"/>
				</form>
				<div class="signup">
					<span class="signup">Don't have an account?
						<label for="check">Signup</label>
					</span>
				</div>
			</div>
			<div class="registration form">
				<header>Signup</header>
				<form action="#">
					<input type="text" placeholder="Enter your email" required/>
					<input type="password" placeholder="Create a password" required/>
					<input type="password" placeholder="Confirm your password" required/>
					<input type="button" class="button" value="Signup"/>
				</form>
				<div class="signup">
					<span class="signup">Already have an account?
					<label for="check">Login</label>
					</span>
				</div>
			</div>
		</div>
  );
}

export default Login;
