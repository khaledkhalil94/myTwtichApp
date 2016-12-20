import React from 'react'
import { Input } from 'semantic-ui-react'

export default (props) => {
  const load = false
  return (
    <Input
      loading={load}
      disabled={load}
      icon='search'
      />
  )
}