import styled from 'styled-components'

export const Button = styled.div`
  position: fixed;
  width: 20px;
  right: 10%;
  bottom: 40px;
  height: 20px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const ArrowCircleUp = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #333;
  position: relative;
  background: #fff;

  &::before {
    content: ' ';
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    left: 53%;
    top: 66%;
    transform-origin: left;
    translate: -50% -50%;
    rotate: -45deg;
  }
`
