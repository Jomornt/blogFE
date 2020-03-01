import styled from 'styled-components'

export const LRWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title-base {
    display: inline-block;
    border-bottom: 2px solid transparent;
    margin-bottom: 32px;
    cursor: pointer;
    width: 56px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    font-size: 18px;
    color: #999;
  }
  .title-active {
    border-bottom: 2px solid orangered;
    color: #414141;
  }
  b {
    margin: 0 16px;
  }
  .ant-input-affix-wrapper {
    margin-top: 24px;
  }
  .forget-password {
    font-size: 12px;
    color: #999;
    width: 100%;
    text-align: right;
    margin-top: 8px;
    cursor: pointer;
    :hover {
      color: orangered;
    }
  }
  .btn-base {
    cursor: pointer;
    user-select: none;
    font-size: 18px;
    background: orangered;
    width: 100%;
    height: 40px;
    color: white;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    margin-top: 32px;
  }
`
