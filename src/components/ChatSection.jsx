/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'

const ChatSection = () => {
  const [chats, setChats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://3.111.128.67/assignment/chat?page=0`
        )
        const data = await response.json()
        setChats(data.chats)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>
          <img src={chat.sender.image} alt='User Image' />
          <p>{chat.message}</p>
          <p>Sender ID: {chat.sender.user_id}</p>
        </div>
      ))}
    </div>
  )
}

export default ChatSection
