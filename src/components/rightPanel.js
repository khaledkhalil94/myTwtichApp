import React from 'react'
import {streamSwitch, getUserFollows, searchForUser} from '../actions'
import FollowsInput from './common/followsInput'
import FollowsList from './common/followsList'
import History from './common/history'
import { Header, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'


class panel extends React.Component {
  constructor(){
    super()
    this.historyClick = this.historyClick.bind(this)
    this.followsChange = this.followsChange.bind(this)
    this.followsClick = this.followsClick.bind(this)
    this.state = ({timer: null})
  }

  historyClick(e){
    const { streamSwitch } = this.props
    streamSwitch(e)
  }

  followsChange(e){
    const { search } = this.props
    if(this.state.timer) clearTimeout(this.state.timer)
    let id = setTimeout(()=> search(e.trim()), 1000)
    this.setState({timer: id})
  }

  followsClick(e){
    const { userSearch } = this.props
    userSearch(e)
  }

  render(){
    const { history, follows } = this.props
    return (
      <div className='right panel'>
        <div className='follows'>
          <Header attached='top' inverted>
            Following
          </Header>
          <Segment attached>
            { follows ? <FollowsList click={this.followsClick} follows={follows} />
              : <FollowsInput change={this.followsChange} />
            }
          </Segment>
        </div>
        <div className='history'>
          <Header attached inverted>
            History
          </Header>
          <Segment attached>
            {history && <History items={history} click={this.historyClick} />}
          </Segment>
        </div>
      </div>
    )
  }
}

function mapStateToProps({state}){
  return {
    history: state.streamersHistory,
    follows: state.follows
  }
}

function mapDispatchToProps(dispatch){
  return {
    streamSwitch: e => dispatch(streamSwitch(e)),
    search: e => dispatch(getUserFollows(e)),
    userSearch: (e) => dispatch(searchForUser(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(panel)