import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Table, Text, Wrapper } from './styles'

const TableComponent = () => {
  return (
    <Scrollbars style={{ height: 264 }}>
      <Table>
        <tbody>
          {[...Array(10)].map((item, index) => {
            return (
              <tr key={'tr' + index}>
                <td>
                  <Wrapper>
                    <Text>家事全般（立位・軽い）</Text>
                    <Text color='#FFCC21'>26kcal</Text>
                  </Wrapper>
                </td>
                <td>
                  <Text color='#FFCC21'>10 min</Text>
                </td>
              </tr>
            )
          })}
        </tbody>

        <tbody>
          {[...Array(10)].map((item, index) => {
            return (
              <tr key={'tr' + index}>
                <td>
                  <Wrapper>
                    <Text>家事全般（立位・軽い）</Text>
                    <Text color='#FFCC21'>26kcal</Text>
                  </Wrapper>
                </td>
                <td>
                  <Text color='#FFCC21'>10 min</Text>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Scrollbars>
  )
}

export default TableComponent
