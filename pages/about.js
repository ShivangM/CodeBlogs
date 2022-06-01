import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function about() {
  return (
    <div className='relative py-20 2xl:py-40 bg-gray-900 overflow-hidden min-h-screen'>
        <Head>
        <title>Code Blogs - About</title>
        <meta name="description" content="Coding blogs for you!" />
        <meta name="keywords" content="blogs, coding, codnig blogs, coding help, development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}

export default about