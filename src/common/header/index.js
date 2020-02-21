import React, { Component } from 'react'
import {
  HeaderWrapper
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="header-content">
          <h2 className="header-brand">ZhaoZhaZha</h2>
          <ul>
            <li><i className="iconfont">&#xe61f;</i> 首页</li>
            <li><i className="iconfont">&#xe609;</i> 留言</li>
            <li><i className="iconfont">&#xe600;</i> 下载</li>
            <li><i className="iconfont">&#xe60e;</i> 关于</li>
          </ul>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header;