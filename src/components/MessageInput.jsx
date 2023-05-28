import React from 'react'

const MessageInput = () => {
  return (
    <div className='container mb-5 ml-auto mr-2'>
      <input
        type='text'
        className='input'
        placeholder='Reply to @Rohit Yadav'
      ></input>
      <img src='./paperclip.png' alt='paperclip' />
      <img src='./Icon.png' alt='send' />
    </div>
  )
}

export default MessageInput
