import styled from 'styled-components'

export const HomePageWrapper = styled.div `
  display: flex;
  flex-direction: row;
  .left {
    width: 896px;
    .ant-empty {
      background: #ffffffbd;
      padding: 88px;
      margin-bottom: 44px;
    }
  }
`
export const ArticleItem = styled.div `
  position: relative;
  background: white;
  margin-bottom: 16px;
  padding: 20px 20px;
  .article-item-title {
    font-size: 24px;
    margin-bottom: 12px;
    .article-item-title-tags {
      font-size: 14px;
      margin-left: 12px;
      .tag {
        cursor: pointer;
        :hover {
          color: orangered;
        }
      }
      span {
        :first-of-type {
          margin-left: 4px;
        }
        +span::before {
          content: '/';
          margin: 0 2px;
          color: #212121 !important;
        }
      }
    }
  }
  .article-item-time {
    position: absolute;
    right: 16px;
    font-size: 12px;
  }
  .ant-typography-ellipsis {
    font-size: 16px;
    line-height: 24px;
    color: #5f5f5f;
  }
  .article-item-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    i{
      margin-right: 4px;
      :not(:first-child){
        margin-left: 24px;
      }
    }
    .more-btn {
      height: 32px;
      line-height: 30px;
      padding: 0 8px;
      font-size: 14px;
      display: inline-block;
      background: transparent;
      border: 1px solid #414141;
      color: #414141;
      cursor: pointer;
      :hover {
        border: 1px solid orangered;
        color: orangered;
      }
    }
  }
`

export const Tag = styled.div `
  display: inline-block;
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
  border: 1px solid orangered;
  border-radius: 4px;
`