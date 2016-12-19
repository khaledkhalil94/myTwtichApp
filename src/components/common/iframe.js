import React from 'react'

const attrs = {
  frameBorder: '0',
  allowFullScreen: 'true',
  scrolling: 'no',
  height: '630',
  width: '1120'
}

export default ({loading, user}) => {
  const className = 'ui segment left frame' + (loading ? ' loading' : '');
  return (
    <div className={className}>
      {user && <iframe src={`https://player.twitch.tv/?channel=${user.name}`} {...attrs}></iframe>}
    </div>
  )
}