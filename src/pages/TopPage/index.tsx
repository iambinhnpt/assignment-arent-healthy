import React from 'react'
import Navbar from '../../components/Navbar'
import DoughnutChart from '../../components/DoughnutChart'
import {
  BlockBox,
  LabelImageBox,
  Center,
  Container,
  Icon,
  Image,
  Text,
  Wrapper,
  Button,
} from './styles'
// import TopImg1 from '../../assets/d01.jpg'
import MultiLineChart from '../../components/MultiLineChart'
import { HexagonBtn } from '../../components/HexagonBtn'
import iconKnife from '../../assets/icon_knife.svg'
import iconCup from '../../assets/icon_cup.svg'
import imgMorning1 from '../../assets/m01.jpg'
import imgMorning3 from '../../assets/m03.jpg'
import imgMorning2 from '../../assets/m02.jpg'
import imgLunch1 from '../../assets/l01.jpg'
import imgLunch2 from '../../assets/l02.jpg'
import imgLunch3 from '../../assets/l03.jpg'
import imgDinner1 from '../../assets/d01.jpg'
import imgDinner2 from '../../assets/d02.jpg'
import imgSnack1 from '../../assets/s01.jpg'

function TopPage() {
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

  const dataDailyMenu = [
    { img: imgMorning1, label: '05.21.Morning' },
    { img: imgLunch3, label: '05.21.Lunch' },
    { img: imgDinner1, label: '05.21.Dinner' },
    { img: imgLunch1, label: '05.21.Snack' },
    { img: imgMorning1, label: '05.20.Morning' },
    { img: imgLunch2, label: '05.20.Lunch' },
    { img: imgDinner2, label: '05.20.Dinner' },
    { img: imgSnack1, label: '05.20.Snack' },
  ]
  return (
    <Container>
      <Wrapper flexDirection='row'>
        <BlockBox backgroundImage={imgDinner1} width='540px' height='316px'>
          <Center width='180px'>
            <DoughnutChart
              labels={[]}
              labelDatasets='pie chart'
              dataPercent={[75, 25]}
              backgroundColor={['transparent', 'transparent']}
              borderColor={['white', 'transparent']}
            />
          </Center>
          <Center>
            <Text fontSize='18px'>05/21 </Text>
            <Text fontSize='25px'>75%</Text>
          </Center>
        </BlockBox>
        <BlockBox
          width='calc(100% - 540px)'
          height='316px'
          backgroundColors='#414141'
          padding='30px'
        >
          <MultiLineChart data={dataMultiLineChart} />
        </BlockBox>
      </Wrapper>
      <Wrapper flexDirection='row' justifyContent='center' alignItems='center' margin='30px 0'>
        <HexagonBtn>
          <Wrapper alignItems='center'>
            <Icon src={iconKnife} />
            <Text fontSize='20px'>Morning</Text>
          </Wrapper>
        </HexagonBtn>
        <HexagonBtn>
          <Wrapper alignItems='center'>
            <Icon src={iconKnife} />
            <Text fontSize='20px'>Lunch</Text>
          </Wrapper>
        </HexagonBtn>
        <HexagonBtn>
          <Wrapper alignItems='center'>
            <Icon src={iconKnife} />
            <Text fontSize='20px'>Dinner</Text>
          </Wrapper>
        </HexagonBtn>
        <HexagonBtn>
          <Wrapper alignItems='center'>
            <Icon src={iconCup} />
            <Text fontSize='20px'>Snack</Text>
          </Wrapper>
        </HexagonBtn>
      </Wrapper>

      <Wrapper
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        maxWidth='1000px'
        margin='0 auto'
      >
        {dataDailyMenu.map((item, index) => {
          return (
            <BlockBox
              width='234px'
              height='234px'
              backgroundImage={item.img}
              margin='4px'
              key={'key' + index}
            >
              <LabelImageBox>
                <Text>{item.label}</Text>
              </LabelImageBox>
            </BlockBox>
          )
        })}
      </Wrapper>

      <BlockBox padding='30px 0'>
        <Button fontSize='18px'>記録をもっと見る</Button>
      </BlockBox>
    </Container>
  )
}

export default TopPage
