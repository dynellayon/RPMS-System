import React, { useState,useEffect } from 'react'
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {columns} from './EvalTask'
import axios from 'axios';


function ViewTask() {
  let user=JSON.parse(sessionStorage.getItem('user-info'));
let id=user.id;
    const [task,setTask]=useState([ ]);
    const retrieveTasks = async () => {
      const response = await axios.get(`http://localhost:8000/api/evaltask/${id}`);
      return response.data;
  
    };
useEffect(()  =>{

  const getalltask=async () =>{
    const alltask= await retrieveTasks(id);
    if(alltask){ setTask(alltask);}
    

  }  
  getalltask()
},[])

 let data =task.evaltask;
    



const tableData = {
  columns,
  data
};

  return (
    <div>
 <div className="wrapper">
      <Heads/>
      <Menu/>
     
     {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Employee Task(s)</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Task(s)</li>
            </ol>
          </div>{/* /.col */}
		  
        </div>{/* /.row */}
	
		  
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}


             
  <div className="card">
  <div className="card-header">
  <div>
 
  </div>
  {/* /.card-header */}
  <div className="card-body">

  <DataTableExtensions
    export={false}
    print={false}
     filterPlaceholder="search task"
     {...tableData}
    >
      <DataTable
        noHeader
        
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
        
      />
    </DataTableExtensions>
  
  
  </div>
</div>


  </div>
      
    </div>
    </div>
    <Footer/>
    </div>
  )
}




export default ViewTask