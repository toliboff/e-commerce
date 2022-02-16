import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection: 'column', padding: '10px'})}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: '40vh'})}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({padding: '10px'})};
`
const Title = styled.h2`
  font-weight: 200;
  font-size: 2rem;
`
const Description = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({width: '100%'})}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  font-size: 1.2rem;
  padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({width: '100%'})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &: hover{
    background-color: teal;
    color: #fff;
  }
`
const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const dispatch = useDispatch();
  useEffect(()=>{
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${productId}`);
        setProduct(res.data); 
      } catch(error) {
        console.log(error);
      }
    }
    getProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if(type === 'dec') {
      quantity > 1 && setQuantity(quantity-1)
    } else {
       setQuantity(quantity+1);
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...product, quantity, color, size}));
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src = {product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((clr) => <FilterColor color = {clr} key={clr} onClick={()=>setColor(clr)}/>)}
             
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize onChange={(event)=>setSize(event.target.value)}>
                {product.size?.map((sz) => (<FilterSizeOption key={sz} >{sz}</FilterSizeOption>))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{cursor: 'pointer'}} onClick={()=>handleQuantity('dec')}/>
              <Amount>{quantity}</Amount>
              <Add style={{cursor: 'pointer'}} onClick={()=>handleQuantity('inc')}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
