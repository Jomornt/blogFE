import styled from 'styled-components'

export const DownloadPageWrapper = styled.div `
  width: 100%;
  .ant-card-body {
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 100px;
    }
  }
  .add-button {
    width: 100px;
    height: 100px;
    background: white;
    font-size: 56px;
    border-radius: 4px;
    line-height: 100px;
    text-align: center;
    color: #414141;
    border: 2px solid #414141;
    user-select: none;
    cursor: pointer;
    :hover {
      border: 2px solid orangered;
      color: orangered;
    }
  }
  .add-button-wrapper {
    justify-content: center;
    height: 278px;
    display: flex !important;
    border: 2px solid #e8e8e8;
    box-sizing: border-box;
    background: #ffffff7a;
  }
`