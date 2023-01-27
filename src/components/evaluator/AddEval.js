import React,{useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Heads from '../Heads'
import Menu from '../Menu'
import Footer from '../Footer'
import swal from 'sweetalert';

function AddEval (){
 
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [image,setImage]=useState();
   const [position,setPosition]=useState("");
   const [department,setDepartment]=useState("");
   const [password,setPassword]=useState("");
   const imageRef = useRef(null);

   function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

   async function addemp(e){
    e.preventDefault();
    
    console.log(name,email,image,position,password)
    const formData =new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('image',image);
    formData.append('position',position);
    formData.append('password',password);
    formData.append('department',department);
    
    //let res = await axios.post(`http://localhost:8000/api/register`,JSON.stringify(formData));
    axios({
      method: "post",
      url: "http://localhost:8000/api/regeval",
      data: formData,
      headers: {
       'Content-Type': 'multipart/form-data'
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
          <h1>General Form</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/layout">Employee</a></li>
            <li className="breadcrumb-item active">Add Employee</li>
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
              <h3 className="card-title">Quick Example</h3>
            </div>
           
            <form encType="multipart/form-data" onSubmit={addemp} >
              
              <div className="card-body">
              <div className="form-group">
                  <label >Name</label>
                  <input type="text" className="form-control"  placeholder="Name"   onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label >Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email"   onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input type="password" className="form-control"  placeholder="Password"  onChange={ (e) => setPassword(e.target.value)} />
                </div>
                
                <div className="form-group">
                  <label>Image</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" onChange={ (e) => {setImage(e.target.files[0]);  uploader(e);}}/>
                   
                      <label className="custom-file-label" >Choose file(optional)</label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">Upload</span>
                    </div>
                  </div>
                </div>
                {result !== "" ?
                <div className="form-group">
                  <div className="input-group">
                    <div className="custom-file">
          
                     <img class="img-size-50 mr-3 img-circle" ref={imageRef} src={result} alt="" />
                      
                    </div>
                    
                  </div>
                </div>  :null}
                <div className="form-group">
                                <label>Select Position</label>
                                <select className="form-control"  onChange={ (e) => setPosition(e.target.value)}>
                                    <option value={"1"}>option 1</option>
                                    
                                    
                                </select>
                                </div>
                                <div className="form-group">
                                <label>Select department</label>
                                <select className="form-control"  onChange={ (e) => setDepartment(e.target.value)}>
                                    <option value={"1"}>option 1</option>
                                    
                                    
                                </select>
                                </div>
                       
              </div>
           
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" >Submit</button>
              </div>
            </form>
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


export default AddEval;
