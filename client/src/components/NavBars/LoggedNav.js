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
import AddPhone from "../AddPhone/AddPhone";
import { Link } from "react-router-dom";
import Phone from "../../phonestore.jpg";
import { useDispatch } from "react-redux";
import "./navbars.css";
import "../AddPhone/addphone.css";
import { toggleFalse } from "../../JS/actions/phoneActions";

// function Header({ addNewPhone, setTextSearch }) {
function LoggedNav({ setTextSearch }) {
  const dispatch = useDispatch();

  const role = "admin";
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                  src={Phone}
                  alt="logo"
                  width="150"
                  height="60"
                  style={{ borderRadius: "5px", textAlign: "center" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav style={{ padding: "0" }}>
                <ul className="nav-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/main">Products</Link>
                  </li>
                  <li>
                    <NavDropdown
                      title="Dropdown"
                      id="offcanvasNavbarDropdown"
                      className="nav-dropdown"
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li>
                    <a href="#about">Contact</a>
                  </li>
                </ul>
              </Nav>

              <div className="searching">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setTextSearch(e.target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "60%",
                  }}
                >
                  {["New", "Reconditionned"].map((type) => (
                    <div>
                      <Form.Check type="checkbox" label={type} />
                    </div>
                  ))}
                </div>

                <Form>
                  {["Apple", "Sumsung", "Xiaomi"].map((type) => (
                    <div className="mb-3">
                      <Form.Check type="checkbox" label={type} />
                    </div>
                  ))}
                </Form>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <AddPhone />

          <Navbar.Brand href="#" style={{ color: "white" }}>
            <img src={Phone} alt="logo" width="150" height="60" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default LoggedNav;
