import React from 'react'
import { useNavigate } from 'react-router-dom';

function Menu() {
  const nav = useNavigate();
  let user=JSON.parse(sessionStorage.getItem('user-info'));
  function logout(){
    sessionStorage.clear();
    nav("/");
  }
  return (
 <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a  className="brand-link">
      <img src="/dist/img/deped.png" alt="Deped Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">DEPED</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          {user.image ===null || user.image ===" "?<img src="/dist/img/user123.png" className="img-circle elevation-2" alt="User Image" />
          :<img src={"http://localhost:8000/"+user.image} className="img-circle elevation-2" alt="User Image" />
          }
         
        </div>
        <div className="info">
          <a href="#" className="d-block">{user.name}</a>
        </div>
      </div>
 
      
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item">
            <a href="/sidebar" className="nav-link ">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
               
              </p>
            </a>
          </li>
          {user.role_id==="1" ?
          <>
          <li className="nav-item">
            <a href="/Tasklist" className="nav-link">
              <i className="nav-icon fas fa-tasks" />
              <p>
               Task(s)
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item active">
            <a href='/Objectives' className="nav-link">
            <i className="nav-icon fas fa-address-card"/>
              <p>
                Objectives
                <i className="fas fa-angle-left right" />
                
              </p>
            </a>
           
            
           </li>
          
          <li className="nav-item active">
            <a href='/layout' className="nav-link">
            <i className="nav-icon fas fa-users"/>
              <p>
                Employee
                <i className="fas fa-angle-left right" />
                
              </p>
            </a>
           
            
           </li>
     
          <li className="nav-item">
            <a href="/EvalHeaders" className="nav-link">
              <i className="nav-icon fas fa-user-secret" />
              <p>
               Evaluator
                <i className="right fas fa-angle-left" />
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-th-list" />
              <p>
                Departments
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Evaluation
                <i className="fas fa-angle-left right" />
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-line" />
              
              <p>
                Ratings
                <i className="fas fa-angle-left right" />
              </p>
            </a>
          </li>
          </>
           :null}

      {user.role_id ==="2"?
          <>
          {/*Evaluator  */}
          <li className="nav-item">
            <a href="/ViewTask" className="nav-link">
              <i className="nav-icon fas fa-tasks" />
              <p>
               view task
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Evaluation
                <i className="fas fa-angle-left right" />
              </p>
            </a>
          </li>
             {/*Evaluator  */}

             </>
             :null}

{user.role_id ==="3"?
          <>     
              {/*Employee  */}

              <li className="nav-item">
            <a href="/EmployeeTasks" className="nav-link">
              <i className="nav-icon fas fa-tasks" />
              <p>
               Task(s)
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          </>
          :null}
          {/*Employee  */}

          <li className="nav-header">MORE OPTIONS</li>
          <li className="nav-item">
            <a onClick={logout} className="nav-link">
              <i className="nav-icon fas fa-power-off" />
              <p>
                logout
                
              </p>
            </a>
          </li>
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  
</div>


  )
}

export default Menu