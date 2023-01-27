import React,{useState,useEffect} from 'react'
import {useNavigate ,useLocation } from 'react-router-dom';
import axios from "axios";
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'




function CoreBehavior() {
  const location = useLocation();
    const nav = useNavigate()
    const [error,setError]=useState([]);
    let pid = location.state.pid;
    let tid = location.state.tid;
console.log(pid)
console.log(tid)
    let user=JSON.parse(sessionStorage.getItem('user-info'));
   const [data,setData]=useState([{
   total:0
        }]);
   const retrieveobj = async () => {
   
   axios({
      method: "post",
      url: "http://localhost:8000/api/behavioresat",
      
      headers: {
       'Content-Type': 'json/application'
     }
   }).then(res => {
  
     setData(res.data);
   })
     
  
       
     
     
          
         }; 
     
     useEffect(()=>{
     
      
       retrieveobj();
     
      },[])
      const handleChange = (id,chos,val) => {
        let num =parseInt(val)
        let copydata=data;
        copydata.find((i)=>i.id===id)[chos]=num
        copydata.find((i)=>i.id===id)["phaseid"]=parseInt(pid)
        copydata.find((i)=>i.id===id)["taskid"]=parseInt(tid)
      setData(data)
      console.log(data)
       }

    
       function add(){
        const fulllevel = Object.values(data).every(x => (x.rating !== null && x.rating !== 0
          && x.rating !== " "));
         if(fulllevel){
          axios({
            method: "post",
            url: `http://localhost:8000/api/behavior/${user.id}`,
            data: data,
            headers: {
              "Content-Type": "application/json" 
           }
         }).then(res => {
  
           


           if(res.data!=="  "){
            let er="Already saved";
            setError(er) 
            nav('/EmployeeTasks');
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
          

          console.log(data)
         
          
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
            <li className="breadcrumb-item active">Core Behavior</li>
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
              <h3 className="card-title">E-SAT Core Behavior</h3>
            </div>
   
            <p>{error}</p>  
      
              <div className="card-body">
               
        </div>
        {data.map((behave,i) => 
        <div className="col-md-9">
           
        <li key={i}>{behave.corename} </li>
      
          <div className="md-6 d-flex align-items-center ">
      
          <p >{behave.description}</p>  
           
          
     
            
          </div>
        
          <div className="d-flex">
          <select  defaultValue="" className="form-control form-control-sm" onChange={(e)=>{handleChange(behave.id,'rating',e.target.value) }}>
            <option hidden value="">Please Choose Indicators based on Demonstration</option>
            <option value={1}>1 Rarely Demonstrate</option>
              <option value={2}>2 Sometimes Demonstrate</option>
              <option value={3}>3 Most of the time Demonstrate</option>
              <option value={4}>4 Consistently Demonstrate</option>
              <option value={5}>5 Role Model</option>              
            </select>
       
           
          
     
            
          </div>
        
          </div>



          ) }
           </div>
          
                                
                                      
                                       </div>

                               
                      
     
          </div>
          
          <div className='col-md-6'>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={add}>Submit</button>
              </div>
            
          </div>
          
 </div>

 
   

  </section></div>

<Footer/>
</div>
  )
}



export default CoreBehavior