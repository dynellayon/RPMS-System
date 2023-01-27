import React,{useState} from 'react'
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
import FileUpload from './FileUpload'
import FileList from './FileList'
function AddProgress (){
  let user=JSON.parse(sessionStorage.getItem('user-info'));
   const [files,setFiles]=useState([]);
   const [check,setCheck]=useState(2);
   const { taskid } = useParams();

    
   console.log(taskid, user.id)
   console.log(files)
   



   /*async function add(e){
    e.preventDefault();
    
    console.log(file)
   const formData =new FormData();
    formData.append('name',name);

   
   
    axios({
      method: "post",
      url: "http://localhost:8000/api/register",
      data: formData,
      headers: {
       'Content-Type': 'multipart/form-data'
     }
   }).then(res => {
     console.log("REs", res)
     swal("Good job!", res.data.message, "success");
   })
   
   }
   */
   const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  return (
   <div>
       <Heads/>
      <Menu/>
       <div className="content-wrapper">
 
{/* Main content */}
<section className="content">

    <div className="col-md-12">
 
      <div className="card ">
        <div className="card-header">
          <h3 className="card-title">
            Submit task
          </h3>
        </div>
        <div className="row">
       <div className="col-md-6 ">
  <div className="card card-default h-100">
    <div className="card-header">
      <h3 className="card-title">
      <i className="nav-icon far fa-plus-square"/>
        Add Files
      </h3>
    </div>
    {/* /.card-header */}
    <div className="card-body p-4 d-flex justify-content-center">
    <FileUpload  files={files} setFiles={setFiles}
        removeFile={removeFile} taskid={taskid} check={check}/>
     
      
    </div>
    {/* /.card-body */}
  </div>
  
  {/* /.card */}
  

</div>


<FileList files={files} removeFile={removeFile}/>

</div>
<div class="form-check">
                    <input type="checkbox" class="form-check-input" defaultValue={2} onChange={ () => setCheck(3)}/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
</div> 


       
      </div>
   
   
    {/* /.col*/}


  {/* ./row */}
</section>
{/* /.content */}
</div>

<Footer/>
</div>
    
  );
  
}


  



export default AddProgress