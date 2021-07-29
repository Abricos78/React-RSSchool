import React, { useState } from 'react'
import Cards from './Cards'
import logo from './logo.svg'
import Search from './SearchBar'
import style from './style.module.css'

function App() {
  return (
    <div className={style.app}>
      <Search />
      <Cards />
    </div>
  )
}

export default App
