import React from 'react'
import { List } from 'semantic-ui-react'


export default ({items, click}) => {
  //console.log(items)
  return (
    <div>
      {items.map( (item, i) => (
        <List key={i} size='large'>
          <List.Item as='a' icon='twitch' content={item.display_name} onClick={() => click(item)} />
        </List>
      ))}
    </div>
  )
}