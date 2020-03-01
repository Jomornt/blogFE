import styled from 'styled-components'

export const HomePageWrapper = styled.div `
  /* background: white; */
`
export const ArticleItem = styled.div `
  position: relative;
  background: white;
  margin-bottom: 12px;
  padding: 20px 20px;
  text-align: right;
  .article-item-title {
    text-align: left;
    font-size: 24px;
    margin-bottom: 12px;
  }
  .article-item-time {
    position: absolute;
    right: 16px;
    font-size: 12px;
  }
  .ant-typography-ellipsis {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    color: #5f5f5f;
  }
  .more-btn {
    height: 32px;
    line-height: 30px;
    padding: 0 8px;
    margin-top: 8px;
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
`

export const Tag = styled.div `
  display: inline-block;
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
  border: 1px solid orangered;
  border-radius: 4px;
`