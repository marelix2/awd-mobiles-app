import React from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'
import {groupBy} from 'lodash'

const PriceChart = () => {

  const dd = groupBy([0,0,0,0,0,0,0,0,0,0,0,0,0,0.99,1.99,2.99,2.99,3.99,4.99,4.99,5.99,7.99,9.99])

  return (
    <div>
      <div>
        <Chart
          width={'800px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['cena produktu', 'USD'],
            ['0', dd['0'].length],
            ['0.1 - 0.99', dd['0.99'].length],
            ['1.00 - 1.99', dd['1.99'].length],
            ['2.00 - 2.99', dd['2.99'].length],
            ['3.00 - 3.99', dd['3.99'].length],
            ['4.00 - 4.99', dd['4.99'].length],
            ['5.99 + ', dd['5.99'].length + dd['7.99'].length +dd['9.99'].length ]
          ]}
          options={{
            // Material design options
            chart: {
              title: 'cena produktu (USD)',
            },
            colors: ['#123'],
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
};

export default PriceChart;