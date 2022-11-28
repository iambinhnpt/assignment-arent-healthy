import styled from 'styled-components'
import { PageText as NavText } from '../helpers/PageText'
import { PageItemWrapper as NavItemWrapper } from '../helpers/ItemWrapper'
import { PageLink } from '../helpers/PageLink'

export const Container = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: fit-content;
  color: white;
  background-color: #414141;
  z-index: 10;
`
export const WrapperContent = styled.div`
  display: block;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`
export const Logo = styled.img`
  width: 6em;
  border: 1px solid #414141;
  padding: 0.2em 0.1em;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 0.2em;
  }
`
export const Icon = styled.img`
  width: 2em;
  margin-right: 0.5em;
  border: 1px solid #414141;
  padding: 0.1em;
`
export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
`

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  padding: '5px';
  color: '#ffffff';
  font-size: 1em;
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

export const Wrapper = styled(NavItemWrapper)`
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
