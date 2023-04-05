import React from 'react'
import productData from './productData';
import Product from './Product'
import "./index.css"
const Home = () => {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__banner' src="https://i.pinimg.com/564x/e7/66/1d/e7661d0dd44800e524bd104b68ff2093.jpg" alt="" />
        <div className="home__row">
          {(productData.row1 || []).map(itm =>
            <Product
              id={itm.id}
              title={itm.title}
              price={itm.price}
              currency={itm.currency}
              rating={itm.rating}
              image={itm.image}
            />
          )}
        </div>
        <div className="home__row">
          {(productData.row2 || []).map(itm =>
            <Product
            id={itm.id}
              title={itm.title}
              price={itm.price}
              currency={itm.currency}
              rating={itm.rating}
              image={itm.image}
            />
          )}
        </div>
        <div className="home__row">
          {(productData.row3 || []).map(itm =>
            <Product
            id={itm.id}
              title={itm.title}
              price={itm.price}
              currency={itm.currency}
              rating={itm.rating}
              image={itm.image}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home