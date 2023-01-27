import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'


function Ratings (){
  const nav = useNavigate()
  const [error,setError]=useState([]);
 
 const [data,setData]=useState([]);
 const retrieveobj = async () => {
  
     const result =await axios.get(`http://localhost:8000/api/objectlist`
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

 


function add(e){
const fullquality = Object.values(data).every(x => (x.quality !== null && x.quality !== 0
  && x.quality !== " "));
  const fullEfficiency = Object.values(data).every(x => (x.efficiency !== null && x.efficiency !== 0
    && x.efficiency !== " "));
    const fullTimelines = Object.values(data).every(x => (x.timelines !== null && x.timelines !== 0
      && x.timelines !== " "));
 if(fullquality&&fullEfficiency&&fullTimelines){
  getAverageAge()

 console.log(data)
 }else{
let error="Please fill all the forms";
setError(error)
 }
   }
   const handleChange = (id,chos,val) => {
    let num =parseInt(val)
    let copydata=data;
    copydata.find((i)=>i.id===id)[chos]=num
  setData(data)


  
 
   }

   const getAverageAge = () => {
    let sum = 0
   
    let copydata=data;
    for (let i = 0; i < data.length; i++) {
      copydata.find((z)=>z.id===data[i].id)['average']=sum= (data[i].quality + data[i].efficiency + data[i].timeliness) /15
      setData(data)
      console.log(data.length,data[i].quality,data[i].efficiency,data[i].timeliness,sum)
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
          <h1>Rating Form</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Tasks(s)</a></li>
            <li className="breadcrumb-item active">Start Ratings</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section className="content">
    <div className="container-fluid">
      <div className="row ">
      
        <div className="col-md-6">
       
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">phase objectives</h3>
            </div>
           
       
              {error}
              <div className="card-body">
             
          
                

                         
                            
                            
              {data.map((obj,i) => 
                             
            <div className="row">

  
            <div className="col-sm-6">
        
      
            <li key={i}>{obj.id},{obj.name}</li>
         
        </div>
        <div className="col-sm-6">
          <div className="d-flex align-items-center">
          
            <select  defaultValue="" className="form-control form-control-sm" onChange={(e)=>{handleChange(obj.id,'quality',e.target.value) }}  required>
            <option hidden value="">Quality</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          
            <select  defaultValue="" className="form-control form-control-sm" onChange={(e)=>{handleChange(obj.id,'efficiency',e.target.value)}}  required>
            <option hidden  value="">Efficiency</option>
            <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <select defaultValue="" className="form-control form-control-sm" onChange={(e)=>{handleChange(obj.id,'timeliness',e.target.value)}}  required >
            <option hidden  value="">Timelines</option>
             <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            
          </div>
       
          </div>
         
          
   
                                </div>
                                
               )}
                                
                                       </div>

                               
                      
     
           
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={add} >Submit</button>
              </div>
            
          </div>
 </div>
  {/* general form elements disabled */}
<div className="card card-warning">
  <div className="card-header">
    <h3 className="card-title">General Elements</h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
   
    <form>
      <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>Text</label>
            <input typ e="text" className="form-control" placeholder="Enter ..." />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Text Disabled</label>
            <input type="text" className="form-control" placeholder="Enter ..." disabled />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {/* textarea */}
          <div className="form-group">
            <label>Textarea</label>
            <textarea className="form-control" rows={3} placeholder="Enter ..." defaultValue={""} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Textarea Disabled</label>
            <textarea className="form-control" rows={3} placeholder="Enter ..." disabled defaultValue={""} />
          </div>
        </div>
      </div>
      {/* input states */}
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputSuccess"><i className="fas fa-check" /> Input with
          success</label>
        <input type="text" className="form-control is-valid" id="inputSuccess" placeholder="Enter ..." />
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputWarning"><i className="far fa-bell" /> Input with
          warning</label>
        <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Enter ..." />
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputError"><i className="far fa-times-circle" /> Input with
          error</label>
        <input type="text" className="form-control is-invalid" id="inputError" placeholder="Enter ..." />
      </div>
      <div className="row">
        <div className="col-sm-6">
          {/* checkbox */}
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Checkbox</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Checkbox checked</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" disabled />
              <label className="form-check-label">Checkbox disabled</label>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          {/* radio */}
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio1" />
              <label className="form-check-label">Radio</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio1" defaultChecked />
              <label className="form-check-label">Radio checked</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" disabled />
              <label className="form-check-label">Radio disabled</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {/* select */}
          <div className="form-group">
            <label>Select</label>
            <select className="form-control">
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Select Disabled</label>
            <select className="form-control" disabled>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {/* Select multiple*/}
          <div className="form-group">
            <label>Select Multiple</label>
            <select multiple className="form-control">
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Select Multiple Disabled</label>
            <select multiple className="form-control" disabled>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
  {/* /.card-body */}
</div>
 {/* /second form*/}
      </div>
   
    </div>

  </section></div>

<Footer/>
</div>
    
  );
  
}





export default Ratings