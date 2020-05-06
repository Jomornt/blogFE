import styled from 'styled-components'

export const SiderWrapper = styled.div `
  margin-left: 32px;
  width: 272px;
`
export const SearchWrapper = styled.input `
  width: 100%;
  height: 40px;
  padding: 0 16px;
  margin-bottom: 24px;
  font-size: 14px;
  border: none;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  :focus {
    box-shadow: 0 0 3px 1px orangered;
  }
`
export const SiderCard = styled.div `
  background: white;
  margin-bottom: 24px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  .ant-btn-sm {
    color: orangered !important;
    border-color: orangered !important;
    position: absolute;
    right: 16px;
    top: 16px;
  }
  h3 {
    border-bottom: 1px solid #ddd;
    height: 56px;
    line-height: 56px;
    padding: 0 16px;
  }
  .tagswrapper {
    padding: 16px 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .tag {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #414141;
      line-height: 22px;
      height: 24px;
      font-size: 12px;
      margin: 4px 8px;
      padding: 0 4px;
      user-select: none;
      cursor: pointer;
      :hover {
        border: 1px solid orangered;
        color: orangered;
      }
    }
  }
  ul {
    padding: 12px 16px;
    font-size: 14px;
    color: #999;
    li {
      margin: 8px 0;
      cursor: pointer;
      a {
        color: #999;
        :hover {
          color: orangered;
        }
      }
      i {
        margin-right: 8px;
      }
      :hover {
        color: orangered;
      }
    }
  }
`
export const ContactBox = styled.div `
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  i {
    cursor: pointer;
    /* pointer-events: none; */
    z-index: 100;
    path {
      pointer-events: none;
    }
    :hover {
      color: orangered;
    }
  }
  a {
    color: inherit;
  }
  .anticon {
    font-size: 28px;
    line-height: 20px;
  }
`
export const WebInformation = styled.div `
  padding: 20px 16px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  font-size: 12px;
  line-height: 20px;
  color: #999;
`