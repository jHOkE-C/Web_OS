import React, { useEffect, useState } from 'react';

import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';
const containerStyle = {
    width: '153vh',
    height: '83vh',
  };
  
  const center = {
    lat: -17.386046076379788,
    lng: -66.15643099889358, 
  };
function MapsForm({ estu }) {
  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBzEYvBtoYPDH1_JX60ILe5xMaCKK2E0ek"
  })


  //Hook for the location per click on the MAP
  const [location, setLocation] = React.useState({
    markers: [
      {
        title: "The marker`s title will appear as a tooltip.",
        name: "",
        position: { lat: 0, lng: 0 }
      }
    ]
  });

  useEffect(() => {
    if (estu) {
      console.log(estu)
      estu.map(estudiante => mapClicked(estudiante))
    }
  }, [estu]);
  // Hook for clicking on a marker to show an active marker
  const [activeMarker, setActiveMarker] = React.useState(null);


  // Function when clicking on the MAP
  const mapClicked = (e) => {
    const lat = Number(e.Latitud);
    const lng = Number (e.Longitud);
    
    var markerCoordinate = `lat: ${lat} lng: ${lng}`;
    setLocation((previousState) => {
      return {
        markers: [
            ...previousState.markers,
          {
            title: "",
            name: markerCoordinate,
            position: { lat, lng }
          }
        ]
      };
    });
  };

  // function when clicking on a marker
  const markerClicked = (markers, key) => {
    if (key === activeMarker) {
      return;
    }
    // setA;
    setActiveMarker(key);
    
  };
  return isLoaded ? (
    <MapsContainer>
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={mapClicked}
      >
        {location.markers.map((markers, key) => (
          <Marker
            key={key}
            title={markers.title}
            name={markers.name}
            position={markers.position}
            onMouseOver={() => markerClicked(markers, key)}
            onMouseOut={() => setActiveMarker(null)}
          >
            {activeMarker === key ? (
              <InfoWindow
                onCloseClick={() => setActiveMarker(null)}
              >
                <div>
                  <p>lat: {markers.position.lat}</p>
                  <p>log: {markers.position.lng}</p>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
        <></>
      </GoogleMap>
    </MapsContainer>
  ) : <></>
}

export default React.memo(MapsForm)

const MapsContainer = styled.nav`
  margin-top: 2vh;
  margin-bottom: 3vh;
`