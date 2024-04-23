import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styled from 'styled-components';

const containerStyle = {
    width: '150vh',
    height: '80vh'
  };
  
  const center = {
    lat: -17.386046076379788,
    lng: -66.15643099889358, 
  };
function MapsForm() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBzEYvBtoYPDH1_JX60ILe5xMaCKK2E0ek"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
    return isLoaded ? (
        <MapsContainer>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
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