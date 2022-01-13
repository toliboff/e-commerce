import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h2`
  font-size: 4.5rem;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products.</Description>
        <InputContainer>
          <Input placeholder='Your email here' />
          <Button>
            <Send />
          </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
