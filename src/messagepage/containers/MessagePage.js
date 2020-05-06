import React, { Component } from 'react'
import { observer } from 'mobx-react';
import AuthStore from '../../common/stores/AuthStore'
import Comments from '../../common/comments/Comments';

@observer
class MessagePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(AuthStore.loading) {
      return <div>111</div>
    }

    return (
      <Comments/>
    )
  }
}

export default MessagePage;