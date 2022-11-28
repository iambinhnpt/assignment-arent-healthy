import React from 'react'
import { Container, Link, Text, Wrapper, WrapperContent } from './styles'

const Footer = () => {
  return (
    <Container>
      <WrapperContent>
        <Wrapper flexDirection='row' justifyContent='flex-start' alignItems='center'>
          <Link display='flex' fontSize='11px' padding='5px'>
            <Text>会員登録</Text>
          </Link>
          <Link display='flex' fontSize='11px' padding='5px'>
            <Text>運営会社</Text>
          </Link>
          <Link display='flex' fontSize='11px' padding='5px'>
            <Text>利用規約</Text>
          </Link>
          <Link display='flex' fontSize='11px' padding='5px'>
            <Text>個人情報の取扱について</Text>
          </Link>
          <Link display='flex' fontSize='11px' padding='5px'>
            <Text>特定商取引法に基づく表記</Text>
          </Link>
          <Link display='flex' fontSize='11px' padding='5px'>
            <Text>お問い合わせ</Text>
          </Link>
        </Wrapper>
      </WrapperContent>
    </Container>
  )
}

export default Footer
