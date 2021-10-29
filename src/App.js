import "./App.css"
import React, { useState } from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  MapConsumer,
} from "react-leaflet"
import { Button } from "react-bootstrap"
import Covid from "./components/Covid"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Covid/>
      </header>
    </div>
  )
}

export default App
