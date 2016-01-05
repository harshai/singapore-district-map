import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default class SimpleMap extends React.Component() {

  constructor() {
    super();
    this.onClickDiv = this.onClickDiv.bind(this);
  }

  render() {
    return (
      <section style={{ height: '100%' }}>
        <GoogleMapLoader
          containerElement = {
            <div style={{ height: '100%' }} />
          }
          googleMapElement = {
            <GoogleMap
              defaultZoom = {3}
              defaultCenter = {{ lat: -25.363882, lng: 131.044922 }}
              onClick={ this.handleMapClick }
            >
              {this.state.markers.map((marker, index) => {
                return (
                  <Marker
                    {...marker}
                    onRightclick = { this.onClickDiv(index) }
                  />
                );
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}