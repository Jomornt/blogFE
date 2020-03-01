import React, { Component, Fragment } from 'react'
import { Icon, Modal, Input, Button } from 'antd'
import {
  CommentsWrapper,
  CommentsReplyItem,
  ReplyItemChildren,
  CommentsContent,
  LRWrapper
} from './CommentsStyle'
import {toJS} from "mobx"
import { observer } from 'mobx-react';
import CtPagination from '../CtPagination/index';
import LRContainer from '../LRContainer/LRContainer';
import cookies from 'react-cookies';
import CommentStore from '../stores/CommentStore';


@observer
class Comments extends Component {
  constructor(props) {
    super(props)
    this.state= {
      replyVisible: false,
      hasLogin: Boolean(cookies.load('token')),
      modalVisible: false,
      isLogin: true,
    }
  }
  pageChange = (current) => {
    // ArticleStore.getArticleList(current) 

    // console.log('222' + current +'11'+ ArticleStore.loading )
  }
  handleReplyClick = () => {
    this.setState({
      replyVisible: !this.state.replyVisible
    })
  }
  handleAddCommentClick = () => {
    CommentStore.addComment()
  }
  handleModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  handleLoginSuccess = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      hasLogin: true
    })
  }
  handleLogout = () => {
    cookies.remove('token')
    this.setState({
      hasLogin: false
    })
  }
  render() {
    return (
      <CommentsWrapper>
        <div className="comments-input">
          <div className="user-info">
            {
              this.state.hasLogin ?
              <Fragment>
                <div className="default-avatar">头</div>
                这里是用户名
                <span className="btn-base btn-quit" onClick={this.handleLogout}>注销</span>
              </Fragment>:
              <Fragment>
                <div className="default-avatar">登</div>
                <Icon type="caret-right" />
                <div className="login-ways">
                  <Icon type="wechat" className="wechat"/>
                  <Icon type="qq" />
                  <Icon type="weibo" />
                  <Icon type="mail" onClick={this.handleModalVisible}/>
                </div>
              </Fragment>
            }  
          </div>
          <CommentsContent visible={true}>
            <textarea className="comment-content" />
            <span className="btn-base btn-submit">发表评论</span>
          </CommentsContent>
        </div>
        <div className="comments-reply">
          <h3 className="comment-reply-title">全部评论</h3>
          <CommentsReplyItem>
            <div className="item-top">
              <img />
              <div>
                <div className="item-top-userinfo-name">重要测试</div>
                <div className="item-top-userinfo-time">2020-01-09 12:54</div>
              </div>
              <div className="btn-base btn-reply" onClick={this.handleReplyClick}>
                {this.state.replyVisible ? "取 消" : "回 复"}
              </div>
            </div>
            <div className="item-content">
              数据库保存的是经过加密的，得到数据库也无法破解。其实这类安全软件最大的问题就是：泄漏了主密码，就等于全部密码泄露了。所以主密码也得够复杂，然后加上二步验证。
            </div>
            <CommentsContent visible={this.state.replyVisible}>
              <textarea className="comment-content" />
              <span className="btn-base btn-submit" onClick={this.handleAddCommentClick}>发表评论</span>
            </CommentsContent>
          </CommentsReplyItem>
          <ReplyItemChildren>
            <div className="item-top">
              <img />
              <div>
                <div className="item-top-userinfo-name">安wwwww全</div>
                <div className="item-top-userinfo-time">2020-01-09 12:54</div>
              </div>
              <div className="btn-base btn-reply">回 复</div>
            </div>
            <div className="item-content">
              数据库保存的是经过加密的，得到数据库也无法破解。其实这类安全软件最大的问题就是：泄漏了主密码，就等于全部密码泄露了。所以主密码也得够复杂，然后加上二步验证。
            </div>
          </ReplyItemChildren>
          <ReplyItemChildren>
            <div className="item-top">
              <img />
              <div>
                <div className="item-top-userinfo-name">安wwwww全</div>
                <div className="item-top-userinfo-time">2020-01-09 12:54</div>
              </div>
              <div className="btn-base btn-reply">回 复</div>
            </div>
            <div className="item-content">
              <span>@llllbai同学</span> 数据库保存的是经过加密的主s
            </div>
            <CommentsContent>
              <textarea className="comment-content" />
              <span className="btn-base btn-submit">发表评论</span>
            </CommentsContent>
          </ReplyItemChildren>
          <CommentsReplyItem>
            <div className="item-top">
              <img />
              <div>
                <div className="item-top-userinfo-name">安全</div>
                <div className="item-top-userinfo-time">2020-01-09 12:54</div>
              </div>
              <div className="btn-base btn-reply">回 复</div>
            </div>
            <div className="item-content">
              数据库保存的是经过加密的，得到数据库也无法破解。其实这类安全软件最大的问题就是：泄漏了主密码，就等于全部密码泄露了。所以主密码也得够复杂，然后加上二步验证。
            </div>
          </CommentsReplyItem>
        </div>
        <CtPagination
          total={56}
          pageSize={10}
          pageChange={this.pageChange}
        />
        <Modal
          footer={null}
          title={null}
          visible={this.state.modalVisible}
          onCancel={this.handleModalVisible}
        >
          <LRContainer visibleChange={this.handleLoginSuccess}/>
        </Modal>
      </CommentsWrapper>
    )
  }
}

export default Comments;