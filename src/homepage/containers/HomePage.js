import React, { Component, Fragment } from 'react'
import ArticleStore from '../../articlepage/stores/ArticleStore'
import { Typography, Icon, Empty } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import CtPagination from '../../common/CtPagination'
import Sider from '../../common/sider'
import {
  HomePageWrapper,
  ArticleItem,
} from '../style'
import ReactMarkdown from 'react-markdown'

const { Paragraph } = Typography;

@observer
class HomePage extends Component {
  constructor(props) {
    super()
    this.state = {
      currentPage: 1,
    };
  }
  componentDidMount() {
    ArticleStore.getArticleList() 
  }

  pageChange = (current) => {
    ArticleStore.getArticleList(current) 
  }
  handleTagClick = (id) => {
    ArticleStore.updateArticleList({"tags": id})
  }
  render() {
    if (ArticleStore.loading && ArticleStore.init) {
      return <div>加载中</div>
    }
    return (
      <HomePageWrapper>

        <div className="left">
          { ArticleStore.articleList.length ? 
          ArticleStore.articleList.map((article) => (
          <ArticleItem key={article.id}>
            <div className="article-item-time">{moment(article.created_time).format("MMM D, YYYY")}</div>
            <div className="decoration" />
            <div className="article-item-title">
              <h2>{article.title}
                <span className="article-item-title-tags">
                  <Icon type="tags" />
                  {
                    article.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="tag"
                        onClick={() => this.handleTagClick(tag.id)}>{tag.name}</span>
                    ))
                  }
                </span>
              </h2>
            </div>

            <Paragraph ellipsis={{ rows: 3 }}>
              {article.summary}
            </Paragraph>
            <div className="article-item-footer">
              <span>
              </span>
              
              <Link
                className="more-btn"
                to={`article/${article.id}`}
              >
                Read More
              </Link>
            </div>
            
          </ArticleItem>
          )) : 
          <Empty />
        }
          <CtPagination
            total={ArticleStore.count}
            pageSize={10}
            pageChange={this.pageChange}
          />
        </div>
        <div className="right">
        <Sider></Sider>
        </div>
      </HomePageWrapper>
    )
  }
}

export default HomePage;