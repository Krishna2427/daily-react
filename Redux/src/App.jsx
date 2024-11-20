import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import UpdateItem from './components/UpdateItem';
function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <h1>Sample Reudx APP</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand >CRUD</Navbar.Brand>
                  <Nav className="me-auto text-white">
                  <Nav.Link as={Link} to='/'>Items</Nav.Link>
                    <Nav.Link as={Link} to='/add'>AddItem</Nav.Link>
                    {/* <Nav.Link as ={Link} to ='update'>Update Item</Nav.Link> */}
                  </Nav>
                </Container>
              </Navbar>
            </Container>
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path='/update/:id' element={<UpdateItem/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
export default App;