import React from 'react'
import {useState} from 'react'
import Tittle from './holiday/Tittle'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function App() {
  const [search, SetSearch] = useState([])
  const[items, SetItems] = useState([])

function OnSearch(e) {
    SetSearch(e.target.value)
}

function onSubmit(e) {
    e.preventDefault()
    getData()
}

  async function getData() {
    const address = URL + search
    try {
    const response = await fetch(address);
    if (response.ok) {
    const json = await response.json();
    SetItems([json.drinks[0]])
    console.log(json)
  } else {
    console.log('Error retrieving data from server')
  }
  } catch (error) {
    console.log(error)
    alert('Try to write correct drink')
  }
}

  return (
    <form onSubmit={onSubmit}>
      <div style={{margin: 50}}>
        <Tittle></Tittle>
        <input type='text' placeholder='Search by name' value={search} onChange={OnSearch}/>
        <button type='submit'>Search</button>
        {items.map(item =>  (
          <div key={item} >
        <h2>{item.strDrink}</h2>
        <img style={{width: 300}} src={item.strDrinkThumb} alt=''></img>
        <h2>Glass</h2>
        <p>{item.strGlass}</p>
        <h2>Instuctions</h2>
        <p>{item.strInstructions}</p>
        <h2>Ingredients and measures</h2>
              <p>{item.strIngredient1} {item.strMeasure1}</p>
              <p>{item.strIngredient2} {item.strMeasure2}</p>
              <p>{item.strIngredient3} {item.strMeasure3}</p>
              <p>{item.strIngredient4} {item.strMeasure4}</p>
              <p>{item.strIngredient5} {item.strMeasure5}</p>
              <p>{item.strIngredient6} {item.strMeasure6}</p>
          </div>
        ))}
      </div>
    </form>
  )
}

export default App






