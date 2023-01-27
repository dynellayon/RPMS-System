import React from 'react'
import { useNavigate } from 'react-router-dom';
function Heads() {
  const nav = useNavigate();
  let user=JSON.parse(sessionStorage.getItem('user-info'));
function logout(){
  sessionStorage.clear();
  nav("/");
}
  return (
    <div>
        {/*<!-- Preloader -->*/}
    <div className="preloader flex-column justify-content-center align-items-center">
      <img className="animation__shake" src="/dist/img/deped.png" alt="DepedLogo" height="60" width="60"/>
    </div>
  
    {/*<!-- Navbar -->*/}
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/*<!-- Left navbar links --*/}
      <ul className="navbar-nav">
        <li className="nav-item">

          <a className="nav-link" data-widget="pushmenu"  role="button"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" class="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
  
    {/*<!-- Right navbar links -->*/}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Navbar Search -->*/}
        <li className="nav-item">
         
          <div className="navbar-search-block">
            
          </div>
        </li>
  
          {/* <!-- Messages Dropdown Menu --> */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
        <i className='fas'> <div className="user-panel  ">
        <div className="image">
          {user.image ===null || user.image ===" "?<img src="/dist/img/user123.png" className="img-circle elevation-2" alt="User Image" />
          :<img src={"http://localhost:8000/"+user.image} className="img-circle elevation-2" alt="User Image" />
          }
        </div>
        
      </div></i> 
      <span className="badge mt-3 lg"><i className="nav-icon fas fa-angle-down" /></span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
                  {/* <!-- Message Start -->  */}
              <div className="media">
                {user.image ===null || user.image ===" " ?<img src="dist/img/user123.png" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                :<img src={"http://localhost:8000/"+user.image} alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                  
                }
                
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                  {user.name}
                    <span className="float-right text-sm text-danger"><i className="fas exit-outline"></i></span>
                    
                  </h3>
                
                </div>
              </div>
               {/* <!-- Message End -->  */}
            </a>
            
            <div className="dropdown-divider"></div>
            <a onClick={logout} class="dropdown-item ">
           <div className='fas'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fas bi bi-box-arrow-right float-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
</svg> Logout
</div> 
             
            </a>
            {/*      <!-- Message End -->  */}
          
           
          </div>
        </li>
    
      
        <li className="nav-item">
          <a className="nav-link" data-widget="fullscreen" href="#" role="button">
            <i className="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li className="nav-item">
        
        </li>
      </ul>
    </nav>
         {/*        <!-- /.navbar --> */}
    </div>
  )
}

export default Heads