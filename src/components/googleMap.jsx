import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const GoogleMapComponent = props =>
  <GoogleMapLoader
    containerElement={<div style={{ height: '100%' }} />}
    googleMapElement={
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: props.lat, lng: props.lon }}
      />
    }
  />;

GoogleMapComponent.propTypes = {
  lat: React.PropTypes.number.isRequired,
  lon: React.PropTypes.number.isRequired,
};

export default GoogleMapComponent;
