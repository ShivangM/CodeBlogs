import React from 'react'
import Blog from '../components/Blog'

function blogs() {
  return (
    <div className='relative py-6 2xl:py-12 bg-gray-900 overflow-hidden min-h-screen'>
      <div className="flex flex-wrap px-1 lg:px-10">
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
    </div>
  )
}

export default blogs