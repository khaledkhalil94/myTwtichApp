import React from 'react'

const attrs = {
  frameBorder: '0',
  allowFullScreen: 'true',
  scrolling: 'no',
  height: '630',
  width: '1120'
}

export default ({user, stream}) => {

  const name = stream ? stream.channel.name : user.name
  return (<iframe src={`https://player.twitch.tv/?channel=${name}`} {...attrs}></iframe>)
}