import React from 'react'
import { Input } from 'semantic-ui-react'

export default (props) => {
  const load = false
  const { change } = props
  return (
    <div>
      <p>Enter your Twitch username to see streamers you follow</p>
      <Input
        loading={load}
        disabled={load}
        onChange={(e, {value}) => change(value)}
        icon='search'
        />
    </div>
  )
}