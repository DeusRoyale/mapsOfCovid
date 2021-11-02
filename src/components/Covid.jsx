import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadCoutriesTask from '../tasks/LoadCountries';
import legendItems from '../entities/LegendItems';

const Covid = () => {
  const [countries, setCountries] = useState([])
  const legendItemsInReverse = [...legendItems].reverse()

  const load = () => {
    const loadCoutriesTask = new LoadCoutriesTask()
    loadCoutriesTask.load(setCountries)
  }

  useEffect(load, [])
 //console.log(countries)

  return (
    <div> 
      {countries.length === 0 ? 
        <Loading/>        
        :
        <div>
          <CovidMap countries={countries}/>
          <Legend legendItems={legendItemsInReverse}/>
        </div>
      }  
    </div>


     );
}
 
export default Covid;