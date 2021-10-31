import React from "react"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from "react-leaflet"
import './Covid.css'

const CovidMap = ({ countries }) => {

  const mapStyle = {
    fillColor: 'white',
    weight: 1,
    color: 'black',
    fillOpacity: 1
  }

  const onEachCountry = (country, layer) => {
    //layer.options.fillColor = country.properties.color
    const name = country.properties.ADMIN
    /* AFTER ADDITION TO FEATURES */
    const confirmedText = country.properties.confirmedText
    layer.bindPopup(`${name} ${confirmedText}`)
  }

  return (
    <MapContainer center={[20, 100]} zoom={2} scrollWheelZoom={true}>

      <GeoJSON 
      style={mapStyle}
      onEachFeature={onEachCountry}
      data={countries}/>

      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}

export default CovidMap
