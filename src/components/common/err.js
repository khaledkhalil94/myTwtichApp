import React from 'react'

export default (props) => {
  return (
    <div className="ui compact negative message">
      <p>{props.msg}</p>
    </div>
  )
}