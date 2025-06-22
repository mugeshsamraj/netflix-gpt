import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Login_BG, Login_Logo } from '../utils/contants'

const GPTSearch = () => {
  return (
    <div className=''>
      <div className="absolute -z-10">
        <img src={Login_BG} alt="bg" />
      </div>
     <GptSearchBar />
     <GptMovieSuggestion />
    </div>
  )
}

export default GPTSearch
