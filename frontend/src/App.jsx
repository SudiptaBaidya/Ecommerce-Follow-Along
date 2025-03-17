import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <Login/>
      <br />
      <h2>Or</h2>
      <br />
      <h1>Sign up</h1>
      <br />
      <Signup/>
    </>
  )
}

export default App
