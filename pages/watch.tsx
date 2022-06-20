import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Player from '../components/Player'

function watch() {
  return (
    <div>
      <Head>
        <title>Movie - Rezkflix</title>
        <link
          rel="icon"
          href="https://icon-library.com/images/free-movies-icon/free-movies-icon-16.jpg"
        />
      </Head>
      <Header onClose={console.log('1')} />
      <div className="absolute top-[15vh] left-0 md:left-[65vh] md:top-56">
        <Player />
      </div>
    </div>
  )
}

export default watch
