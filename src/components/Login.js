<<<<<<< HEAD
import React, { useState } from 'react';
import './Login.css';
import Validation from './validation';

export function signOut() {
	window.localStorage.removeItem("IsLoggedIn");
}

function Login() {

	const [Loginvalue, setLogin] = useState({
		loginEmail: '',
		loginPassword: ''
	})

	const handleData = (e) => {
		setLogin({ ...Loginvalue, [e.target.name]: e.target.value });
	}

	const handleLogin = (e) => {
		e.preventDefault();
		fetch("http://localhost:5000/register", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				email: Loginvalue.loginEmail,
				password: Loginvalue.loginPassword,
			}),

		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userLoggedIn");
				alert("Succesfully LoggedIn")
				window.localStorage.setItem("token", data.data)
				window.localStorage.setItem("IsLoggedIn", true);
			})
	}

	const [values, setValues] = useState({
		email: '',
		password: '',
		confirm_password: ''
	})

	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	}
	const handleValidation = (e) => {
		e.preventDefault();
		setErrors(Validation(values));
	};

	const handleSubmit = (e) => {
		handleValidation(e);
		console.log(Object.keys(errors).length);
		if (Object.keys(errors).length === 0) {
			fetch("http://localhost:5000/register", {
				method: "POST",
				crossDomain: true,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					email: values.email,
					password: values.password,
				}),

			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data, "userRegister")
				})
		}
	}
	return (
		<>
			<section id='login'>
				<div className="container">
					<input type="checkbox" id="check" />
					<div className="login form">
						<header>Login</header>
						<form onSubmit={handleLogin}>
							<input type="text" placeholder="Enter your email" onChange={handleData} required />
							<input type="password" placeholder="Enter your password" onChange={handleData} required />
							<a href="/forgotpass">Forgot password?</a>
							<input type="button" className="button" value="Login" onClick={handleLogin} />
						</form>
						<div className="signup">
							<span className="signup">Don't have an account?
								<label for="check">Signup</label>
							</span>
						</div>
					</div>

					<div className="registration form">
						<header>Signup</header>
						<form onSubmit={handleSubmit}>
							<input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
							{errors.email && <p style={{ color: "red" }}> {errors.email}</p>}
							<input type="password" name="password" placeholder="Create a password" onChange={handleChange} />
							{errors.password && <p style={{ color: "red" }}> {errors.password}</p>}
							<input type="password" name="confirm_password" placeholder="Confirm your password" onChange={handleChange} />
							{errors.confirm_password && <p style={{ color: "red" }}> {errors.confirm_password}</p>}
							<input type="button" className="button" value="Signup" onClick={handleSubmit} />
						</form>
						<div className="signup">
							<span className="signup">Already have an account?
								<label for="check">Login</label>
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;
=======
import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" className="form-style" placeholder="Email"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" className="form-style" placeholder="Password"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="https://www.web-leb.com/code" className="btn mt-4">Login</a>
                      <p className="mb-0 mt-4 text-center"><a href="https://www.web-leb.com/code" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-3 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" className="form-style" placeholder="Full Name"/>
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="tel" className="form-style" placeholder="Phone Number"/>
												<i className="input-icon uil uil-phone"></i>
											</div>	
                      <div className="form-group mt-2">
												<input type="email" className="form-style" placeholder="Email"/>
												<i className="input-icon uil uil-at"></i>
											</div>
											<div className="form-group mt-2">
												<input type="password" className="form-style" placeholder="Password"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="https://www.web-leb.com/code" className="btn mt-4">Register</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
    </>
  );
}

export default Login;
>>>>>>> 0c2c18564856b4208ad71739f554d467bb9c93ec
