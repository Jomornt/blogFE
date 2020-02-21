import React, { Component } from 'react'
import ArticleStore from '../../articlepage/stores/ArticleStore'
import {
  HomePageWrapper,
  ArticleItem,
  Page,
  Tag
} from '../style'

class HomePage extends Component {
  render() {
    return (
      <HomePageWrapper>
        { [1,2,3,4,5,6,7,8,9,10].map((item) => (
        <ArticleItem>
          <div className="article-item-time">Dec 29, 2012</div>
          <div className="decoration" />
          {console.log(ArticleStore.getArticleList())}
          <div className="article-item-title">
            <h2>Consectetur home</h2>
          </div>
          <p>
          The following contents should be invisible in home/archive page
          .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce 
          eget urna vitae velit eleifend interdum at ac nisThe following c
          ontents should be invisible in home/archive page
          .Lorem ipsum dolor sit amet, co                               
          </p>
          <div className="more-btn">Read More</div>
        </ArticleItem>
        )) }
        <Page>
          <div className="page-btn-1">Previous</div>
          <div className="page-number">1</div>
          <div className="page-number">2</div>
          <div className="page-number">3</div>
          <div className="page-number">6</div>
          <div className="page-btn-2">Next</div>
        </Page>
      </HomePageWrapper>
    )
  }
}

export default HomePage;