import React, { Component } from 'react'
import { Icon } from 'antd'
import {toJS} from "mobx"
import {
  SiderWrapper,
  SearchWrapper,
  SiderCard,
  ContactBox,
  WebInformation,
} from './style'
import ArticleStore from '../../articlepage/stores/ArticleStore'
import { observer } from 'mobx-react'

@observer
class Sider extends Component {
  componentDidMount() {
    ArticleStore.getArticleTags()
  }
  handleSearch = (e) => {
    if (e.keyCode === 13) {
      ArticleStore.getArticleSearchResult(e.target.value)
		}
  }
  render() {
    return (
      <SiderWrapper>
        <SearchWrapper placeholder="请输入内容" onKeyDown={(e)=>this.handleSearch(e)}/>
        <SiderCard>
          <h3>Tags</h3>
          <div className="tagswrapper">
            {toJS(ArticleStore.tags) && toJS(ArticleStore.tags).map((item) => <div className="tag" key={item.id}>{item.name}</div>)}
          </div>
        </SiderCard>
        <SiderCard>
          <h3>Category</h3>
          <ul>
            <li>前端（5）</li>
            <li>后端（5）</li>
            <li>PHP（5）</li>
            <li>taddd的世界l</li>
            <li>辣辣的可多吃点</li>
          </ul>
        </SiderCard>
        <SiderCard>
          <h3>Links</h3>
          <ul>
            <li>按你的博客sssssd得分</li>
            <li>jerry的空间点点滴滴</li>
            <li>taddd的世界我真的很哈偶</li>
            <li>taddd的世界l</li>
            <li>辣辣的可多吃点</li>
          </ul>
        </SiderCard>
        <ContactBox>
          <Icon type="github" />
          <Icon type="wechat" />
          <Icon type="mail" />
        </ContactBox>
        <WebInformation>
          <ul>
            <li>
            Hosted by Coding Pages
            </li>
            <li>© 2020 Ruffianjiang</li>
            <li>Theme by Ruffianjiang base on dawn.</li>
            <li>pv: 11074 uv: 3277</li>
          </ul>
        </WebInformation>
      </SiderWrapper>
    )
  }
}

export default Sider;