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
`