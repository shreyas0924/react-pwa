/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'

const ChatSection = () => {
  const [chats, setChats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API_URL
      try {
        const response = await fetch(url)
        const data = await response.json()
        setChats(data.chats)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()

    console.log(chats)
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
