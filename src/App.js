import React from 'react'
import './App.css';

// COMPONENTS
import Header from './components/header/navBar'
import ItemList from './components/itemList/itemList';

const App = () => {
  return(      
    <div>
      <div><Header/></div>
      <div className='container'>
        <div className='card'>
          <ItemList className="asd"/>                
        </div>
      </div>
    </div>
  )
}


export default App

