import styled from 'styled-components'
import { PageLink } from '../helpers/PageLink'

export const Link = styled(PageLink)`
  display: block;
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 2em;
  }
  &:hover,
  &.active {
    transform: scale(0.99);
    & > span {
      background: linear-gradient(-90deg, #ffcc21 8.26%, #ff963c 91.18%);
      &:before {
        background: linear-gradient(-90deg, #ffcc21 8.26%, #ff963c 91.18%);
      }
      &:after {
        background: linear-gradient(90deg, #ffcc21 8.26%, #ff963c 91.18%);
      }
    }
  }
`
export const Hex = styled.span`
  margin: 30px 0;
  width: 134px;
  height: 60px;
  background: linear-gradient(90deg, #ffcc21 8.26%, #ff963c 91.18%);
  border-color: #ffcc21;
  position: relative;
  display: inline-block;

  &:before {
    content: ' ';
    width: 134px;
    height: 30px;
    background: linear-gradient(90deg, #ffcc21 8.26%, #ff963c 91.18%);
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    position: absolute;
    top: -29px;
  }
  &:after {
    content: '';
    width: 134px;
    height: 30px;
    background: linear-gradient(-90deg, #ffcc21 8.26%, #ff963c 91.18%);
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    position: absolute;
    left: 0;
    bottom: -30px;
    transform: rotate(180deg);
  }
`
