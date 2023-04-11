import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Cart from "./Cart"
import Address from './Address/Address';
import PaymentSection from './PaymentSection/PaymentSection';
import './checkout.css';
const promise = loadStripe('pk_test_51MvgfMSD5yny1Mhi4C60DPyPX2nQJYcWu21SxBUURAMycPH0ygGlCiuGGtg5ds3WMpsLwlWSBp8KuuaYWZdXiHHZ00CUia3iN8')

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState({});

  const handleStep = (index) => {
    setStep(index);
  }

  

  const menuMappings = {
    0: <Cart setStep={setStep} />,
    1: <Address address={address} setAddress={setAddress}/>,
    2: <Elements stripe={promise}><PaymentSection /></Elements>,
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