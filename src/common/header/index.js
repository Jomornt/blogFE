import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {branch} from '../../statics/images/branch.png'
import {
  HeaderWrapper
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="header-content">
          {/* <h2 className="header-brand">

          </h2> */}
          <img src="/images/branch.png"></img>
          <ul>
            <li> <Link to={`/`}><i className="iconfont">&#xe61f;</i> 首页</Link></li>
            <li> <Link to={`/message`}><i className="iconfont">&#xe609;</i> 留言</Link></li>
            <li> <Link to={`/download`}><i className="iconfont">&#xe600;</i> 下载</Link></li>
          </ul>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header;