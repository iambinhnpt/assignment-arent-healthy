import {
  BlockBox,
  BlockBoxImg,
  BottomLeft,
  Button,
  Container,
  Table,
  Text,
  TopLeft,
  Wrapper,
  WrapperContent,
} from './styles'
import imgMyRecommend1 from '../../assets/MyRecommend-1.jpg'
import imgMyRecommend2 from '../../assets/MyRecommend-2.jpg'
import imgMyRecommend3 from '../../assets/MyRecommend-3.jpg'
import MultiLineChart from '../../components/MultiLineChart'
import { Scrollbars } from 'react-custom-scrollbars'
import TableComponent from '../../components/Table'

function Record() {
  const dataMultiLineChart = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [
      {
        data: [200, 197, 170, 185, 170, 150, 170, 147, 135, 130, 125, 130],
        borderColor: 'rgb(255, 204, 33)',
        backgroundColor: 'rgb(255, 204, 33)',
        yAxisID: 'y',
      },
      {
        data: [200, 190, 170, 165, 140, 135, 120, 115, 110, 105, 103, 100],
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
        yAxisID: 'y1',
      },
    ],
  }
  const scrollBarStyle = {
    border: '1px solid red',
    width: 'auto',
    height: '264px',
  }

  return (
    <Container>
      <WrapperContent>
        <Wrapper flexDirection='row' justifyContent='space-between' margin='30px 0'>
          <BlockBoxImg
            backgroundImage={imgMyRecommend1}
            border='24px solid #FFCC21'
            width='288px'
            height='288px'
          >
            <Wrapper
              alignItems='center'
              justifyContent='center'
              width='100%'
              height='100%'
              zIndex='1'
            >
              <Text fontSize='25px' color='#FFCC21'>
                BODY RECORD
              </Text>
              <Button width='160px' height='20px'>
                自分のカラダの記録
              </Button>
            </Wrapper>
          </BlockBoxImg>
          <BlockBoxImg
            backgroundImage={imgMyRecommend2}
            border='24px solid #FFCC21'
            width='288px'
            height='288px'
          >
            <Wrapper
              alignItems='center'
              justifyContent='center'
              width='100%'
              height='100%'
              zIndex='1'
            >
              <Text fontSize='25px' color='#FFCC21'>
                MY EXERCISE
              </Text>
              <Button width='160px' height='20px'>
                自分の運動の記録
              </Button>
            </Wrapper>
          </BlockBoxImg>
          <BlockBoxImg
            backgroundImage={imgMyRecommend3}
            border='24px solid #FFCC21'
            width='288px'
            height='288px'
          >
            <Wrapper
              alignItems='center'
              justifyContent='center'
              width='100%'
              height='100%'
              zIndex='1'
            >
              <Text fontSize='25px' color='#FFCC21'>
                MY DIARY
              </Text>
              <Button width='160px' height='20px'>
                自分の日記
              </Button>
            </Wrapper>
          </BlockBoxImg>
        </Wrapper>
        <BlockBox
          width='100%'
          height='316px'
          backgroundColors='#414141'
          padding='50px'
          margin='0 0 30px'
        >
          <MultiLineChart data={dataMultiLineChart} />
          <TopLeft width='25%'>
            <Wrapper flexDirection='row' justifyContent='space-between'>
              <Wrapper>
                <Text fontSize='15px'>BODY</Text>
                <Text>RECORD</Text>
              </Wrapper>
              <Text fontSize='22px'>2021.05.21</Text>
            </Wrapper>
          </TopLeft>
          <BottomLeft width='30%'>
            <Wrapper flexDirection='row'>
              {['日', '週', '月', '年'].map((item, index) => {
                return (
                  <Button width='56px' height='24px' key={'btn' + index}>
                    {item}
                  </Button>
                )
              })}
            </Wrapper>
          </BottomLeft>
        </BlockBox>

        <BlockBox margin='0 0 30px' backgroundColors='#414141' padding='80px 0 30px'>
          <TopLeft width='25%'>
            <Wrapper flexDirection='row' justifyContent='space-between'>
              <Wrapper>
                <Text fontSize='15px'>BODY</Text>
                <Text>RECORD</Text>
              </Wrapper>
              <Text fontSize='22px'>2021.05.21</Text>
            </Wrapper>
          </TopLeft>
          <TableComponent />
        </BlockBox>

        <BlockBox>
          <BlockBox padding='30px 0 10px'>
            <Text fontSize='22' color='#414141'>
              MY DIARY
            </Text>
          </BlockBox>
          <Wrapper flexDirection='row' justifyContent='space-between'>
            {[...Array(8)].map((item, index) => {
              return (
                <BlockBox
                  border='2px solid #707070'
                  width='231px'
                  height='231px'
                  key={'key' + index}
                  margin={index % 4 === 0 ? '6px 0' : '6px 0 6px 12px '}
                  padding='20px'
                >
                  <Wrapper
                    alignItems='flex-start'
                    justifyContent='center'
                    width='100%'
                    height='100%'
                  >
                    <Text fontSize='18px' color='#414141'>
                      2021.05.21 <br /> 23:25
                    </Text>
                    <Text fontSize='12px' color='#414141'>
                      私の日記の記録が一部表示されます。
                      <br />
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                    </Text>
                  </Wrapper>
                </BlockBox>
              )
            })}
          </Wrapper>
        </BlockBox>
        <BlockBox padding='30px 0'>
          <Button width='296px' height='56px'>
            自分の日記をもっと見る
          </Button>
        </BlockBox>
      </WrapperContent>
    </Container>
  )
}

export default Record
