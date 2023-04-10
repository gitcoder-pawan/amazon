import React, { useState } from 'react'
import Cart from "./Cart"
import Address from './Address/Address';
import PaymentSection from './PaymentSection/PaymentSection';
import './checkout.css';
const Checkout = () => {
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState({})

  const handleStep = (index) => {
    setStep(index);
  }

  const handleAddress = (e) => {
    setAddress(p => ({ ...p, [e.target.name]: e.trget.value }));
  }

  const menuMappings = {
    0: <Cart setStep={setStep} />,
    1: <Address address={address} handleAddress={handleAddress}/>,
    2: <PaymentSection />,
  }

  return (
    <div className="checkout">
      <div className="checkout__heading">checkout page</div>
      <div className="checkout__stepper">
        {['Cart', 'Address', 'Payment'].map((itm, index) => {
          return <div className={`checkout__stepperTab ${index === step ? 'checkout__stepperTabActive' : ''}`} onClick={() => { handleStep(index) }}>{itm}</div>
        })}
      </div>
      <div className="checkout__menu">
        {menuMappings[step]}
      </div>
    </div>
  )
}

export default Checkout