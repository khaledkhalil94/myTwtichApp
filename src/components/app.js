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

  componentDidMount() {
    const {search} = this.props
    search('admiralbulldog')
  }

  handleChange(e){
    if(e.length !== e.trim().length) return
    if(this.state.timer) clearTimeout(this.state.timer)
    const {search} = this.props
    let id = setTimeout(()=> search(e.trim()), 500)
    this.setState({timer: id})
  }

  render () {
    const {err, errMsg, searchLoad, user, stream, streamLoad} = this.props
    const loading = streamLoad ? ' loading' : ''
    return (
      <div className='ui segment main-layout'>
        <Input load={searchLoad} user={user} onChange={this.handleChange} />
        {err && <Err msg={errMsg} />}
        <div className="ui divider"></div>
        <div className='ui main grid'>
          <div className='twelve wide column'>
            <div className={'ui segment left frame' + loading}>
              {stream && <Frame stream={stream} />}
            </div>
            <div className={'ui segment description' + loading}>
              {stream && <Desc stream={stream} />}
            </div>
          </div>
          <div className='four wide column'>
            <Follows loading={streamLoad} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const [{err, errMsg, stream, user}, {searchLoad, streamLoad}] = [state.state, state.loader]
  return {
    user, err, errMsg, stream,
    searchLoad, streamLoad
  }
}

function mapDispatchToProps(dispatch){
  return {
    search: (e) => dispatch(searchForUser(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)