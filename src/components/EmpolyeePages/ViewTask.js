import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React,{ useState,useEffect }  from 'react';
import axios from 'axios';
function MyVerticallyCenteredModal(props) {
    const [data,setData]=useState([]);
    let user=JSON.parse(sessionStorage.getItem('user-info'));
    let id=user.id;

    const retrieveobj = async () => {
     
      const result =await axios.get(`http://localhost:8000/api/emptask/${id}`
        ,
        {
          headers: { "Content-Type": "application/json" },
         
        }
      );

    
      setData(result.data.emptask);
      
    
    
         
        }; 
    
    useEffect(()=>{
    
     
      retrieveobj();
    
     },[])
    console.log(data)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="card">
        
  <div className="card-header">
    <h3 className="card-title">
      <i className="fas fa-text-width" />
      Description
    </h3>
  </div>

  <div className="card-body">
    <dl>
      <dt>Assign to</dt>
      <dd>{user.name}</dd>


       {data.map(data=> (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={data.id}>
          <dt>task</dt>
          <dd>{data.task}</dd>
          <dt>duedate</dt>
          <dd>{data.duedate}</dd>
          <dt>Status</dt>
          {data.status === null || data.status ===" " ?<dd>No progress</dd>:data.status ===2 ?<dd>On progress</dd>:data.status ===3 ?<dd>Complete</dd>:null
       }
          <dt>Task description</dt>
          <dd>{data.description}</dd>
          <dt>task created date</dt>
          <dd>{data.created_at}</dd>
        </React.Fragment>
      ))}
    </dl>
  </div>


</div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ViewTask() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>

      <a className="dropdown-item"onClick={() => setModalShow(true)}>View Task</a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default ViewTask