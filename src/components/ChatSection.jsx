/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Suspense, useEffect, useState } from 'react'

const ChatSection = () => {
  const [chats, setChats] = useState([])
  const [number, setNumber] = useState(0)

  const loadMoreData = async () => {
    setNumber((prev) => prev + 1)

    try {
      const response = await fetch(
        `https://3.111.128.67/assignment/chat?page=${number}`
      )
      const data = await response.json()
      setChats((prevChats) => [...prevChats, ...data.chats])
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://3.111.128.67/assignment/chat?page=${number}`
        )
        const data = await response.json()
        setChats(data.chats)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }
    fetchData()
    window.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreData()
    }
  }

  return (
    <div>
      <Suspense>
        {chats.map((chat) => (
          <div key={chat.id} className='flex mb-5'>
            <img
              src={chat.sender.image}
              alt='User Image'
              className='w-[30px] h-[30px] rounded-xl ml-3 absolute'
            />
            <img
              src='./Solid.png'
              alt='tick'
              className='w-[10px] h-[10px] mt-5 ml-9 absolute'
            />

            <div className='bg-white p-3 shadow-xl mr-5 ml-[15%] border-style text-[#606060]'>
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </Suspense>
    </div>
  )
}

export default ChatSection
