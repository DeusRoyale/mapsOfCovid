import "./App.css"
import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MapContainer center={[0, 0]} zoom={4}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </header>
    </div>
  )
}

export default App
