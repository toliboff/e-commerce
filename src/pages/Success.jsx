import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { clearCart } from '../redux/cartRedux';
const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(clearCart())
  }, [])
  
  setTimeout(()=>{
    navigate('/');
  }, 2000)
  return <div>
    <h1>Success</h1>
  </div>;
};

export default Success;
