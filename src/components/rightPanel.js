import React from 'react'
import {switchStream} from '../actions/actionCreator'
import Follows from './common/follows'
import History from './common/history'
import { Header, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'


class panel extends React.Component {
  constructor(){
    super()
    this.historyClick = this.historyClick.bind(this)
  }

  historyClick(e){
    const { switchStream } = this.props
    switchStream(e)
  }

  render(){
    const { history } = this.props
    return (
      <div className='right panel'>
        <div className='follows'>
          <Header attached='top' inverted>
            Following
          </Header>
          <Segment attached>
            <p>Enter your Twitch username to see streamers you follow</p>
            <Follows />
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
    history: state.streamersHistory
  }
}

function mapDispatchToProps(dispatch){
  return {
    switchStream: e => dispatch(switchStream(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(panel)