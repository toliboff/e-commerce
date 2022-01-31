import { useState, useEffect } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

 const KEY = "pk_test_51KNy4ILGkM0FHNqs9CsmvTpDBxdnvLts5331kBh6Ujszk4AKnWsdpUKgQLB4OmtITUYKFWTEl26YETioAZmIRu7C00sAphs6EB";


const Pay = () => {
 const [stripeToken, setStripeToken] = useState(null);

  const onToken = token => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = await axios.post('http://localhost:5000/api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 3000
        });
        console.log(res.data);
      } catch (err){
        console.log(err)
      }
    }
    stripeToken && makeRequest();
  }, [stripeToken]);

  return <div>
    <h1>Pay</h1>
    <StripeCheckout
      name="E-Commerce"
      image="https://drive.google.com/file/d/1N3DGtx3Fy7vei3C_PDF5FS5NlTMld_I-/view?usp=sharing"
      billingAddress
      shippingAddress
      description="Your total is $30"
      amount={3000}
      token={onToken}
      stripeKey={KEY} 
    >
      <button
        style={{
          padding: '5px 10px',
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
        }}
      >Pay Now</button>
    </StripeCheckout>
  </div>;
};

export default Pay;
