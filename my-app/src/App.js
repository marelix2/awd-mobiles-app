import React from 'react'
import UserScoreChart from './components/UserScoreChart';
import UserQuantityChart from './components/UserQuantityChart';
import PriceChart from './components/PriceChart';
import SupportedDevicesChart from './components/SupportedDevicesChart';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
        <UserScoreChart />
        <UserQuantityChart />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
        <PriceChart />
        <SupportedDevicesChart/>
      </div>
    </>
  );
}

export default App;
