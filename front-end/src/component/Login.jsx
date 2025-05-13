import React from 'react'
import '../Style/Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div class="container">
    <div class="wrapper">
      <form action="">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required />
          <i class='bx bxs-user'></i>
        </div>
        <dive class="input-box">
          <input type="password" placeholder="Password" required />
          <i class='bx bxs-lock-alt'></i>
        </dive>
        <dive class="remember-forget">

        </dive><br/>
        <button type="submit" class="btn">Login</button>
        <div class="register-link">
          <a href="#">Forget password?</a>
        </div>
        <div class="register-link">
          <p>Don't have an account? <button onClick={()=> navigate('/register')}>Regiter</button></p>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Login