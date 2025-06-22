import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%]'>
      <form className='w-1/2 bg-black grid grid-cols-12 mx-auto'>
        <input type='text' placeholder={lang[langkey].searchPlaceHolder} className='p-4 m-4 col-span-9'  />
        <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
