import React from 'react'
import BitChatLeft from "./BitChatLeft"
import BitChatRight from "./BitChatRight"


const BitChat = () => {
  return (
    <div className='flex flex-col md:items-center md:justify-center md:flex-row px-4 py-4 md:p-0'>
        <BitChatLeft />
        <BitChatRight />
    </div>
  )
}

export default BitChat