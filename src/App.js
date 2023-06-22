// import logo from './logo.svg';
import './App.css';
import { Container, Navbar, Nav, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import About from './pages/About';
import data from './pages/productdata'
import Details from './pages/Details';
import { useState } from 'react';
import Cart from './pages/Cart';
import { useDispatch} from 'react-redux';
import { addItem } from './pages/store';


function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)
  // const state = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className="App">

       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => navigate('/about/info')}>Infomation</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/test'  element={

        <Container>
          <img src={process.env.PUBLIC_URL + './images/visual_main_01.jpg'} alt="" />
          <h2>Best 상품</h2>
          <Row>
            {
              bests.map((best, index) => {
                return (
                  <Col>
                    <Link to={`details/${index}`}>
                      <img src={best.image} alt="" style={{width: 280}} />
                      <h4>{best.title}</h4>
                      <p>{best.desc}</p>
                      <p>{best.price}</p>
                    </Link>
                    <button onClick={() => {
                      dispatch(addItem({id: best.id, title: best.title, count: 1}))
                    }}>장바구니</button>
                  </Col>
                )
              })
            }
          </Row>
        </Container>

        } />
        <Route path='about' element={<About />}>
          <Route path='info' element={<div>Infomation</div>}/>
          <Route path='loca' element={<div>Location</div>}/>
        </Route>
        <Route path='details/:id' element={<Details bests={bests} />} />
        <Route path='cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
