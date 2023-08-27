import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

  export const SideMenu: React.FC = () => {
  return (
    <Navbar expand="lg" className='me-auto' style={{'backgroundColor': '#e9ecef'}} >
      <Container fluid>
        <Nav
          className="me-auto my-2 my-lg-0 flex-column align-items-center"
          style={{ minHeight: '100vh' }}
        >
          <Nav.Link href="#/orders">Orders</Nav.Link>
          <Nav.Link href="#/products">Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
