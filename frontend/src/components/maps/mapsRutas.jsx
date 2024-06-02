import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import styled from 'styled-components';
import ImgColegio from '../../assents/img/colegio.png'

const containerStyle = {
  width: '153vh',
  height: '83vh',
  
};

const center = {
  lat: -17.386046076379788,
  lng: -66.15643099889358,
};

function MapsForm({ estu, colegio, origin, setOrigin, waypoints, setWaypoints, espejo, setEspejo }) {
  const google = window.google;
  const [activeMarker, setActiveMarker] = useState(null);


  const [destination, setDestination] = useState({
    lat:0,
    lng:0
  });

  const [directions, setDirections] = useState(null);
  let count = useRef(0);

  const [location, setLocation] = useState({
    markers: [
      {
        title: "The marker's title will appear as a tooltip.",
        name: "",
        position: { lat: 0, lng: 0 }
      }
    ]
  });

  const directionsCallback = (result, status) => {
    //console.log('hola');
    if (status === "OK" && count.current === 0 && origin.lat !== null) {
      count.current++;
      setDirections(result);
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  });

  useEffect(() => {
    //console.log('hola');
    if (estu) {
      setLocation(() => {
        return {
          markers: [
            {
              name: '',
              id: -1,
              position: { lat: 0, lng: 0 }
            }
          ]
        };
      });
      estu.map(estudiante => mapClicked(estudiante));
    }

    setWaypoints([])
    setDestination({
      lat:colegio.latitud,
      lng:colegio.longitud
    });
  }, [estu]);

  useEffect(() => {
    const newEspejo = waypoints.map(waypoint => {
        return {
                id:waypoint.id,
                mensaje:`${waypoint.lat},${waypoint.lng}`
               }
      });
    setEspejo(newEspejo);
  }, [waypoints]);

  const agregarLista = (markers, key) => {
    if (origin.id === -1) {
      setOrigin({
        id: markers.id,
        lat: markers.position.lat,
        lng: markers.position.lng
      });
    } else {
      if(waypoints.length < 13){
        const newWaypoint = {
          id: markers.id,
          lat: markers.position.lat,
          lng: markers.position.lng
        };
        setWaypoints(prevWaypoints => [...prevWaypoints, newWaypoint]); // Agregar nuevo waypoint al array existente
        count.current--;
      }
      //actualizarInterfaz
    }
  };

  const mapClicked = (e) => {
    const lat = Number(e.Latitud);
    const lng = Number(e.Longitud);

    setLocation((previousState) => {
      return {
        markers: [
          ...previousState.markers,
          {
            name: e.nombre,
            id: e.id,
            position: { lat, lng }
          }
        ]
      };
    });
  };

  const markerClicked = (markers, key) => {
    setActiveMarker(key);
  };

  return isLoaded ? (
    <MapsContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      > 
        <Marker
          icon = {ImgColegio}
          position={{lat: destination.lat, lng: destination.lng}}
        >
          
        </Marker>
        {location.markers.map((markers, key) => (
          <Marker
            key={key}
            position={markers.position}
            onClick={() => agregarLista(markers, key)}
            //onMouseOver={() => markerClicked(markers, key)}
            //onMouseOut={() => setActiveMarker(null)}
          >
            {activeMarker === key ? (
              <InfoWindow>
                <div>
                  <p>{markers.name}</p>
                  <p>lat: {markers.position.lat}</p>
                  <p>log: {markers.position.lng}</p>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
        <DirectionsService
          options={{
            origin: new google.maps.LatLng(origin.lat, origin.lng),
            waypoints: [
              ...waypoints.map(way => ({
                location: new google.maps.LatLng(way.lat, way.lng),
                stopover: true
              }))
            ],
            destination: new google.maps.LatLng(destination.lat, destination.lng),
            travelMode: "DRIVING",
            optimizeWaypoints: true
          }}
          callback={directionsCallback}
        />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </MapsContainer>
  ) : <></>;
}

export default React.memo(MapsForm);

const MapsContainer = styled.nav`
  margin-top: 2vh;
  margin-bottom: 3vh;
`;
