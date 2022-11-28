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

export const WrapperContent = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px 0;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
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

export const BlockBoxImg = styled(BlockWrapper)`
  position: relative;
  z-index: 0;
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
  border: ${(props) => (props.border ? props.border : 'none')};
  &::after {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
  }
`

export const BlockBox = styled(BlockWrapper)`
  position: relative;
  z-index: 0;
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
  border: ${(props) => (props.border ? props.border : 'none')};
`
export const Center = styled(CenterBox)`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`
export const TopLeft = styled(CenterBox)`
  position: absolute;
  z-index: 1;
  left: 15%;
  top: 9%;
  padding: 20px;
  transform: translate(-50%, -50%);
  text-align: center;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`
export const BottomLeft = styled(CenterBox)`
  position: absolute;
  z-index: 1;
  left: 15%;
  bottom: -15%;
  padding: 20px;
  transform: translate(-50%, -50%);
  text-align: center;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`
export const Button = styled(PageLink)`
  display: block;
  text-align: center;
  background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  line-height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  border: 1px solid #414141;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  margin-top: 20px;
  &:hover,
  &.active {
    background: #fff;
    color: #ff963c;
    * {
      color: #ff963c;
    }
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
