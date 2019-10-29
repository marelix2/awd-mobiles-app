import React from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'
import {groupBy} from 'lodash'

const MyChart = () => {

  const data = groupBy([3.5,3.5,3.5,3.5,3.5,4,4,4,4,4,4,4,4,4,4,4,4.5,4.5,4.5,4.5,4.5,4.5,5])

  console.log(data)

  return (
    <div>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Ocena', 'Ocena'],
          ['3.5', data['3.5'].length],
          ['4', data['4'].length],
          ['4.5', data['4.5'].length],
          ['5', data['5'].length],
        ]}
        options={{
          // Material design options
          colors: ['#b0120a'],
          chart: {
            title: 'Liczba ocen użytkowników',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
};

export default MyChart;