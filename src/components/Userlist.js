import React from 'react'
import Header from './Header';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert'
function Userlist(props){
  const removeUsershandler = (id) => {
    
      
    
        
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
        });
       
      } else {
        swal("Employee Account is safe!");
      }
    });

    
  }

        return(
      <div>      
<Header/>
            <div className='container'>
                
                <div className=''>
                    <div className='col-md-12'>
                        <div className='card'>
                        <div className='card-header'>
                            <h4>Employee</h4>
                          <Link to="/adduser">Add User</Link>
                        </div>
                        <div className='card-body'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {props.users ?
      props.users.map((users,i) => (
    <tr key={i}>
    <td key={i}>{users.email}</td>
      <td>{users.name}</td>
      <td><Link className='btn btn-primary btn-sm' to={`/edituser/${users.id}`}>edit</Link><button className='btn btn-danger btn-sm' onClick={()=>removeUsershandler(users.id)}>Delete</button></td>
      
      
    </tr>
     ))
     :
     <tr >
     <td >Loading</td>  
     </tr>
    }
    
    
    
      </tbody>

    </Table>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
              );


    }

export default Userlist;