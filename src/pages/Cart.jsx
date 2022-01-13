import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
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
`;
const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 border: ${props=>props.type==='filled' ? 'none' : '1px solid #aaa'};
 background: ${props=>props.type==='filled' ? 'black' : 'transparent'};
 color: ${props=>props.type==='filled' && 'white'};
`;
const TopTexts = styled.div``
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 5px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
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
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #ccc;
  border: none;
  height: 1px;
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
            <Product>
              <ProductDetail>
                <Image src='https://images.unsplash.com/photo-1622920883841-5bf72e392d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80'/>
                <Details>
                  <ProductName><b>Product:</b>LEWIS JEANS</ProductName>
                  <ProductId><b>ID:</b>654321</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size:</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://images.unsplash.com/photo-1601903076343-ee0c1be34911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80'/>
                <Details>
                  <ProductName><b>Product:</b>LEWIS JEANS</ProductName>
                  <ProductId><b>ID:</b>654321</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size:</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 60</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 4.37</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -2.37</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type='total'>
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 62.00</SummaryItemPrice>
            </SummaryItem>

            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
