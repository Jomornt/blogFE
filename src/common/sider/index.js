import React, { Component } from 'react'
import { Icon, Button } from 'antd'
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
import LinkStore from '../stores/LinkStore'

@observer
class Sider extends Component {
  componentDidMount() {
    ArticleStore.getArticleTags();
    ArticleStore.getArticleCategories();
    LinkStore.getLinks();
  }
  handleSearch = (e) => {
    if (e.keyCode === 13) {
      ArticleStore.updateArticleList({'search' : e.target.value})
		}
  }
  handleTagClick = (id) => {
    ArticleStore.updateArticleList({'tags' : id})
  }
  handleContactClick = (e) => {
    console.log(e.target.dataset.icon)
    switch(e.target.dataset.icon) {
      case 'github':
        window.open('https://github.com/Jomornt');
        break;
      case 'mail':
        break;
      case 'qq':
        window.open('http://wpa.qq.com/msgrd?v=3&uin=1270392394&site=qq&menu=yes');
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <SiderWrapper>
        <SearchWrapper placeholder="请输入内容" onKeyDown={(e)=>this.handleSearch(e)}/>
        <SiderCard>
          <h3>Tags<Button size="small" onClick={() => this.handleTagClick('')}>取消</Button></h3>
          <div className="tagswrapper">
            {toJS(ArticleStore.tags) && toJS(ArticleStore.tags).map((item) => 
              <div className="tag" key={item.id} onClick={() => this.handleTagClick(item.id)}>{item.name}</div>)
            }
          </div>
        </SiderCard>
        <SiderCard>
          <h3>Category<Button size="small" onClick={() => this.handleTagClick('')}>取消</Button></h3>
          <ul>
            {ArticleStore.categories.map((category) => (
              <li key={category.id} onClick={() => ArticleStore.updateArticleList({'category' : category.id})}>
                <Icon type="folder-open" /> {category.name}
              </li>
            ))}
          </ul>
        </SiderCard>
        <SiderCard>
          <h3>Links</h3>
          <ul>
            {LinkStore.LinksList.map((link) => (
              <li key={link.id}><Icon type="link" />
                <a href={link.url} target="_blank">{link.name}</a>
              </li>
            ))}
          </ul>
        </SiderCard>
        <ContactBox onClick={(e) => this.handleContactClick(e)}>
          <Icon type="github" />
          <Icon type="qq" />
          <a href="mailto: jomornt@gmail.com"><Icon type="mail" /></a>
        </ContactBox>
        <WebInformation>
          <ul>
            <li>
            Hosted by CvCoder
            </li>
            <li>© 2020 XXXXX</li>
          </ul>
        </WebInformation>
      </SiderWrapper>
    )
  }
}

export default Sider;