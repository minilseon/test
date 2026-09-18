import './App.css';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from './pages/productData';
import { addItem } from './pages/store';
import { useDispatch } from 'react-redux';

import About from './pages/About';
import Details from './pages/Details';
import Cart from './Cart';

function App() {

  const navigate = useNavigate();
  const [bests] = useState(data);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/test')}} >SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/test')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/info')}}>Information</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/loca')}}>Location</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={

          <Container className='wrap'>
            <div className='visual_main'>
              <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt="" />
            </div>

            <Row className='best_box'>
              {
                bests.map((best, index) => {
                  return (
                    <Col className='best_thumnail'>
                      <Link to={`details/${index}`}>
                        <div className='best_img'>
                          <img src={best.image} alt="베스트 상품이미지" style={{width:260}} />
                        </div>
                        <h4>{best.title}</h4>
                        <p>{best.price}</p>
                        <p>{best.desc}</p>
                      </Link>

                      <button onClick={()=>{dispatch(addItem({id: best.id, title:best.title, count:1}))}}
                      >장바구니</button>

                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        }       
        />

        <Route path='about' element={<About />}>
          <Route path='info' element={<div>Information</div>}/>
          <Route path='loca' element={<div>Location</div>}/>
        </Route>
        <Route path='details/:id' element={<Details bests={bests} />} />
        <Route path='cart' element={<Cart />} />
      </Routes>      
      
    </div>
  );
}

export default App;
