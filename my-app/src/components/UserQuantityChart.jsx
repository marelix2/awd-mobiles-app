import React from 'react';
import { Chart } from "react-google-charts"
import {groupBy} from 'lodash'

const UserQuantityChart = () => {

  const dd = groupBy([0,8,1117,2929,6340,7885,8253,11447,31456,56194,76720,105776,119487,119773,137951,188583,223885,262241,402925,479440,985920,1126879,2974676].map(i => ''+i),'length')
  
  return (
    <div>
      <div>
      <Chart
        width={'800px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Liczba ocen użytkownikow', 'Liczba ocen użytkownikow'],
          ['0 - 9', dd['1'].length],
          ['1000 - 9999', dd['4'].length],
          ['10tyś. - 99999', dd['5'].length],
          ['100tyś. - 999999', dd['6'].length],
          ['1mln.- 9999999', dd['7'].length]
        ]}
        options={{
          // Material design options
          chart: {
            title: 'Liczba ocen użytkowników',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
    </div>
  );
};

export default UserQuantityChart;