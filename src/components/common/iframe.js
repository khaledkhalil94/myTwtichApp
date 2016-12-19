import React from 'react'

const attrs = {
  frameBorder: '0',
  allowFullScreen: 'true',
  scrolling: 'no',
  height: '630',
  width: '1120'
}

export default ({stream}) => {
  const {channel} = stream
  return (
      <iframe src={`https://player.twitch.tv/?channel=${channel.display_name}`} {...attrs}></iframe>
  )
}