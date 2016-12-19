import React from 'react'

export default (props) => {
  const className = 'ui segment description' + (props.loading ? ' loading' : '');
  const user = props.user;
  const img = user ? <img className="ui avatar tiny image" role="presentation" src={user.logo} /> : null;
  const name = user ? user.name.toUpperCase() : null;
  const bio = user ? <h3>{user.bio}</h3> : null;

  return (
    <div className={className}>
      {img}
      <span><b>{name}</b></span>
      {bio }
    </div>
  )
}