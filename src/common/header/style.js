import styled from 'styled-components'

export const HeaderWrapper = styled.div `
  border-top: 4px solid #414141;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  .header-content {
    width: 1312px;
    height: 56px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    li {
      margin-left: 24px;
      cursor: pointer;
      :hover {
        color: orangered;
      }
    }
  }
`