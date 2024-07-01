import React, { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Banner from './Components/Banner'
import Container from './Components/Container'

const App = () => {
  const [productCount, setProductCount] = useState(0);
  return (
    <div className='container'>
      <Header productCount={productCount}/>  
      <Banner/>
      <Container setProductCount={setProductCount}/>
    </div>
  )
}

export default App
