import './Header.css';
import { Navbar, Container, Nav,} from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body" style= {{height: '80px'}}>
      <Container className="position-relative">

        <a className="navbar-brand" href='#'>
            <img src='../../public/IconMain.png' width='80' height='80' alt=""></img>
        </a>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="position-absolute start-50 translate-middle-x text-uppercase">
            <Nav.Link className='text-uppercase' href="#">Pagrindinis</Nav.Link>
            <Nav.Link className='text-uppercase' href="#registration">Registracija</Nav.Link>
            <Nav.Link className='text-uppercase' href="#contact">Kontaktai</Nav.Link>
            <Nav.Link className='text-uppercase' href="#aboutus">Apie Mus</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
