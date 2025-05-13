import React from 'react';

import Header from '../Header';

import { ParkingLotGrid } from './styles.js';
import { useState, useEffect } from 'react';
import ParkedService  from '../../services/ParkedService'
import ParkingLotCard from '../ParkingLotCard/index.jsx';

function App() {
    const [lots, setLots] = useState([]); 
    const fetchLots = async () => {
      const response = await ParkedService.getParkingLots()
      setLots(response);
    };

    useEffect(() =>  {
      fetchLots();
    }, [])

    return (
        <>
            <Header />

            <ParkingLotGrid>
                {lots.map(item => (
                  <ParkingLotCard key={item.id} parkingLot={item}/>
                ))}
              
            </ParkingLotGrid>
        </>
    );
}

export default App;
