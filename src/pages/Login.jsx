import styled from 'styled-components';
import { mobile } from '../responsive';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { login } from '../redux/api';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),
   rgba(255,255,255,0.5)), 
   url('https://images.unsplash.com/photo-1486308510493-aa64833637bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80');
  background-position: center;
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  background-color: #fff;
  padding: 20px;
  ${mobile({width: '80%'})}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 25px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  };
  &:hover{
    opacity: 0.8;
  }
`;

const Error = styled.span`
  color: red;
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: teal;
  }
`

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, error} = useSelector((state)=> state.userReducer)
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
          <Input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          
          <Button disabled={isFetching} onClick={handleClick}>LOGIN</Button>
          {error && <Error>Something went wrong</Error>}
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
