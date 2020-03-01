import React, { Component } from 'react'
import {
  ArticlePageWrapper
} from '../style'
import {toJS} from "mobx"
import ArticleStore from '../stores/ArticleStore';
import { observer } from 'mobx-react';
import CtPagination from '../../common/CtPagination';
import Comments from '../../common/comments/Comments';

@observer
class ArticlePage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    ArticleStore.getArticleDetail(this.props.match.params.id)
  }
  pageChange = (current) => {
    // ArticleStore.getArticleList(current) 

    console.log('222' + current +'11'+ ArticleStore.loading )
  }
  render() {
    if(ArticleStore.loading) {
      return <div>111</div>
    }

    return (
      <ArticlePageWrapper>
        <div className="article">
          <div className="article-top">
            <h2>{toJS(ArticleStore.articleDetail) && toJS(ArticleStore.articleDetail).title}</h2>
          </div>
          <p>
            {toJS(ArticleStore.articleDetail) && toJS(ArticleStore.articleDetail).content}
          </p>
          <div className="article-bottom">
            <div className="article-like">👍</div><span>12人喜欢</span>
            <div className="article-share">分</div>
          </div>
        </div>
        <Comments></Comments>
      </ArticlePageWrapper>
    )
  }
}

export default ArticlePage;