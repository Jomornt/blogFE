import styled from 'styled-components'

export const HomePageWrapper = styled.div `
  /* background: white; */
`
export const ArticleItem = styled.div `
  position: relative;
  background: white;
  margin-bottom: 12px;
  padding: 16px 12px;
  text-align: right;
  .article-item-title {
    text-align: left;
    font-size: 24px;
    margin-bottom: 14px;
  }
  .article-item-time {
    position: absolute;
    right: 16px;
    font-size: 12px;
  }
  p {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    color: #4a4a4a;
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
    cursor: pointer;
    :hover {
      border: 1px solid orangered;
      color: orangered;
    }
  }
`
export const Page = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 32px;
  .page-btn-1 {
    height: 32px;
    line-height: 30px;
    padding: 0 8px;
    background: #414141;
    color: white;
    border: 2px solid #212121;
    margin-right: 16px;
    cursor: pointer;
    :hover {
      color: orangered;
      border: 2px solid orangered;
      background: transparent;
    }
  }
  .page-btn-2 {
    height: 32px;
    line-height: 30px;
    padding: 0 8px;
    background: #414141;
    color: white;
    border: 2px solid #212121;
    margin-left: 16px;
    cursor: pointer;
    :hover {
      color: orangered;
      border: 2px solid orangered;
      background: transparent;
    }
  }
  .page-number {
    height: 32px;
    width: 32px;
    text-align: center;
    margin: 0 8px;
    line-height: 30px;
    border: 2px solid #414141;
    cursor: pointer;
    :hover {
      color: white;
      border: 2px solid orangered;
      background: orangered;
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