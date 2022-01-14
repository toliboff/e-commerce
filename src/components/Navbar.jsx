import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCart } from '@mui/icons-material';
import  { Badge } from '@mui/material';
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({height: '50px'})}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  ${mobile({padding: '10px 3px'})}
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  margin-right: 10px;
  ${mobile({display: 'none'})}
`

const SearchContainer = styled.div`
  border: 0.5px solid #ccc;
  display: flex;
  align-items: center;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({width: '50px'})}
`

const Center = styled.div`
  flex:1;
  ${mobile({flex: '0'})}
`

const Logo = styled.h1`
  font-weight: 900;
  text-align: center;
  ${mobile({fontSize: '24px'})}
`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: 'center', flex: 2})}

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fonctSize: '12px', marginLeft:'10px'})}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder='Search' />
          <Search style={{color: '#ccc', fontSize:16}}/>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>AMAZING</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar
