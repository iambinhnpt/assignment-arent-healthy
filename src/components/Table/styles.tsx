import { url } from 'inspector'
import styled from 'styled-components'
import { PageItemWrapper } from '../../components/helpers/ItemWrapper'
import { BlockWrapper } from '../../components/helpers/Block'
import { PageLink } from '../../components/helpers/PageLink'
import { PageText } from '../../components/helpers/PageText'
import { CenterBox } from '../../components/helpers/CenterBox'

export const Text = styled(PageText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
`

export const Wrapper = styled(PageItemWrapper)`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  flex-wrap: wrap;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  position: ${(props) => (props.position ? props.position : 'relative')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 'unset')};
  padding: 0.1em;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`
export const Table = styled.table`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* &::-webkit-scrollbar {
    display: none;
  } */

  tbody {
    width: 50%;
    padding: 20px;
  }
  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    position: relative;
    &::before {
      content: '.';
      position: absolute;
      left: 0;
      top: 0px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
    border-bottom: 1px solid #eee;
  }
`
