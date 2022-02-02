import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: '30vh'})}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-shadow: 0 0 5px #000;
`;

const Button = styled.button`
  border:none;
  padding: 10px;
  color: #aaa;
  font-weight: 700;
  cursor: pointer;

`;

const Category = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`} >
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default Category
