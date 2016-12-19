import React from 'react'

class Input extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = ({ value: '' })
  }

  handleChange(value){
    this.setState({ value: value})
    this.props.onChange(value)
  }

  componentDidMount() {
    this.i.focus()
  }

  componentWillReceiveProps({user}) {
    if(user && (this.state.value === '')) this.setState({ value: user.name })
  }

  render(){
    const {load} = this.props
    return (
      <div className='ui icon labeled input loading'>
        <div className="ui label">
          Username
        </div>
        <input
          ref={(i)=> this.i = i}
          onChange={(e)=> this.handleChange(e.target.value)}
          type='text'
          value={this.state.value}
           />
         {load && <i className="search icon"></i>}
      </div>
    )
  }
}

export default Input;