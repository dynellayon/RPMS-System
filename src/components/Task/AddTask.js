import React,{useState} from 'react'
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import axios from 'axios'
import swal from 'sweetalert'


function AddTask (props){
   const [name,setName]=useState("");
   const [employee,setEmployee]=useState("");
   const [duedate, setDuedate ]= useState( "");
   const [description, setDescription] = useState( );
   const [phase, setPhase] = useState( );


   async function add(e){
    e.preventDefault();
    
console.log(name,employee,duedate,description)
const formData =new FormData();
formData.append('name',name);
formData.append('employee',employee);
formData.append('duedate',duedate);
formData.append('phase',phase);
formData.append('description',description);

//let res = await axios.post(`http://localhost:8000/api/register`,JSON.stringify(formData));
axios({
  method: "post",
  url: "http://localhost:8000/api/addtask",
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
          <h1>Add Task</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/layout">Tasks</a></li>
            <li className="breadcrumb-item active">Add Task</li>
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
                  <label >name</label>
                  <input className="form-control"  placeholder="Enter task name" defaultValue={""} onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                                <label>Assign Employee</label>
                                <select className="form-control"  onChange={ (e) => setEmployee(e.target.value)}>
                                    <option >select</option>

                                    {props.users !==" "?
      props.users.map((users,i) => (<>
                                    <option key={i} value={users.id}>{users.name}</option>
                                   
                                    </>
                                     )): <option >No Employee</option>
                                  
                                      
                                      
                                    }
                                    
                                </select>
                                </div>
                                <div className="form-group">
                                <label>Select phase</label>
                                <select className="form-control"  onChange={ (e) => setPhase(e.target.value)}>
                                    <option >select</option>
                                    <option value={1}>Phase 1</option>
                                    <option value={2}>Phase 2</option>
                                    <option value={3}>Phase 3</option>
                                    <option value={4}>Phase 4</option>
                                    
                                    
                                </select>
                                </div>
                                {/*<!-- Date and time -->*/}
                                <div className="form-group">
                  <label >Due Date</label>
                  <input type="date"  min={new Date().toISOString().slice(0, -8)} class="form-control "  defaultValue={""} onChange={ (e) => setDuedate(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label >Description</label>
                  <textarea className="form-control" rows={3} placeholder="Please enter description.." defaultValue={""} onChange={ (e) => setDescription(e.target.value)}/>
                </div>
              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" >Submit</button>
              </div>
            </form>
          </div>
 </div>

 {/* /second form*/}
      </div>
   
    </div>

  </section></div>

<Footer/>
</div>
    
  );
  
}


  


export default AddTask