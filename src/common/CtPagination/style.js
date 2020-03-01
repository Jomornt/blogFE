import styled from 'styled-components'

export const CtPaginationWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 32px;
  line-height: 28px;
  text-align: center;
  user-select: none;
  .page-btn-active {
    background: #414141;
    color: white;
    cursor: pointer;
    padding: 0 8px;
    border: 2px solid #212121;
    :first-of-type {
      margin-right: 16px;
    }
    :last-of-type {
      margin-left: 16px;
    }
    :hover {
      color: orangered;
      border: 2px solid orangered;
      background: transparent;
    }
  }
  .page-btn-inactive {
    cursor: default;
    color: white !important;
    border: 2px solid #ddd !important;
    background: lightgrey !important;
  }
  .page-num {
    width: 32px;
    margin: 0 8px;
    border: 2px solid #414141;
    cursor: pointer;
    :hover {
      color: white;
      border: 2px solid orangered;
      background: orangered;
    }
  }
  .page-num-active {
    color: white;
    border: 2px solid orangered;
    background: orangered;
  }
`