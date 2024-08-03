import React from "react";
import "../styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate=useNavigate();
  function loginFunc()
  {
    console.log("Login button clicked");
    axios.post("b",{username,password}).then(resp=>
      {
      navigate("/Home");
      }
    )
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
    <div className="login">
      <div className="login-container">
        <h2>LanceStack</h2>
        <form action="/loggedin" method="post">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required onChange={(e)=>{
            setUsername(e.target.value);
          }}></input>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required onChange={(e)=>{
            setPassword(e.target.value);
          }}></input>

          <button type="submit" onClick={loginFunc}>Login</button>
        </form>
        <div class="footer">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
