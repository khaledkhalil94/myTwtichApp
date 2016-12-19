import React from 'react'

export default (props) => {
  const className = 'ui segment right panel' + (props.loading ? ' loading' : '');
  return (
    <div className={className}>
      <p>Following -to be added-</p>
    </div>
  )
}