import React from 'react'

export default ({stream}) => {
  const {channel} = stream
  const {display_name, logo, status} = channel
  return (
    <div>
      <img className="ui avatar mini image" role="presentation" src={logo} />
      <span><b>{display_name}</b></span>
      <h3>{status}</h3>
    </div>
  )
}