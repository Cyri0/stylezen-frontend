import React from 'react'
import './ItemCard.css'

const ItemCard = (props) => {
  let discount = props.discount || 0
  let price = props.price - (props.price * discount)
  let oldPrice = props.price

  return (
    <div className='card'>
        <div className='cardPic' style={{ backgroundImage: `url(${props.picture})` }}>
            {
                discount !== 0 ?
                <div className={'discountTag ' + (discount >= 0.5 ? 'high' : 'low')}>-{discount*100}%</div> :
                <></>
            }
        </div>
        <div className='cardInfo'>
            <h3>{props.itemName}</h3>
            <span className='price'>{price} Ft</span>
            {
                price !== oldPrice ? 
                <span className='oldPrice'>{oldPrice} Ft</span> :
                <></>
            }
        </div>
    </div>
  )
}

export default ItemCard