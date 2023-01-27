import React,{useEffect,useState} from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {columns} from './Data'
import axios from 'axios';
function HighProf() {
    const [data,setData]=useState([]);
    const retrieveobj = async () => {
     
        const result =await axios.get(`http://localhost:8000/api/objecthighprof`
          ,
          {
            headers: { "Content-Type": "application/json" },
           
          }
        );
  
      
        setData(...data,result.data);
        
      
      
           
          }; 
      
      useEffect(()=>{
      
       
        retrieveobj();
      
       },[])
       const result = Object.values(data).reduce((r, { weight }) => r + weight, 0);
       const tableData = {
         columns,
         data,
       };
  return (
    <>
       <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0"> High Professional objectives</h1>
          </div>{/* /.col */}
  
		  
        </div>{/* /.row */}
	
		  
        </div>{/* /.row */}
      </div>
  <div className="card">
  <div className="card-header">
  <div>
  
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


    </>
  )
}

export default HighProf