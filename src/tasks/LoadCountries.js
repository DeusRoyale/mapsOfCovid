import { features } from "../data/countries.json"
import papa from "papaparse"

class LoadCoutriesTask {
  covid19DataURL =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv"

  setState = null

  load = (setState) => {
    this.setState = setState

    papa.parse(this.covid19DataURL, {
      download: true,
      header: true,
      complete: (r) => {
        //console.log(r)
        this.#processCovidData(r.data)},
    })
  }

  #processCovidData = (covidCountries) => {
    features.map( z => {
      
      //console.log(features, covidCountries);

      const covidCountry = covidCountries.find(
        (covidCountry) => z.properties.ISO_A3 === covidCountry.ISO3
      )

      //console.log(covidCountry)
      
      /* ADDING DATA TO FEATURES! */
      z.properties.confirmed = 0
      z.properties.confirmedText = '0'

      if(covidCountry != null){
        let confirmed = Number(covidCountry.Confirmed)
        z.properties.confirmed = confirmed
        z.properties.confirmedText = confirmed
      }

      
    }
    
    
    )
    this.setState(features)
  }
}

export default LoadCoutriesTask

/*  */
