import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class input extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = ({ value: '', username: null })
  }

  handleChange(e, {value}){
    this.setState({ value: value})
    this.props.onChange(value)
  }

  render(){
    const { load } = this.props
    return (
      <Input
        className='streamSearch'
        loading={load}
        disabled={load}
        icon='search'
        label='Username'
        value={this.state.value}
        onChange={this.handleChange}
        />
    )
  }
}