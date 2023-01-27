import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  let [responseData, setResponseData] = React.useState('')

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const nav = useNavigate();

function back(){
  nav(-1)
}


  async function login(e){
    e.preventDefault();
    
    const res = await axios.post(
        `http://localhost:8000/api/login`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
         
        }
      );
    if(res.data.error){
      setResponseData(res.data.error)

    }else{
        
        sessionStorage.setItem("user-info", JSON.stringify(res.data));
        
        nav('/sidebar')
        nav(0)
     
    }
   }
   return (
    <div className="hold-transition login-page">
  <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <p className="h1"><b>DEPED</b>PORTAL</p>
    </div>
 
<p className='text-danger'>{responseData}</p>


    <form onSubmit={login}>
    <div className="card-body">
      <p className="login-box-msg"><b>Evaluator(s) login Page</b></p>
     
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value) } />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
         
          {/* /.col */}
          <div className="col-4">
            <button type="submit"   className="btn btn-primary btn-block">Sign In</button>
            
          </div>
          <div className="col-4">
           <button onClick={back} className="btn btn-danger btn-block">Back</button>
           
          </div>
          {/* /.col */}
        </div>
      
    </div>
    </form>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>
{/* /.login-box */}
</div>
              
  )
}

export default Login