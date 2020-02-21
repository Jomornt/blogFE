import styled from 'styled-components'

export const ArticlePageWrapper = styled.div `
  .article {
    background: white;
    padding: 24px;
    margin-bottom: 24px;
    .article-top {
      border-bottom: 1px solid #ddd;
      margin-bottom: 24px;
      height: 40px;
      .article-top-info {
        font-size: 12px;
        color: #999;
        line-height: 20px;
      }
    }
    .article-bottom {
      margin-top: 24px;
      span {
        font-size: 14px;
        margin: 0 16px 0 4px;
      }
      .article-like {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background: #eee;
      }
      .article-award {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background: #eee;
      }
      .article-share {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background: #eee;
        margin-right: auto;
      }
    }
  }
  .comment {
    background: white;
    padding: 24px 24px;
    text-align: right;
    .user-info {
      display: flex;
      flex-direction: row;
      width: 100%;
      img {
        width: 40px;
        height: 40px;
        background: #eee;
        border-radius: 50%;
      }
      .user-detail {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        align-items: center;
        input {
          width: 200px;
          background: #f7f7f7;
          line-height: 32px;
          height: 32px;
          padding: 0 8px;
          font-weight: 340;
          color: #999;
          font-size: 14px;
          border: 1px solid #ddd;
          outline: none;
          :first-child {
            margin-right: 10px;
          }
          :focus {
            border: none;
            box-shadow: 0 0 3px 1px orangered;
          }
        }
      }
    }
    .comment-content {
      background: #f7f7f7;
      display: block;
      width: 100%;
      height: 160px;
      margin-top: 16px;
      margin-bottom: 16px;
      border: 1px solid #212121;
      outline: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      :focus {
        border: none;
        box-shadow: 0 0 3px 1px orangered;
      }
    }
    .submit-btn {
      display: inline-block;
      height: 32px;
      line-height: 30px;
      padding: 0 8px;
      color: #414141;
      background: transparent;
      border: 1px solid #414141;
      cursor: pointer;
      margin-bottom: 32px;
      :hover {
        border: 1px solid orangered;
        color: orangered;
      }
    }
  }
  .comment-title {
    text-align: left;
    border-left: 4px solid orangered;
    font-size: 18px;
    padding-left: 16px;
    margin-bottom: 24px;
  }
  .vistor-comment {
    .vistor-comment-item {
      margin-top: 16px;
      .vistor-comment-item-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 8px;
        img {
          width: 40px;
          height: 40px;
          background: #eee;
          border-radius: 50%;
          margin-right: 16px;
        }
        .vistor-comment-item-top-userinfo {
          .vistor-comment-item-top-userinfo-name {
            margin-bottom: 4px;
            font-size: 14px;
            color: #414141;
            text-align: left;
          }
          .vistor-comment-item-top-userinfo-time {
            font-size: 12px;
            color: #999;
          }
        }
        .vistor-comment-item-btn {
          display: inline-block;
          height: 24px;
          line-height: 24px;
          padding: 0 4px;
          color: #212121;
          background: transparent;
          border: 2px solid #212121;
          cursor: pointer;
          margin-left: auto;
          font-size: 14px;
          :hover {
            border: 2px solid orangered;
            color: orangered;
          }
        }
      }
      .vistor-comment-content {
        font-size: 14px;
        line-height: 24px;
        color: #4a4a4a;
        text-align: left;
        padding-bottom: 16px;
        border-bottom: 1px solid #ddd;
        padding: 0 4px 16px;
      }
      .vistor-comment-item-replay {
        margin-left: 40px;
        padding-left: 16px;
      }
    }

  }
`