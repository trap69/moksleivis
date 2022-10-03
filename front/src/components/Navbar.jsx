import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login2 from './Login2';

function TextLinkExample() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            
          <Navbar.Text>
          <Login2/>
    
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;