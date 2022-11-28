import {
  BlockBox,
  BorderTop,
  Button,
  Container,
  LabelImageBox,
  Text,
  Wrapper,
  WrapperContent,
} from './styles'
import imgColum1 from '../../assets/column-1.jpg'
import imgColum2 from '../../assets/column-2.jpg'
import imgColum3 from '../../assets/column-3.jpg'
import imgColum4 from '../../assets/column-4.jpg'
import imgColum5 from '../../assets/column-5.jpg'
import imgColum6 from '../../assets/column-6.jpg'
import imgColum7 from '../../assets/column-7.jpg'
import imgColum8 from '../../assets/column-8.jpg'

function ColumnPage() {
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
          {[
            { bigText: 'RECOMMENDED COLUMN', smallText: 'オススメ' },
            { bigText: 'RECOMMENDED DIET', smallText: 'ダイエット' },
            { bigText: 'RECOMMENDED BEAUTY', smallText: '美容' },
            { bigText: 'RECOMMENDED HEALTH', smallText: '健康' },
          ].map((item, index) => {
            return (
              <BlockBox
                backgroundColors='#2E2E2E'
                border='1px solid #2E2E2E'
                width='216px'
                height='144px'
                key={'box' + index}
              >
                <Wrapper
                  alignItems='center'
                  justifyContent='center'
                  width='100%'
                  height='100%'
                  zIndex='1'
                >
                  <Text textAlign='center' fontSize='22px' color='#FFCC21'>
                    {item.bigText}
                  </Text>
                  <BorderTop>
                    <Text fontSize='18px'>{item.smallText}</Text>
                  </BorderTop>
                </Wrapper>
              </BlockBox>
            )
          })}
        </Wrapper>

        <BlockBox>
          <Wrapper flexDirection='row' justifyContent='space-between'>
            {[
              { img: imgColum1, label: '2021.05.17   23:25' },
              { img: imgColum2, label: '2021.05.17   23:25' },
              { img: imgColum3, label: '2021.05.17   23:25' },
              { img: imgColum4, label: '2021.05.17   23:25' },
              { img: imgColum5, label: '2021.05.17   23:25' },
              { img: imgColum6, label: '2021.05.17   23:25' },
              { img: imgColum7, label: '2021.05.17   23:25' },
              { img: imgColum8, label: '2021.05.17   23:25' },
            ].map((item, index) => {
              return (
                <BlockBox
                  width='234px'
                  key={'key' + index}
                  margin={index % 4 === 0 ? '6px 0' : '6px 0 6px 12px '}
                  padding='0'
                >
                  <Wrapper
                    alignItems='flex-start'
                    justifyContent='center'
                    width='100%'
                    height='100%'
                  >
                    <BlockBox
                      width='234px'
                      height='145px'
                      backgroundImage={item.img}
                      key={'key' + index}
                      border='2px solid #707070'
                    >
                      <LabelImageBox>
                        <Text>{item.label}</Text>
                      </LabelImageBox>
                    </BlockBox>
                  </Wrapper>
                  <Wrapper
                    alignItems='flex-start'
                    justifyContent='center'
                    width='100%'
                    height='100%'
                  >
                    <Text color='#414141' fontSize='15px'>
                      魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                    </Text>
                    <Text color='#FF963C' fontSize='12px'>
                      #魚料理 #和食 #DHA
                    </Text>
                  </Wrapper>
                </BlockBox>
              )
            })}
          </Wrapper>
        </BlockBox>
        <BlockBox padding='30px 0'>
          <Button width='296px' height='56px'>
            コラムをもっと見る
          </Button>
        </BlockBox>
      </WrapperContent>
    </Container>
  )
}

export default ColumnPage
