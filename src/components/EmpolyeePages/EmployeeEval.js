import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from "axios";
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'


function EmployeeEval() {
    const { phaseid } = useParams();
    const { taskid } = useParams();
    const nav = useNavigate()
    const [error,setError]=useState([]);
    let user=JSON.parse(sessionStorage.getItem('user-info'));
   const [data,setData]=useState([]);
   const retrieveobj = async () => {
 

   axios({
      method: "post",
      url: "http://localhost:8000/api/esat",

      headers: {
       'Content-Type': 'json/application'
     }
   }).then(res => {
  
     setData(res.data.esat);
   })
     
  
       
     
     
          
         }; 
     
     useEffect(()=>{
     
      
       retrieveobj();
     
      },[])
      const handleChange = (id,chos,val) => {
        let num =parseInt(val)
    
        let copydata=data;
        copydata.find((i)=>i.id===id)[chos]=num
        copydata.find((i)=>i.id===id)["average"]=parseInt(taskid)
      setData(data)
      console.log(data)
    
      
     
       }
    
       function add(){
        const fulllevel = Object.values(data).every(x => (x.quality !== null && x.quality !== 0
          && x.quality !== " "));
          const fullpriority = Object.values(data).every(x => (x.efficiency !== null && x.efficiency !== 0
            && x.efficiency !== " "));
         if(fulllevel&&fullpriority){



         
          
        
          
          axios({
            method: "post",
            url: `http://localhost:8000/api/esatrating/${user.id}`,
            data: data,
            headers: {
              "Content-Type": "application/json" 
           }
         }).then(res => {
           console.log(res)

           if(res.data!=="  "){
            let er="Already saved";
            setError(er)   


            nav('/CoreBehavior', {
              state: {
                pid: phaseid,
                tid: taskid,
              }
            });
            nav(0)

           }
         }).catch(error => {
          console.log(error)
     })
        
   
         }else{
        let er="Please fill all the forms";
        setError(er)
         }
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
          <h1>E-SAT Form</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">E-SAT</a></li>
            <li className="breadcrumb-item active">Start self Rating</li>
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
              <h3 className="card-title">E-SAT</h3>
            </div>
   
       
      
              <div className="card-body">
                
        </div>
        {data.map((obj,i) => 
        <div className="col-md-6">
           
        <li key={i}>{obj.kraname} </li>
      
          <div className="d-flex align-items-center">
      
          <p >{obj.name}</p>  
            <select  defaultValue="" className="form-control form-control-sm"   onChange={(e)=>{handleChange(obj.id,'quality',e.target.value) }}>
            <option hidden value="">Level of Capability</option>
            <option value={1}>1 Very low</option>
              <option value={2}>2 Low</option>
              <option value={3}>3 Moderate</option>
              <option value={4}>4 High</option>
              <option value={5}>5 Very High</option>              
            </select>
          
            <select  defaultValue="" className="form-control form-control-sm" onChange={(e)=>{handleChange(obj.id,'efficiency',e.target.value)}}>
            <option hidden  value="">Priority Areas to be address</option>
              <option value={1}>1 Very low</option>
              <option value={2}>2 Low</option>
              <option value={3}>3 Moderate</option>
              <option value={4}>4 High</option>
              <option value={5}>5 Very High</option>
            </select>
            
            
          </div>
       
          </div>
         
          
        )}
                                </div>
                                

                                
                                       </div>

                               
                      
     
          </div>
          
          <div className='col-md-6'>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={add}>Submit</button>

            {error? <p className="btn btn-primary">{error}</p>:null}
           
              </div>
            
          </div>
          
 </div>

 
   

  </section></div>

<Footer/>
</div>
  )
}

export default EmployeeEval