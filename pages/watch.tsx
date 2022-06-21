import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Player from '../components/Player'

function watch() {
  return (
    <div className="relative h-full  bg-gradient-to-b from-gray-900/10 to-[#010511] py-2 lg:h-screen">
      <Head>
        <title>Movie - Rezkflix</title>
        <link
          rel="icon"
          href="https://icon-library.com/images/free-movies-icon/free-movies-icon-16.jpg"
        />
      </Head>

      <div className="flex w-[50%] pt-32 md:pt-52 md:pl-[70vh]">
        <Player />
      </div>
    </div>
  )
}

export default watch
