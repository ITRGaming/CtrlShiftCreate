import React, { useState } from 'react';
import './Login.css';
import Validation from './validation';

function Login() {
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
							<form action="#">
								<input type="text" placeholder="Enter your email" required />
								<input type="password" placeholder="Enter your password" required />
								<a href="/forgotpass">Forgot password?</a>
								<input type="button" className="button" value="Login" />
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
								<input type="text" name="email" placeholder="Enter your email" onChange={handleChange}/>
								{errors.email && <p style={{ color: "red" }}> {errors.email}</p>}
								<input type="password" name="password" placeholder="Create a password" onChange={handleChange}/>
								{errors.password && <p style={{ color: "red" }}> {errors.password}</p>}
								<input type="password" name="confirm_password" placeholder="Confirm your password" onChange={handleChange}/>
								{errors.confirm_password && <p style={{ color: "red" }}> {errors.confirm_password}</p>}
								<input type="button" className="button" value="Signup" onClick={handleSubmit}/>
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