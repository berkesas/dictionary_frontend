import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home"><Link to='/' className='navlink'>Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1"><Link to='/about' className='navlink'>About</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;