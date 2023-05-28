import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MessageInput from './components/MessageInput'
import ChatSection from './components/ChatSection'

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-[30%] overflow-y-auto pb-[20%] bg-[#FAF9F4] flex-col '>
        <ChatSection />
        <MessageInput />
      </div>
    </>
  )
}

export default App
