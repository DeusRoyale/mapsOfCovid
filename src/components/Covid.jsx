import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadCoutriesTask from '../tasks/LoadCountries';

const Covid = () => {
  const [countries, setCountries] = useState([])

  const load = () => {
    const loadCoutriesTask = new LoadCoutriesTask()
    loadCoutriesTask.load(setCountries)
  }

  useEffect(load, [])

  return (
    <div> 
      {countries.length === 0 ? 
        <Loading/>        
        :
        <div>
          <CovidMap countries={countries}/>
          <Legend/>
        </div>
      }  
    </div>


     );
}
 
export default Covid;