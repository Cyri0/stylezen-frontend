import React from 'react'
import ItemCard from './components/ItemCard'
import "./App.css"

import jeans from '../src/assets/jeans.jpg'
import tshirt from '../src/assets/t-shirt.jpg'
import sweater from '../src/assets/sweater.jpg'

const App = () => {
  return (
    <div>
      <h1>StyleZen</h1>
      <div className='cardHolder'>
        <ItemCard itemName="Pulóver" price={8000} discount={0.5} picture={sweater} />
        <ItemCard itemName="Farmer" price={10000} picture={jeans} />
        <ItemCard itemName="Nirvana póló" price={53000} discount={0.2} picture={tshirt}/>

        <ItemCard itemName="Májki cipő" price={8000} discount={0.4} />
      </div>
    </div>
  )
}

export default App