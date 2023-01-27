import React from 'react'

function Dashboard() {
  let user=JSON.parse(sessionStorage.getItem('user-info'));
  return (
<div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}

    {user.role_id==="1" ?
          <>
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>Task</p>
              </div>
              <div className="icon">
                <i className="fas fa-tasks" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>Done Rating</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>Employee Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>44</h3>
                <p>Evaluators Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* Main row */}
     
      </div>
    </section>
    </>
    :null}
    {user.role_id==="2" ?
          <>
 <div className="card">
  <div className="card-header ">
    <h3 className="card-title p-3"><i className="fas fa-bullhorn"></i>Welcome {user.name}!</h3>
   
  </div>{/* /.card-header */}
  <div className="card-body">
    <div className="tab-content">
      <div className="tab-pane active">
      <div class="callout callout-info">
                  <h5>Please check your Task and Evaluation for updates!</h5>

                  <p>Follow the steps to complete.</p>
                </div>
                
      </div>
      
    </div>
    {/* /.tab-content */}
  </div>{/* /.card-body */}
</div>
</>
:null}
  {user.role_id==="3" ?
          <>
<div className="card">
  <div className="card-header ">
    <h3 className="card-title p-3"><i className="fas fa-bullhorn"></i>Welcome {user.name}!</h3>
   
  </div>{/* /.card-header */}
  <div className="card-body">
    <div className="tab-content">
      <div className="tab-pane active">
      <div class="callout callout-info">
                  <h5>Please check your task for updates!</h5>

                  <p>Follow the steps to complete.</p>
                </div>
                
      </div>
      
    </div>
    {/* /.tab-content */}
  </div>{/* /.card-body */}
</div>
</>
:null}
  </div>
  
</div>


 


  )
}

export default Dashboard