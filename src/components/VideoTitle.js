import React from 'react'

function VideoTitle({title,overview}) {

  return (
    <div className='pt-36 px-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4'>
        <button className='bg-gray-500 text-white p-4 px-16 text-xl rounded-lg mx-3'>Play</button>
        <button className='bg-gray-500 text-white p-4 px-16 text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
