import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';
const containerStyle = {
    width: '70vw',
    height: '80vh',
  };
  
  const center = {
    lat: -17.386046076379788,
    lng: -66.15643099889358, 
  };
function MapsForm({ markerCoordinates, setMarkerCoordinates  }) {
  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: ""
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

  // Hook for clicking on a marker to show an active marker
  const [activeMarker, setActiveMarker] = React.useState(null);


  // Function when clicking on the MAP
  const mapClicked = (e) => {
    const key = Math.round(Math.abs((e.latLng.lat() + e.latLng.lng()) * 10000));
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerCoordinates({lat: e.latLng.lat(), lng: e.latLng.lng()}); 
    var markerCoordinate = `lat: ${lat} lng: ${lng}`;
    setLocation(() => {
      return {
        markers: [
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
  margin-top: 5vh;
  margin-bottom: 3vh;
`