import React, { useState } from 'react'
import Cart from './Cart/Cart';
import Address from './Address/Address';
import PaymentSection from './PaymentSection/PaymentSection';
import './checkout.css';
const Checkout = () => {
  const [step, setStep] = useState(0);
  const handleStep = (index)=>{
    setStep(index);
  }
  const menuMappings = {
    0:<Cart/>,
    1:<Address/>,
    2: <PaymentSection/>,
  }
  return (
    <div className="checkout">
      <div className="checkout__heading">checkout page</div>
      <div className="checkout__stepper">
        {['Cart', 'Address', 'Payment Section'].map((itm, index)=>{
          return <div className={`checkout__stepperTab ${index===step ? 'checkout__stepperTabActive': ''}`} onClick={()=>{handleStep(index)}}>{itm}</div>
        })}
      </div>
      <div className="checkout__menu">
        {menuMappings[step]}
      </div>
    </div>
  )
}

export default Checkout