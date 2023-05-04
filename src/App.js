import React, { useState } from 'react'
import PopUp from './Components/PopUp'
import './idx.css'
export default function App() {
  const [buttonPopup, setPopup] = useState(false)
  const togglePopup = () =>{
    setPopup(!buttonPopup)
    console.log(buttonPopup)
  }
  return (
    <div>
      <h1 className='header'>Otp PopUp</h1>
      <div className='cont'>
      <button onClick={togglePopup} className='btn4'>Click For OTP</button>
      </div>
      {
        buttonPopup && (
          <div>
             <PopUp/>
          </div>
        )
      }
     
    </div>
  )
}