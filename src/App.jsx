import React, {useState, useEffect} from 'react'
import ItemCard from './components/ItemCard'
import "./App.css"

const App = () => {

  const [cards, setCards] = useState(null)

  useEffect(()=>{

    fetch("http://127.0.0.1:8000/api/")
    .then(res => res.json())
    .then(data => {
      let li = []
      data.forEach(item => {
        li.push(<ItemCard key={item.id} itemName={item.name} price={item.price} discount={item.discount} />)
      })
      setCards(li)

    })

  },[])

  return (
    <div>
      <h1>StyleZen</h1>
      <div className='cardHolder'>
        {cards}
      </div>
    </div>
  )
}

export default App