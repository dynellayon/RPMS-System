import React,{useState,useEffect} from 'react'
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import axios from 'axios';
import TaskTable from './TaskTable';


const clickhandler = id => console.log("delete", id);





function Tasklist() {
const [data,setData]=useState([]);


const retrieveobj = async () => {
  const result =await axios.post(`http://localhost:8000/api/alltask`);
  

  setData(result.data.users);
  


     
    }; 

useEffect(()=>{

 
  retrieveobj();

 },[])


console.log(data)
 /*let name =props.tasks.name;
let evaluator =props.tasks.evaluator;
  const data = {
    ...props.tasks,
    task: {
  ...props.tasks.task,
    evaluator,name
    }
    }
  */


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
            <h1 className="m-0">Tasks</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Tasks</li>
            </ol>
          </div>{/* /.col */}
		  
        </div>{/* /.row */}
	
		  
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}


             
  <div className="card">
  <div className="card-header">
  <div>
  <div className="col-sm-2">
           
              <button className='btn btn-outline-primary btn-block'><a href="/AddTask">Add Tasks</a></button>

        
  </div>
  </div>
  {/* /.card-header */}
  <div className="card-body">

 

  
   
  <TaskTable data={data} click={clickhandler} />



  </div>
</div>


  </div>
      
    </div>
    </div>
    <Footer/>
    </div>
  )
}




export default Tasklist