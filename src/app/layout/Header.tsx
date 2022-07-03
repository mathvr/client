import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export default function Header(){
    return(
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Recipe App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="recipe-app-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown title="Ingredient" id="ingredient">
                                <NavDropdown.Item href="/ingredient">Add Ingredient</NavDropdown.Item>
                                <NavDropdown.Item href="/">Search Ingredient</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Recipe" id="recipe">
                                <NavDropdown.Item href="/addrecipe">Add Recipe</NavDropdown.Item>
                                <NavDropdown.Item href="/searchrecipe">Search Recipe</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/groceryList">Grocery List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

