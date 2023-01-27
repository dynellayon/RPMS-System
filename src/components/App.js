import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddUser from "./AddUser";
import Header from './Header';
import Userlist from './Userlist'
import EditUser from './EditUser';
import axios from 'axios';
import Login from './Login';
import PrivateRoutes from './PrivateRoutes'
import AddEval from './evaluator/AddEval';
import EvalHeaders from './evaluator/EvalHeaders';
import HeadersEmployee from './employee/HeadersEmployee';
import Sidebar from './Sidebar';
import Layout from './Layout';
import Objectives from './Objectives/Objectives';
import AddObj from './Objectives/AddObj';
import Tasklist from './Task/Tasklist';
import AddTask from './Task/AddTask';
import Home from './Home';
import Employeelogin from './Employeelogin';
import Employeetasks from './EmpolyeePages/Employeetasks';
import AddProgress from './EmpolyeePages/AddProgress';
import ViewTask from './EvaluatorPages/ViewTask';
import Ratings from './EvaluatorPages/Ratings';
import EmployeeEval from './EmpolyeePages/EmployeeEval';
import CoreBehavior from './EmpolyeePages/CoreBehavior';
import BehaviorFeed from './evaluator/BehaviorFeed';
function App(){

  const [users,setUsers]=useState( []);
  const [evaluators,setEvaluators]=useState( []);
  const [objects,setObjects]=useState([ ]);
  const [position,setPosition]=useState([ ]);

  const retrieveUsers = async () => {
    const response = await axios.get(`http://localhost:8000/api/userlists`);
    return response.data;

  };
  const retrieveEval = async () => {
    const response = await axios.get(`http://localhost:8000/api/eval`);
    return response.data;

  }; 
  const retrievepos = async () => {
    const response = await axios.get(`http://localhost:8000/api/positionlist`);
    return response.data;

  }; 

  
  useEffect(()  =>{
   
  const getallusers=async () =>{
      const allusers= await retrieveUsers();
      if(allusers){ setUsers(allusers);}
      
 
    }  
   const getalleval=async () =>{
    const alleval= await retrieveEval();
      if(alleval) {setEvaluators(alleval);}
    } 
    const getallpos=async () =>{
      const allpos= await retrievepos();
        if(allpos) {setPosition(allpos);}
      } 
    getallusers();
    getalleval();
    getallpos();
    },[]);


    useEffect(()  =>{
   
      const retrieveobj = async () => {
        const response = await axios.get(`http://localhost:8000/api/objectlist`);
        return response.data;
    
      }; 
      const getallobj=async () =>{
        const allobj= await retrieveobj();
          if(allobj) {setObjects(allobj);}
        } 
      
            
        
          getallobj();
        
        },[]);
     
   

      
    
  
  return (
  <div>
    <Router>
   <Routes>
  
   <Route exact path="/" element={<Home />}/>
   <Route exact path="/Evaluatorslogin" element={<Login />}/>
   <Route exact path="/Employeelogin" element={<Employeelogin />}/>
   <Route element={<PrivateRoutes />}>
    
    
    <Route exact path="/header" element={<Header />}/>
    <Route path="/userlist" element={<Userlist users={users}  />}/>
    <Route path="/edituser/:id" element={<EditUser />}/>
    <Route path="/HeadersEmployee" element={<HeadersEmployee />}/>
{/*Admin Route*/}
   <Route path="/layout" element={<Layout users={users} retrieveUsers={retrieveUsers}  />}/>
   <Route path="/AddUser" element={<AddUser evaluators={evaluators} position={position}/>}/>
   <Route path="/sidebar" element={<Sidebar />}/>
   <Route path="/EvalHeaders" element={<EvalHeaders evaluators={evaluators}/>}/>
   <Route path="/AddEval" element={<AddEval />}/>
   <Route path="/Objectives" element={<Objectives objects={objects}/>}/>
   <Route path="/AddObj" element={<AddObj />}/>
   <Route path="/Tasklist" element={<Tasklist/>}/>
   <Route path="/AddTask" element={<AddTask users={users}/>}/>
   <Route exact path="/Sidebar" element={<Sidebar />}/>
  {/*Admin Route*/}
{/*Evaluator Route*/}
<Route exact path="/ViewTask" element={<ViewTask />}/>
<Route path="/Ratings" element={<Ratings objects={objects}/>}/>
<Route path="/BehaviorFeed/:rank/:taskid/:phaseid" element={<BehaviorFeed/>}/>
{/*Evaluator Route*/}

{/*Employee Route*/}

<Route exact path="/EmployeeTasks" element={<Employeetasks />}/>
<Route path="/EmployeeEval/:phaseid/:taskid" element={<EmployeeEval />}/>
<Route path="/CoreBehavior" element={<CoreBehavior />}/>
<Route path='/AddProgress/:taskid' element={<AddProgress />}/>
{/*Employee Route*/}

    </Route>
    </Routes>
    </Router>
  
    </div>
  
  );

  }


export default App;
