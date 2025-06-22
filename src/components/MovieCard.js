import React from 'react'
import { Image_CDN } from '../utils/contants'

function MovieCard({posterPath}) {
  return (
    <div className='pr-4 w-48'>
      <img alt='Movies Cards' 
      src={Image_CDN+posterPath}
      />
    </div>
  )
}

export default MovieCard
