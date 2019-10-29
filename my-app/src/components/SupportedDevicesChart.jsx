import React from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'
import {groupBy} from 'lodash'

const SupportedDevicesChart = () => {
  const dd = groupBy([37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,40,43,47,47])
  return (
    <div>
      <div>
        <Chart
          width={'800px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Liczba wsiepranych urządzeń', 'Liczba wsiepranych urządzeń'],
            ['37', dd['37'].length],
            ['38', dd['38'].length],
            ['40', dd['40'].length],
            ['43', dd['43'].length],
            ['47', dd['47'].length]
          ]}
          options={{
            // Material design options
            chart: {
              title: 'Liczba wsiepranych urządzeń',
            },
            colors: ['#33a12c'],
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
};

export default SupportedDevicesChart;