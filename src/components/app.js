import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchForUser} from '../actions'
import Frame from './common/iframe'
import Desc from './common/userDesc'
import Err from './common/err'
import Input from './common/input'
import Follows from './common/follows'

class App extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = ({timer: null})
  }

  handleChange(e){
    if(e.length !== e.trim().length) return
    if(this.state.timer) clearTimeout(this.state.timer)
    const {search} = this.props
    let id = setTimeout(()=> search(e.trim()), 500)
    this.setState({timer: id})
  }

  render () {
    const {err, errMsg, loading, user} = this.props
    return (
      <div className='ui segment main-layout'>
        <Input name={user} onChange={this.handleChange} />
        {err && <Err msg={errMsg} />}
        <br />
        <br />
        <div className="ui divider"></div>
        <div className='ui main grid'>
          <div className='twelve wide column'>
            <Frame loading={loading} user={user} />
            <Desc loading={loading} user={user} />
          </div>
          <div className='four wide column'>
            <Follows />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {err, errMsg, loading, user} = state
  return {
    user,
    err,
    errMsg,
    loading
  }
}

function mapDispatchToProps(dispatch){
  return {
    search: (e) => dispatch(searchForUser(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)