import React from 'react'
import { List } from 'semantic-ui-react'

export default ({ follows, click }) => {

  return (
    <div>
      {follows.follows.map( (item, i) => (
        <List key={i}>
          <List.Item as='a' onClick={()=> click(item.channel.name)} icon='twitch' content={item.channel.name} />
        </List>
      ))}
    </div>
  )
}