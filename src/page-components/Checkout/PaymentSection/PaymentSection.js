import React, {useState} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './paymentSection.css';
const PaymentSection = () => {
  const [cartDetails, setCardDetails] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  console.log("cartDetails", cartDetails);
  return (
    <div className="payment">
      <div className="payment__cardElement"><CardElement onChange={(e)=>setCardDetails({[e.target.name]:e.target.value})}/></div>
    </div>
  )
}

export default PaymentSection