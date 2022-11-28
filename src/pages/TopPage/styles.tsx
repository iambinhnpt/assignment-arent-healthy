import { url } from 'inspector'
import styled from 'styled-components'
import { PageItemWrapper } from '../../components/helpers/ItemWrapper'
import { BlockWrapper } from '../../components/helpers/Block'
import { PageLink } from '../../components/helpers/PageLink'
import { PageText } from '../../components/helpers/PageText'
import { CenterBox } from '../../components/helpers/CenterBox'

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-top: 54.4px;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  background-color: #f2f2f2;
`
export const Icon = styled.img`
  width: 2em;
  margin-bottom: 0.5em;
  padding: 0.1em;
`
export const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  padding: 0.1em;
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
  flex-wrap: wrap;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: 0.1em;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`

export const BlockBox = styled(BlockWrapper)`
  position: relative;
  background: ${(props) =>
    props.backgroundImage
      ? `url(${props.backgroundImage}) no-repeat center center`
      : props.backgroundColors
      ? props.backgroundColors
      : 'transparent'};
  background-size: cover;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`
export const Center = styled(CenterBox)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const LabelImageBox = styled.div`
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ffcc21;
  color: #fff;
  padding: 5px 10px;
`
export const Button = styled(Link)`
  display: block;
  text-align: center;
  background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);

  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  border: 1px solid #414141;
  cursor: pointer;
  width: 296px;
  padding: 14px 0;
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  &:hover,
  &.active {
    * {
      color: #ff963c;
    }
  }
`
