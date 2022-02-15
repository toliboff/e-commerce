import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
   const getProducts =async () => {
    try{
      const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : 'http://localhost:5000/api/products');
      setProducts(res.data)
      console.log("Product:", res.data);
    } catch (error){
      console.log(error);
    }
   }

   getProducts();
  }, [cat])

  useEffect(()=>{
    cat && setFilteredProducts(products.filter((product) => Object.entries(filters).every(([key, value]) => product[key].includes(value))))
  }, [products, cat, filters]);
  

  return (
    <Container>
      {
        cat  
        ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
        : products.map((item) => <Product key={item.id} item={item} />)
      }
    </Container>
  )
}

export default Products
