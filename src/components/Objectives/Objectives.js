import React, { useState } from 'react'
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {columns} from './Data'
import HighProf from './HighProf';



function Objectives(props) {


const data=props.objects;


const result = Object.values(data).reduce((r, { weight }) => r + weight, 0);
const tableData = {
  columns,
  data,
};

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
            <h1 className="m-0">Professional objectives</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Objectives</li>
            </ol>
          </div>{/* /.col */}
		  
        </div>{/* /.row */}
	
		  
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}


             
  <div className="card">
  <div className="card-header">
  <div>
  <div className="col-sm-2">
           
              <button className='btn btn-outline-primary btn-block'><a href="/AddObj">Add Objectives</a></button>
			
              
  </div>
  </div>
  {/* /.card-header */}
  <div className="card-body">

  <DataTableExtensions
    export={false}
    print={false}
  filterPlaceholder="search"
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
  
    <p>Overall weight should be 100% current weight:{result}%</p>
  </div>
</div>


  </div>
 <HighProf/>
    </div>
    
    </div>
    <Footer/>
    </div>
  )
}




export default Objectives