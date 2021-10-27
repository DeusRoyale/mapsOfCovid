import "./App.css"
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import teslaData from "./data/teslaSites.json"

function App() {
  //console.log(teslaData)

  const filteredCountries = teslaData.filter(
    (z) => z.address.country === "Italy"
  )

  return (
    <div className="App">
      <header className="App-header">
        <MapContainer
          center={[41.871941, 12.56738]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredCountries.map((t) => (
            <Marker key={t.id} position={[t.gps.latitude, t.gps.longitude]}>
              {
                <Popup position={[t.gps.latitude, t.gps.longitude]}>
                  <div>
                    <h2>{t.name}</h2>
                    <p>status: {t.status}</p>
                    <p>stalls: {t.stallCount}</p>
                  </div>
                </Popup>
              }
            </Marker>
          ))}
        </MapContainer>
      </header>
    </div>
  )
}

export default App
