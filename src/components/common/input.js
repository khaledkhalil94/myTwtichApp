import React from 'react'

class Input extends React.Component {
  componentDidMount() {
    this.i.focus()
  }

  render(){
    return (
      <div className='ui labeled input'>
        <div className="ui label">
          Username
        </div>
        <input
          ref={(i)=> this.i = i}
          onChange={(e)=> this.props.onChange(e.target.value)}
          type='text' />
      </div>
    )
  }
}

export default Input;