import React from 'react'
import '../Style/Register.css'
import { useState } from 'react'
import axios from 'axios';
const Register = () => {
	const [username,setUserName] = useState(null);
	const [email,setEmail] = useState(null);
	const [password,setPassword] = useState(null);
	const handleSubmit = (async()=>{
    axios.post('3000/register',{
		username,
		email,
		password,
	})
	});
  return (
    <div>
        <div class='center'>
	<div class='signUp'>
		<div class='left'>
			<div class='back'></div>	
		</div>
		<div class='right'>
			<form>
				<div class='field'>
					<h1>Sign Up</h1>
					<div class='input-bordered'>
						<label for='emailaddress'>Email Address</label>
						<input type='email' id="emailaddress" class='first'/>
					</div>	
				</div>
				<div class='field'>
					<div class='input-bordered'>
						<label for='password'>Password</label>
						<input type='password' id="password" />
					</div>
				</div>
				<div class='field'>
					<div class='input-bordered'>
						<label for='confirmpass'>Confirm Password</label>
						<input type='password' id="confirmpass" />
					</div>
				</div>
				<div class='field'>
					<input type='submit' value='Sign Up' />
				</div>	
			</form>	
		</div>	
	</div>	
</div>	
    </div>
  )
}

export default Register