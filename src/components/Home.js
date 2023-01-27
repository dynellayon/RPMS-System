import React, { useState } from 'react'


function Home() {
   return (
    <div className="hold-transition login-page">
  <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <p className="h1"><b>WELCOME USER!</b></p>
    </div>
    <div className="card-header text-center">
      <p className="H3">Please choose the type of user you are......</p>
      <div className="col-md-6">
          <a href='/Employeelogin' > <button type="button" className="btn btn-outline-primary btn-block"><i className="fa fa-user"></i>Employee</button></a>
              <a href='/Evaluatorslogin' >   <button type="button" className="btn btn-outline-info btn-block btn-flat"><i className="fa fa-user-secret"></i>Evaluator</button></a>
                 

                </div>
      
    </div>    
    <div className="card-body">
    </div>
  </div>

</div>
</div>
              
  )
}
export default Home