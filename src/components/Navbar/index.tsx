import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Logo, Text, Wrapper, NavLink, WrapperContent, Icon } from './styles'
import logo from '../../assets/logo.svg'
import iconMemo from '../../assets/icon_memo.svg'
import iconChallenge from '../../assets/icon_challenge.svg'
import iconInfo from '../../assets/icon_info.svg'
import iconMenu from '../../assets/icon_menu.svg'

const Navbar: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Container>
        <WrapperContent>
          <Wrapper flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Link to='/'>
              <Logo src={logo} />
            </Link>

            <Wrapper flexDirection='row' justifyContent='flex-end' alignItems='center'>
              <Link to='/record'>
                <NavLink className={pathname === '/record' ? 'active' : ''}>
                  <Icon src={iconMemo} />
                  <Text> 自分の記録</Text>
                </NavLink>
              </Link>
              <Link to='/column'>
                <NavLink className={pathname === '/column' ? 'active' : ''}>
                  <Icon src={iconChallenge} />
                  <Text> チャレンジ</Text>
                </NavLink>
              </Link>
              <Link to='/'>
                <NavLink>
                  <Icon src={iconInfo} />
                  <Text> お知らせ</Text>
                </NavLink>
              </Link>
              <NavLink>
                <Icon src={iconMenu} />
              </NavLink>
            </Wrapper>
          </Wrapper>
        </WrapperContent>
      </Container>
    </>
  )
}

export default Navbar
