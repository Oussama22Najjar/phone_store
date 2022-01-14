import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Phone from "../../phonestore.jpg";
import "./navbars.css";

function GuestNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <div className="btns">
            <Button variant="secondary" size="lg" active>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Log in
              </Link>{" "}
            </Button>

            <Button variant="secondary" size="lg" active>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </Button>
          </div>

          <Navbar.Brand href="#" style={{ color: "white" }}>
            <img src={Phone} alt="logo" width="150" height="60" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default GuestNav;
