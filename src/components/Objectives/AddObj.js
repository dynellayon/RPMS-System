import React,{useState} from 'react'

import axios from "axios";
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import swal from 'sweetalert';

function AddObj (){
   const [name,setName]=useState("");
   const [phase,setPhase]=useState("");
   const [kra,setKra]=useState("");
   const [weight,setWeight]=useState("");
   const [rank,setRank]=useState("");
   const [mov,setMov]=useState("");

   async function add(e){
    e.preventDefault();
    
console.log(name,phase)
    const formData =new FormData();
    formData.append('name',name);
    formData.append('weight',weight);
    formData.append('kra',kra);
    formData.append('rank',rank);
    formData.append('mov',mov);

    axios({
      method: "post",
      url: "http://localhost:8000/api/addobject",
      data: formData,
      headers: {
       'Content-Type': 'json/application'
     }
   }).then(res => {
     console.log("REs", res)
     swal("Good job!", res.data.message, "success");
   })
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
          <h1>Add Objectives</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/layout">Objectives</a></li>
            <li className="breadcrumb-item active">Add Objectives</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section className="content">
    <div className="container-fluid">
      <div className="row">
      
        <div className="col-md-6">
       
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add Form</h3>
            </div>
           
            <form encType="multipart/form-data" onSubmit={add} >
              
              <div className="card-body">
              <div className="form-group">
                  <label >Objective</label>
                  <textarea className="form-control"  placeholder="Enter objective" defaultValue={""} onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label >Means of Verification</label>
                  <textarea className="form-control"  placeholder="Enter objective" defaultValue={""} onChange={ (e) => setMov(e.target.value)}/>
                </div>
                                <div className="form-group">
                                <label>Select kra</label>
                                <select className="form-control"  onChange={ (e) => setKra(e.target.value)}>
                                    <option >select</option>
                                    <option value={1}>kra 1</option>
                                    <option value={2}>kra 2</option>
                                    <option value={3}>kra 3</option>
                                    <option value={4}>kra 4</option>
                                    <option value={5}>Plus Factor</option>
                                    
                                    
                                </select>
                                </div>
                                <div className="form-group">
                                <label>Select for</label>
                                <select className="form-control"  onChange={ (e) => setRank(e.target.value)}>
                                    <option >select</option>
                                    <option value={1}>Professional (Teacher I-IV)</option>
                                    <option value={2}>High Professional(Masters I-IV) </option>
                                 
                                    
                                </select>
                                </div>
                                <div className="form-group">
                  <label >Weight</label>
                  <input type="number" className="form-control"  placeholder="Weight"  onChange={ (e) => setWeight(e.target.value)} />
                </div>

              </div>
              

             
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" >Submit</button>
              </div>
            </form>
          </div>
 </div>


      </div>
   
    </div>

  </section></div>

<Footer/>
</div>
    
  );
  
}


  



export default AddObj