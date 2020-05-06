import React, { Component } from 'react'
import {
  ArticlePageWrapper
} from '../style'
import {toJS} from "mobx"
import { Icon, Modal, message } from 'antd'
import ArticleStore from '../stores/ArticleStore';
import { observer } from 'mobx-react';
import ReactMarkdown from 'react-markdown'
import Comments from '../../common/comments/Comments';
import AuthStore from '../../common/stores/AuthStore'

const { confirm } = Modal;
@observer
class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.state= {
      modalVisible: false,
    }
  }
  componentDidMount() {
    ArticleStore.getArticleDetail(this.props.match.params.id)
    ArticleStore.getArticleFav(this.props.match.params.id)
  }
  pageChange = (current) => {
    console.log('222' + current +'11'+ ArticleStore.loading )
  }
  showConfirm = () => {
    // confirm({
    //   title: '是否愿意观看一场广告支持一下～',
    //   content: '看看呗看看呗',
    //   okText: 'Yes',
    //   cancelText: 'No',
    //   onOk() {
    //     console.log('OK');
    //   },
    //   onCancel() {
    //     console.log('No!');
    //   },
    // });
  }
  handleLikeOperation = () => {
    const articleId = this.props.match.params.id;
    if (!AuthStore.isLogin) {
      AuthStore.setLRModalVisible()
      return
    }
    if (ArticleStore.isLiked) {
      message.success('你已经点过赞了哦～')
      return;
    }
    ArticleStore.addFav(articleId).then(() => {
      ArticleStore.getArticleFav(articleId)
      message.success('谢谢支持～')
    })
    // this.showConfirm()
  }
  toc = (markdown) => {
    var toc = [];
    var reg = /(#+)\s+?(.+?)\r/g;
    var regExecRes = null
    while((regExecRes = reg.exec(markdown))) {
      toc.push({
        level: regExecRes[1].length,
        title: regExecRes[2]
      });
    }
    console.log(toc)
    return toc
  }
  render() {
    if(ArticleStore.loading) {
      return <div></div>
    }
    return (
      <ArticlePageWrapper>
        <div className="article">
          <div className="article-top">
            <h2>{toJS(ArticleStore.articleDetail) && toJS(ArticleStore.articleDetail).title}</h2>
          </div>
          <ReactMarkdown
            source={toJS(ArticleStore.articleDetail) && toJS(ArticleStore.articleDetail).content}
            escapeHtml={false}
          >
          </ReactMarkdown>
          <div className="article-bottom">
            <div className={`article-operation ${ArticleStore.isLiked ? 'article-like-active' : ''}`} onClick={this.handleLikeOperation}>
              <Icon type="like" theme="filled" />
            </div>
            <div className="tags">
              <Icon type="book" theme="filled" />
              {toJS(ArticleStore.articleDetail) && toJS(ArticleStore.articleDetail).tags.map((item) => 
                <span key={item.id}>{item.name}</span>)
              }
            </div>
          </div>
        </div>
        <Comments articleid={this.props.match.params.id}></Comments>
        <Modal
          footer={null}
          title={null}
          visible={this.state.modalVisible}
          onCancel={this.handleModalVisible}
        >
          <div></div>
        </Modal>
      </ArticlePageWrapper>
    )
  }
}

export default ArticlePage;