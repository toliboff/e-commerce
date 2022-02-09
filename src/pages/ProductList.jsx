import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Title = styled.h2`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: '0 20px', display: 'flex', flexDirection: 'column'})};
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: '0'})}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin: '10px 0'})}
`
const Option = styled.option`
  margin: 10px;
  font-size: 1.2rem;
  line-height: 1.3rem;
`
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({...filters, [name]: value});
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
         <Filter>
           <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange = {handleChange}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange = {handleChange} >
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
         <Filter>
           <FilterText>Sort Products:</FilterText>
           <Select onChange = {(e)=>setSort(e.target.value)}>
              <Option value="newest" selected>Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (dsc)</Option>
            </Select>
          </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
       
    </Container>
  )
}

export default ProductList
