import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  HeaderWrapper
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="header-content">
          <h2 className="header-brand">Branch</h2>
          <ul>
            <li> <Link to={`/`}><i className="iconfont">&#xe61f;</i> 首页</Link></li>
            <li> <Link to={`/message`}><i className="iconfont">&#xe609;</i> 留言</Link></li>
            <li> <Link to={`/download`}><i className="iconfont">&#xe600;</i> 下载</Link></li>
            <li> <Link to={`/about`}><i className="iconfont">&#xe60e;</i> 关于</Link></li>
          </ul>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header;