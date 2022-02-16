import {useState} from 'react';
import { Add, Remove } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_KEY;


const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: '10px'})}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 20px;
`;
const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 border: ${props=>props.type==='filled' ? 'none' : '1px solid #aaa'};
 background: ${props=>props.type==='filled' ? 'black' : 'transparent'};
 color: ${props=>props.type==='filled' && 'white'};
`;
const TopTexts = styled.div`
  ${mobile({display: 'none'})}
`
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 5px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column'})}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  ${mobile({flexDirection: 'column'})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({width: '150px'})}
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color}
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({marginBottom: '10px'})}
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: '5px 15px'})}
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  ${mobile({marginBottom: '10px'})}
`;

const Hr = styled.hr`
  background-color: #ccc;
  border: none;
  height: 1px;
  margin: 0 5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  padding: 12px;
  min-height: 50vh;
`;

const SummaryTitle = styled.h2`
  text-align: center;
  font-weight:200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==='total' && 500};
  font-size: ${props=>props.type==='total' && '1.2rem'};
`;
const SummaryItemText = styled.span`
 
`;
const SummaryItemPrice = styled.span`
`;
const SummaryButton = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover{
    opacity: 0.9;
  }
`;

const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate=useNavigate();
  const onToken = (token) =>{
    setStripeToken(token);
  }
console.log(stripeToken);
 useEffect(()=>{
   const makeRequest = async () => {
     try {
      const res = await userRequest.post('/checkout/payment', {
        tokenId: stripeToken.id,
        amount: cart.total*100,
      });
      navigate('/success')
     } catch (error) {
       console.log(error)
     }
   }
   stripeToken && makeRequest();
 }, [stripeToken])

  const cart = useSelector(state=>state.cartReducer)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR PRODUCTS</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping cart(3)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>

          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product=> (
              <Product>
              <ProductDetail>
                <Image src={product.image}/>
                <Details>
                  <ProductName><b>Product:</b>{product.title}</ProductName>
                  <ProductId><b>ID:</b>{product._id}</ProductId>
                  <ProductColor color= {product.color} />
                  <ProductSize><b>Size:</b>{product.size}</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
              </Product>
            ))}
          
            
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type='total'>
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Amazing"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jsiy8u7dHV9q38HmtGdXQvhGkRrj6IcR9g&usqp=CAU"
              billingAddress
              shippingAddress
              description={`Total amount is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={STRIPE_PUBLISHABLE_KEY} 
            >
            <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
