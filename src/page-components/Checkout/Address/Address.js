import React, { useState, useEffect } from 'react'
import addressControls from './addressControls';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './address.css';
const Address = ({ address, setAddress }) => {
  const accordionOpenCondition = Object.values(address).every((itm) => !itm);
  console.log("accordionOpenCondition", accordionOpenCondition);
  const [addressInput, setAddressInput] = useState({
    full_name: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    pin_code: '',
    country: '',
    phone_number: '',
  })
  const [accordionAddress, setAccordionAddress] = useState({
    delivery: !accordionOpenCondition,
    new_address: accordionOpenCondition,
  })

  const handleAccordionAddress = (addressType) => {
    setAccordionAddress(p => {
      return { ...p, [addressType]: !p[addressType] };
    })
  }
  const handleAddressChange = (e) => {
    setAddressInput(p => ({ ...p, [e.target.name]: e.target.value }));
  }
  const handleSave = () => {
    setAddress(addressInput);
    setAddressInput({});
  }
  useEffect(() => {
    setAccordionAddress({
      delivery: !accordionOpenCondition,
      new_address: accordionOpenCondition,
    })
  }, [accordionOpenCondition]);
  return (
    <div className="checkout__address">
      <div className="checkout__addressOption">
        <h5 onClick={() => handleAccordionAddress('delivery')}>Delivery Address <span >{accordionAddress.delivery ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</span></h5>
        {accordionAddress.delivery &&
          <p>
            {address.full_name && <div>{address.full_name}</div>}
            {(address.address_line1 || address.address_line2) && <div>{address.address_line1}, {address.address_line2}</div>}
            {(address.city || address.pin_code) && <div>{address.city}, {address.pin_code}</div>}
            {(address.state || address.country) && <div>{address.state}, {address.country}</div>}
            {address.phone_number && <div>{address.phone_number}</div>}
          </p>}
          {accordionOpenCondition && accordionAddress.delivery && <div className="checkout__addressNotFound">Address Not Available</div>
          }
      </div>
      <div className="checkout__addressOption">
        <h5 onClick={() => handleAccordionAddress('new_address')}>Add New Address <span>{accordionAddress.new_address ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</span></h5>
        {accordionAddress.new_address && <div className="checkout__addressInputContainer">
          {addressControls.map((itm) => {
            return <div>
              <div className="checkout__addressLabel">{itm.label}</div>
              <input className='checkout__addressInput' {...itm} onChange={handleAddressChange} value={addressInput[itm.name]} />
            </div>
          })}
          <button onClick={() => handleSave()}>Save</button>
        </div>}
      </div>
    </div>
  )
}

export default Address