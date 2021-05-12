import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Map from './Map'
 
const places = [
  
]

const App = () => {
  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAs8fpy0-fFeKFlWa45S8g5_gxLgGhtpKo"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        center={{ lat: -29.995301, lng: -51.174217 }}
        zoom={8}
        places={places}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
