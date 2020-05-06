import styled from 'styled-components'

export const HeaderWrapper = styled.div `
  border-top: 8px solid #414141;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  .header-content {
    width: 1200px;
    height: 56px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      width: 180px;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    a {
      margin-left: 24px;
      cursor: pointer;
      color: #414141;
      :hover {
        color: orangered;
      }
    }
  }
`