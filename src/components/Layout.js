import React,{ useState,useEffect }  from 'react'
import Heads from './Heads'
import Menu from './Menu'
import Footer from './Footer'
import Table from "./tables/Emptable";
import axios from 'axios';
import swal from 'sweetalert'


//const clickhandler = name => console.log("delete", name);



function Layout() {

const [users, setUsers]=useState([])
  const clickhandler = (id) => {
  
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((deleteusers) => {
    
      if (deleteusers) {
        const del = axios.delete(`http://localhost:8000/api/userdelete/${id}`);
    
        
        swal(del.data.message, {
          icon: "success",
       
    
        } )
 
        
        remove(id);
     
      } else {
        swal("Employee Account is safe!");
      }
     
      
    
  
      } )
    
    }
    const remove = (passid) => {
      setUsers((current) =>
        current.filter((users) => users.id !== passid)
      );
    };
    const retrieveUsers = async () => {
      const response = await axios.get(`http://localhost:8000/api/userlists`);
      setUsers(response.data)
 

    };             
    useEffect(()  =>{
   
      retrieveUsers();
        },[]);       
 

  return (
    <div>
 <div class="wrapper">
      <Heads/>
      <Menu/>
     {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Employee</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Employee</li>
            </ol>
          </div>{/* /.col */}
		  
        </div>{/* /.row */}
	
		  
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}


             
  <div className="card">
  <div className="card-header">
  <div>
  <div className="col-sm-2">
           
              <button className='btn btn-outline-primary btn-block'><a href="/AddUser">Add Employee</a></button>
			
        
  </div>
  </div>
  {/* /.card-header */}
  <div className="card-body">
  <Table data={users} click={clickhandler} />
  </div>
</div>


  </div>
     
    </div>
    </div>
    <Footer/>
    </div>
  )
}
export default Layout;