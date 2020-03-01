import React, { Component } from 'react'
import ArticleStore from '../../articlepage/stores/ArticleStore'
import { Typography } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import CtPagination from '../../common/CtPagination'
import {
  HomePageWrapper,
  ArticleItem,
} from '../style'

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

    console.log('222' + current +'11'+ ArticleStore.loading )
  }
  render() {
    if (ArticleStore.loading && ArticleStore.init) {
      return <div>加载中</div>
    }

    return (
      <HomePageWrapper>
        { ArticleStore.articleList.map((article) => (
        <ArticleItem>
          <div className="article-item-time">Dec 29, 2012</div>
          <div className="decoration" />
          <div className="article-item-title">
            <h2>{article.title}</h2>
          </div>
          <Paragraph ellipsis={{ rows: 3 }}>
            {article.content}
          </Paragraph>
          <Link
              className="more-btn"
              to={`article/${article.id}`}
            >
              Read More
          </Link>
        </ArticleItem>
        )) }
        <CtPagination
          total={ArticleStore.count}
          pageSize={10}
          pageChange={this.pageChange}
        />
      </HomePageWrapper>
    )
  }
}

export default HomePage;