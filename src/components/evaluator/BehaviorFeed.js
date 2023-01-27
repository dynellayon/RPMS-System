import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { clone } from 'lodash';

import axios from "axios";
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'


function BehaviorFeed() {
    const { taskid } = useParams();
    const { phaseid } = useParams();
    const { rank } = useParams();
    const nav = useNavigate()
    const [error,setError]=useState([]);
    let user=JSON.parse(sessionStorage.getItem('user-info'));
    
   const [data,setData]=useState([]);
   const [obj,setObj]=useState([]);


   const retrieveobj = async () => {


    const formData =new FormData();
    formData.append('taskid',taskid);
    formData.append('rank',rank);
 
    
   axios({
      method: "post",
      url: "http://localhost:8000/api/feedbackbehavior",
      data: formData,
      headers: {
       'Content-Type': 'json/application'
     }
   }).then(res => {
 
    setObj(res.data.esat)
    
   })
     
  
 
     
          
         }; 
    
     
     useEffect(()=>{
     
      
       retrieveobj();
       
      },[])
     
    async function add(){
 
       axios({
        method: "post",
        url: `http://localhost:8000/api/updatephaseone/${taskid}`,
        data: JSON.stringify(obj,  ["id", "learnings","intevention","timeline","resources"]),
        headers: {
          'Content-Type': 'multipart/form-data' 
       }
     }).then(res => {
       console.log(res)

       if(res.data!=="  "){
        let er="Already saved";
        setError(er)   


       
       }
     }).catch(error => {
      console.log(error)
 })


 
      }
     
   


  
  //   console.log( JSON.stringify(obj,  ["id", "learnings","intevention","timeline","resources"]));
      // '{"week":45,"month":7}'
      
        

         
          
   
      const handleEsat = (id,chos,val) => {
        
        let copydata= clone(obj);
       let index=copydata.findIndex(i=>i.id===id)
       copydata[index][chos]=val
         
    setObj(copydata)
    
       }
      

    
  return (
    <div>
    <Heads/>
      <Menu/>
       <div className="content-wrapper">
 
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Development Plan Form</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">E-SAT</a></li>
            <li className="breadcrumb-item active">Start Development Plan</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section className="content">
    <div className="container-fluid">
      <div className="row ">
      
        <div className="col">
       
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Development Plan</h3>
            </div>
   
       
      
 <div className="card-body">
<table className="table table-bordered">
  <thead>
    <tr>
      <th style={{width: 10}}>#</th>
      <th>Strengths</th>
      <th>Development Needs</th>
     
   
            <th>
                Learning Objectives
            </th>
            <th>
                Intervention
            </th>
        
            <th>
                Timelines
            </th>
            <th>
                Resources Needed
            </th>
    </tr>
    <tr>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th></th>
      <th colspan="6" className='table-dark'>
       A. Function Competencies
      </th>
     
    </tr>

    {obj.filter(person => person.level <= 2).map((filteredPerson,index) => (
    <tr>
      <td>{index+1}.</td>
      <td>
       
      </td>
      <td>
  
      KRA: {filteredPerson.kraname}
       Objectives: {filteredPerson.name}
      </td>
      <td>
      <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="Enter ..."  onChange={(e)=>{handleEsat(filteredPerson.id,"learnings",e.target.value)}}></textarea>
      </div>
      </td>
      <td>
      <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="Enter ..." onChange={(e)=>{handleEsat(filteredPerson.id,"intevention",e.target.value)}}></textarea>
      </div>
      </td>
      <td>
      <div class="form-group">
                       <textarea class="form-control" rows="3" placeholder="Enter ..." onChange={(e)=>{handleEsat(filteredPerson.id,"timeline",e.target.value)}}></textarea>
      </div>
      </td>
      <td>
      <div class="form-group">
                       <textarea class="form-control" rows="3" placeholder="Enter ..." onChange={(e)=>{handleEsat(filteredPerson.id,"resources",e.target.value)}}></textarea>
      </div>
      </td>
    </tr>
     ))}
  
     
    
   
  </tbody>
</table>
         
        </div>
   </div>
                                

                                
                                       </div>

                               
                      
     
          </div>
          
          <div className='col-md-6'>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={add}>Submit</button>


           
              </div>
            
          </div>
          
 </div>

 
   

  </section>
  
  
  </div>

  <Footer/>
</div>

  )
}


export default BehaviorFeed