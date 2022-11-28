import styled from 'styled-components'
import { PageItemWrapper } from '../helpers/ItemWrapper'
import { PageLink } from '../helpers/PageLink'
import { PageText } from '../helpers/PageText'

export const Container = styled.div`
  display: block;
  color: white;
  background-color: #414141;
  padding: 50px 0;
`
export const WrapperContent = styled.div`
  display: block;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`
export const Text = styled(PageText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
`

export const Link = styled(PageLink)`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  border: 1px solid #414141;
  cursor: pointer;
  margin-left: 2em;
  &:hover,
  &.active {
    * {
      color: #ff963c;
    }
  }
`

export const Wrapper = styled(PageItemWrapper)`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  padding: 0.1em;
  cursor: pointer;
  border: 1px solid #414141;

  @media (max-width: 850px) {
    display: none;
  }
`
