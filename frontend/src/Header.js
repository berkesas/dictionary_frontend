import Icon from './Icon';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/"><Icon /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><Link to='/' className='navlink'>Home</Link></Nav.Link>
              <Nav.Link href="#menu1"><Link to='/about' className='navlink'>About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;