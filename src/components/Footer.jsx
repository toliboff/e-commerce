import { Facebook, Instagram, Pinterest, Twitter, Phone, MailOutline} from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';
import cards from '../cards.png';

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  padding: 20px;
  flex: 1;
`

const Description = styled.p`
  margin: 20px 0px;

`
const SocialContainer = styled.div`
  display: flex;

`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  color: #fff;
  background-color: ${props=>props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`

const Logo = styled.h2`
  font-size: 2rem;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;

`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style:none;
  display:flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  padding: 20px;
  flex: 1;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const Payment = styled.img`
  height: 40px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AMAZING</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate, iusto sint quis nam corporis odio eligendi doloribus fugit est magnam ullam modi nostrum quibusdam, soluta consequatur totam perferendis optio vitae, voluptatum nihil eos!
        </Description>
        <SocialContainer>
          <SocialIcon color='lightblue'>
            <Facebook/>
          </SocialIcon>
          <SocialIcon color='brown'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='blue'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='red'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Black Friday</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><LocationOnIcon style={{ marginRight: '10px' }} /> 37 Gulakandoz, Sughd 735820</ContactItem>
        <ContactItem><Phone style={{ marginRight: '10px' }} /> +992 918 51 85 31</ContactItem>
        <ContactItem> <MailOutline style={{ marginRight: '10px' }}/> contact@amazing.com</ContactItem>
        <Payment src={cards} />
      </Right>
    </Container>
  )
}

export default Footer
