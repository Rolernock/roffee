import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <h2 className='fw-bold'> ROLERCOFFEE</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='ms-auto text-center'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/testimony'>
                Testimonials
              </Nav.Link>
              <Nav.Link as={NavLink} to='/gallery'>
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to='/services'>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to='/contact'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
