import React,{ Component,useState } from 'react'
import axios from "axios";
import {Link,useParams} from 'react-router-dom'
import { Form,Button,FormGroup, } from 'react-bootstrap';
import swal from 'sweetalert';
function withRouter(Component) {
    function ComponentWithRouter(props) {
      let params = useParams();
      
      return <Component {...props} params={params} />
    }
    return ComponentWithRouter
  }
class EditUser extends React.Component{

    state={
        name: "",
        email: "",
        

    }; 
    
  async componentDidMount(){
        let { id } = this.props.params;
        
        const res = await axios.get(`http://localhost:8000/api/users/${id}`);
        console.log(res)
        if(!res){
           console.log("error")
        }else{
            this.setState({ name: res.data.name,
                email: res.data.email,
            });
          
        }
       
    }
 
    update = async (e) => {
      let { id } = this.props.params;
      e.preventDefault();
      if(this.state.name ==="" || this.state.email ==="" ){
          alert("All the fields are mandatory!")
          return;
      }
      const res = await axios.put(`http://localhost:8000/api/update/${id}`,this.state);
      if(res.data.status === 200){
          swal({
            title: "Good job!",
            text: res.data.message,
            icon: "success",
            button: "ok",
          });
   
  }
}
   
    render() {
  return (
   
    <div>
      <div className='container'>
                
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                        <div className='card-header'>
                         <h4> Edit User</h4>
                         <Link to="/userlist">back</Link>
                        </div>
                        <div className='card-body'>
                            
        <form onSubmit={this.update} >
            <div className='form-group mb-3'>
        <label>Name</label>
       <input type="text"  placeholder="name" className='form-control' value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}/>
       </div>
       <div className='form-group mb-3'>
       <label>Email</label>
       <input type="text"  placeholder="email" className='form-control' value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}/>
       </div>
       <Button variant="primary" type='submit'>Edit</Button>
       </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
   

   
    
  );
  
}
}

const HOCTaskDetail = withRouter(EditUser);
export default HOCTaskDetail;
