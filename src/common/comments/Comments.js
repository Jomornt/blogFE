import React, { Component, Fragment } from 'react'
import { Icon, Modal, Upload, message } from 'antd'
import {
  CommentsWrapper,
  CommentsReplyItem,
  ReplyItemChildren,
  CommentsContent,
  UploadWrapper
} from './CommentsStyle'
import { observer } from 'mobx-react';
import CtPagination from '../CtPagination/index';
import LRModal from '../LRModal/LRModal';
import cookies from 'react-cookies';
import CommentStore from '../stores/CommentStore';
import AuthStore from '../stores/AuthStore';
import {toJS} from "mobx"
import moment from 'moment'

@observer
class Comments extends Component {
  constructor(props) {
    super(props)
    this.state= {
      replyVisible: {},
      imageUrl: "",
      textarea: "",
      replyText: {},
      uploadVisible: false,
      uploading: false,
    }
  }
  componentDidMount() {
    CommentStore.getComments(2, this.props.articleid)
  }
  pageChange = (current) => {
    // ArticleStore.getArticleList(current) 

    // console.log('222' + current +'11'+ ArticleStore.loading )
  }
  handleReplyBtnClick = (id) => {
    let newVisible = {...this.state.replyVisible}
    newVisible[id] = !newVisible[id]
    this.setState({
      replyVisible: {...newVisible}
    })
  }
  handleAddCommentClick = () => {
    if(!cookies.load("token")) {
      AuthStore.setLRModalVisible()
      return;
    }
    CommentStore.addComment(2, this.state.textarea, this.props.articleid)
    this.setState({
      textarea: ""
    })
  }
  addReply = (id, parent, replyto) => {
    CommentStore.addReply(this.state.replyText[id], parent, replyto, 2, this.props.articleid).then((res) => {
      if(res) {
        this.handleReplyBtnClick(id)
      }
    })
  }
  handleReplyTextarea = (value, id) => {
    let newText = {...this.replyText}
    newText[id] = value;
    this.setState({
      replyText: {...newText}
    })
  }
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传 JPG 或 PNG 格式的图片!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片文件大小应当小于 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  handleChange = info => {
    console.log(info.file.status)
    if (info.file.status === 'uploading') {
      this.setState({ uploading: true });
      return;
    }
    if (info.file.status === 'done') {
      let _this = this
      this.getBase64(info.file.originFileObj, imageUrl =>
        _this.setState({
          imageUrl,
          uploading: false,
        }),
      );
    }
  };
  handleUploadModalVisible = () => {
    this.setState({
      uploadVisible: !this.state.uploadVisible,
      imageUrl: '',
    })

  }
  renderCommentsList = () => {
    return toJS(CommentStore.commentsList).map((comment) => {
        return  <Fragment>
          <CommentsReplyItem>
            <div className="item-top">
              <img onClick={() => this.setState({uploadVisible: !this.state.uploadVisible})}/>
              <div>
                <div className="item-top-userinfo-name">{comment.author.first_name}</div>
                <div className="item-top-userinfo-time">{moment(comment.created_time).format("YYYY-MM-DD HH:mm")}</div>
              </div>
              <div className="btn-base btn-reply" onClick={() => this.handleReplyBtnClick(`comment-${comment.id}`)}>
                {this.state.replyVisible[`comment-${comment.id}`] ? "取 消" : "回 复"}
              </div>
            </div>
            <div className="item-content">
              {comment.content}
            </div>
            <CommentsContent visible={this.state.replyVisible[`comment-${comment.id}`]}>
              <textarea
                className="comment-content"
                onChange={(e) => this.handleReplyTextarea(e.target.value, `comment-${comment.id}`)}
                value={this.state.replyText[`comment-${comment.id}`]}
              />
              <span className="btn-base btn-submit" onClick={() => this.addReply(`comment-${comment.id}`, comment.id, comment.author.id)}>发表评论</span>
            </CommentsContent>
          </CommentsReplyItem>
          {this.renderCommentsReplyList(comment.child_replys, comment.id)}
        </Fragment>
    }) 
  }
  renderCommentsReplyList = (replys, parent) => (
    replys.map(reply => 
      <ReplyItemChildren>
        <div className="item-top">
          <img onClick={() => this.setState({uploadVisible: !this.state.uploadVisible})}/>
          <div>
            <div className="item-top-userinfo-name">{reply.author.first_name}</div>
            <div className="item-top-userinfo-time">{moment(reply.created_time).format("YYYY-MM-DD HH:mm")}</div>
          </div>
          <div className="btn-base btn-reply" onClick={() => this.handleReplyBtnClick(`reply-${reply.id}`)}>
            {this.state.replyVisible[`reply-${reply.id}`] ? "取 消" : "回 复"}
          </div>
        </div>
        <div className="item-content">
          <span>@{reply.reply_to.first_name}</span> {reply.content}
        </div>
        <CommentsContent visible={this.state.replyVisible[`reply-${reply.id}`]}>
          <textarea
            className="comment-content"
            onChange={(e) => this.handleReplyTextarea(e.target.value, `reply-${reply.id}`)}
            value={this.state.replyText[`reply-${reply.id}`]}
          />
          <span className="btn-base btn-submit" onClick={() => this.addReply(`reply-${reply.id}`, parent, reply.author.id)}>发表评论</span>
        </CommentsContent>
      </ReplyItemChildren>
    )
  )
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.uploading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <CommentsWrapper>
        <div className="comments-input">
          <div className="user-info">
            {
              AuthStore.isLogin ?
              <Fragment>
                <div onClick={() => this.setState({uploadVisible: !this.state.uploadVisible})} className="default-avatar">头</div>
                {AuthStore.firstname}
                <span className="btn-base btn-quit" onClick={AuthStore.loginout}>注销</span>
              </Fragment>:
              <Fragment>
                <div className="default-avatar">登</div>
                <Icon type="caret-right" />
                <div className="login-ways">
                  {/* <Icon type="wechat" className="wechat"/>
                  <Icon type="qq" /> */}
                  <Icon type="weibo" />
                  <Icon type="mail" onClick={AuthStore.setLRModalVisible}/>
                </div>
              </Fragment>
            }  
          </div>
          <CommentsContent visible={true}>
            <textarea className="comment-content" onChange={(e) => this.setState({"textarea": e.target.value})} value={this.state.textarea}/>
            <span className="btn-base btn-submit" onClick={this.handleAddCommentClick}>发表评论</span>
          </CommentsContent>
        </div>
        <div className="comments-reply">
          <h3 className="comment-reply-title">全部评论</h3>
          { this.renderCommentsList() }
        </div>
        <LRModal visibleChange={this.handleLoginSuccess}/>
        <Modal
          visible={this.state.uploadVisible}
          onCancel={this.handleUploadModalVisible}
        >
          <UploadWrapper>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={this.beforeUpload}
              onChange={this.handleChange}
            >
              {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </UploadWrapper>
        </Modal>
      </CommentsWrapper>
    )
  }
}

export default Comments;