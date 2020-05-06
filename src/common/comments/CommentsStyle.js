import styled from 'styled-components'

export const CommentsWrapper = styled.div `
  background: white;
  padding: 24px 24px;
  width: 100%;
  .btn-base {
    margin-left: auto;
    border: 1px solid #212121;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    :hover {
      border: 1px solid orangered;
      box-shadow: 0 0 2px 1px orangered;
      color: orangered;
    }
  }
  img {
    width: 40px;
    height: 40px;
    background: #eee;
    border-radius: 50%;
    margin-right: 16px;
  }
  .comments-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    .default-avatar {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 24px;
      color: white;
      background: tomato;
      border-radius: 50%;
      margin-right: 8px;
      user-select: none;
    }
    .login-ways {
      .anticon {
        font-size: 32px;
        margin: 0 8px;
        cursor: pointer;
      }
      .anticon-wechat {
        color: rgb(81, 195, 50);
      }
      .anticon-qq {
        color: rgb(27, 193, 250);
      }
      .anticon-weibo {
        color: rgb(211, 32, 36);
      }
      .anticon-mail {
        color: rgb(224, 183, 7);
      }
    }
    .user-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      .btn-quit {
        border-radius: 4px;
        font-size: 14px;
        padding: 4px 8px;
      }
    }
  }
  .comments-reply {
    margin-bottom: 44px;
    .comment-reply-title {
      border-left: 4px solid orangered;
      padding-left: 16px;
      margin-bottom: 24px;
    }
  }
`

export const CommentsContent = styled.div`
  text-align: right;
  margin-bottom: 24px;
  display: ${ props => props.visible ? '' : 'none' };
  .comment-content {
    background: #f7f7f7;
    width: 100%;
    height: 160px;
    margin: 16px 0;
    border: 1px solid #212121;
    outline: none;
    padding: 12px 16px;
    :focus {
      border: none;
      box-shadow: 0 0 3px 1px orangered;
    }
  }
  .btn-submit {
    padding: 6px 8px;
  }
  
`

export const CommentsReplyItem = styled.div`
  margin-bottom: 16px;
  .item-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    .item-top-userinfo-name {
      margin-bottom: 4px;
      font-size: 14px;
      color: #414141;
    }
    .item-top-userinfo-time {
      font-size: 12px;
      color: #999;
    }
  }
  .btn-reply {
    padding: 4px 8px;
    font-size: 12px;
    font-weight: bold;
    border: 2px solid #212121;
    :hover {
      border: 2px solid orangered;
      box-shadow: none;
    }
  }
  .item-content {
    font-size: 14px;
    line-height: 24px;
    color: #4a4a4a;
    border-bottom: 1px solid #ddd;
    padding: 0 4px 12px;
  }
`
export const ReplyItemChildren = styled(CommentsReplyItem)`
  margin-left: 48px;
  .item-content {
    span {
      color: orangered;
    }
  }
`

export const UploadWrapper = styled.div`
  .avatar-uploader {
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-upload {
      width: 200px;
      height: 200px;
    }
  }
`