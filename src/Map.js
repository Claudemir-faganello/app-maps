import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from 'react-google-maps'

const Markers = ({ places }) => {
  return places.map((place) => {
    return (
      <Marker
        label={place.title}
        labelStyle
        markerWithLabel="true"
        key={place.id}
        position={{ lat: place.lat, lng: place.lng }}
      />
    )
  })
}

const Map = ({ places, zoom, center }) => {
  return (
    <GoogleMap defaultZoom={zoom} defaultCenter={center}>
      <Markers places={places} />
    </GoogleMap>
  )
}

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1
}

class MapWithMarker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { places: this.props.places }
  }

  addPlace(latitude, longitude, titulo) {
    console.log(latitude)
    console.log(longitude)
    const newPlace = {
      id: this.state.places.length + 1,
      lat: latitude,
      lng: longitude,
      title: titulo,
    }

    this.setState((prevState) => ({
      places: [...prevState.places, newPlace],
    }))
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const addMarker = (e) => {
      e.preventDefault()
      let latitude = document.getElementById('latitude').value
      let longitude = document.getElementById('longitude').value
      let descricao = document.getElementById('descricao').value
      this.addPlace(Number(latitude), Number(longitude), descricao)

      latitude = ''
      longitude = ''
      descricao = ''
    }

    return (
      <div>
        <Map
          center={this.props.center}
          zoom={this.props.zoom}
          places={this.state.places}
        />

        <div>
          <div className="add">
            <form onSubmit={addMarker}>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control inputs"
                    placeholder="informe a latitude"
                    type="text"
                    name="latitude"
                    id="latitude"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control inputs"
                    placeholder="informe a longitude"
                    type="text"
                    name="longitude"
                    id="longitude"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control inputs"
                    placeholder="informe a descrição"
                    type="text"
                    name="descricao"
                    id="descricao"
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="float-right">
                    <Button type="submit" variant="primary">
                      <i className="fas fa-plus"></i> Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker))
