import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to ="/">
            <Navbar.Brand>HOME</Navbar.Brand>
            </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
  );
}

export default Header;