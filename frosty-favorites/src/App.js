import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './index.css';
import mountain from './images/snowed-mountains.png';

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import Home from './pages/Home';
import Reviews from './pages/Reviews';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar id="navBar" collapseOnSelect expand="lg">
          <Container fluid={true}>
            <Navbar.Brand className="navBrand" as={Link} to="/">
              <span id="brand">FrostyFavorites</span>
              <img id="brandLogo" src={mountain} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto" activeKey="/">
                <Nav.Item>
                  <Nav.Link id="navLink" eventKey="1" as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="navLink" eventKey="2" as={Link} to="/reviews">
                    Reviews
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
