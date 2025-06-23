import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi'
import useSearchMovie from '../hooks/useSearchMovie'
import {setSearchQuery} from '../store/movieSlice'

const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang)
  const dispatch = useDispatch()
  const searchText = useRef(null)

  const handleGptSearchClick = () => {
     dispatch(setSearchQuery(searchText.current.value));
  };
  return (
    <div className='pt-[10%]'>
      <form className='w-1/2 bg-black grid grid-cols-12 mx-auto' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder={lang[langkey].searchPlaceHolder} className='p-4 m-4 col-span-9' ref={searchText}  />
        <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
