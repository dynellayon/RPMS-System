import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Header() {
  const nav = useNavigate();
  let user=JSON.parse(sessionStorage.getItem('user-info'));
function logout(){
  sessionStorage.clear();
  nav("/");
}
  return (
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/header">Deped</Navbar.Brand>
          <Nav className="me-auto">
            {user.role_id==="1"?

           <>
           <Nav.Link href="/userlist">Employee</Nav.Link>
            <Nav.Link href="/evaluators" >Evaluators</Nav.Link>
            </>
            :null}
  { user.role_id==="2" 
            
           ? <Nav.Link href="/EvalHeaders">task evaluators</Nav.Link>
            :null
            }
          {  user.role_id==="3"
            
           ? <Nav.Link href="/HeadersEmployee" >task employee</Nav.Link>
            :null
         
              }
                 
          </Nav>
          <Nav>
          <NavDropdown title={user && user.name} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar> 
     
      
      
    
  );
}

export default Header;