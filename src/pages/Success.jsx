import React, {useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { clearCart } from '../redux/cartRedux';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SuccessHeader = styled.h1`
  font-weight: 100;
  margin: 25px 0;
  
`
const SuccessMessage = styled.p`
  font-weight: 200;

`

const Button = styled.button`
  margin-top: 25px;
  background-color: teal;
  color: white;
  border: none;
  padding: 15px 25px;
  cursor: pointer;
`
const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(clearCart())
  }, [])
  
  // setTimeout(()=>{
  //   navigate('/');
  // }, 2000)
  return <>
  <Navbar />
  <Container>
    
    <CheckCircleOutlineIcon sx={{color: 'teal', fontSize: '75px'}}/>
    <SuccessHeader>THANK YOU FOR YOUR PURCHASE</SuccessHeader>

    <SuccessMessage>Your order has been processed.</SuccessMessage>
    <Link to='/'>
      <Button>Continue Shopping</Button>
    </Link>

  </Container>;
  <Footer/>
  </>
 
};

export default Success;
