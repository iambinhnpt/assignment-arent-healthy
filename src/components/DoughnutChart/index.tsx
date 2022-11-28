import React, { useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)
interface Props {
  dataPercent: number[]
  labels: string[]
  labelDatasets: string
  backgroundColor: string[]
  borderColor: string[]
}

const DoughnutChart = ({
  dataPercent,
  labels,
  labelDatasets,
  backgroundColor,
  borderColor,
}: Props) => {
  const doughnutRef = useRef()
  const data = {
    type: 'doughnut',
    labels,
    datasets: [
      {
        label: labelDatasets,
        data: dataPercent,
        backgroundColor,
        borderColor,
        borderWidth: 1,
        cutout: 99,
        aspectRatio: 1,
      },
    ],
  }
  return <Doughnut data={data} ref={doughnutRef} />
}

export default DoughnutChart
