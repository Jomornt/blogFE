import styled from 'styled-components'

export const ArticlePageWrapper = styled.div `
  width: 100%;
  .article {
    background: white;
    padding: 24px;
    margin-bottom: 24px;
    font-size: 14px;
    img {
      width: 800px;
    }
    ol, ul {
      padding-left: 4px;
      margin-left: 16px; 
      list-style: disc outside none;
      li {
        list-style-type: circle;
        line-height: 1.5;
      }
    }
    h4 {
      font-size: 18px;
      font-weight: bold;
    }
    h5 {
      font-size: 14px;
      font-weight: bold;
      margin: 14px 0 16px;
    }
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .tags {
        i {
          color: #969696;
        }
        span {
          margin-left: 4px;
        }
      }
      .article-operation {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #eee;
        cursor: pointer;
        i {
          color: #969696;
          font-size: 20px;
        }
      }
      .article-like-active {
        border: 1px solid orangered;
        i {
          color: orangered;
        }
      }
    }
  }
`