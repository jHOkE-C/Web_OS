import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
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
  const google = window.google;
  const [activeMarker, setActiveMarker] = useState(null);
  const [origin, setOrigin] = useState({
    id: -1,
    lat: null,
    lng: null
  });
  const [waypoints, setWaypoints] = useState([]); // Inicializar waypoints como un array vacío

  const [destinationLat, setDestinationLat] = useState(-17.382799241690808);
  const [destinationLong, setDestinationLong] = useState(-66.15135072793731);

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
    googleMapsApiKey: "AIzaSyCB3Y4ahmZI6xhk50XkGE9UtZq5br_im88"
  });

  useEffect(() => {
    //console.log('hola');
    if (estu) {
      setLocation(() => {
        return {
          markers: [
            {
              title: "",
              name: 'hola',
              position: { lat: 0, lng: 0 }
            }
          ]
        };
      });
      estu.map(estudiante => mapClicked(estudiante));
    }
  }, [estu]);

  const agregarLista = (markers, key) => {
    if (origin.id === -1) {
      setOrigin({
        id: key,
        lat: markers.position.lat,
        lng: markers.position.lng
      });
    } else {
      const newWaypoint = {
        id: key,
        lat: markers.position.lat,
        lng: markers.position.lng
      };
      setWaypoints(prevWaypoints => [...prevWaypoints, newWaypoint]); // Agregar nuevo waypoint al array existente
      console.log(waypoints)
      count.current--;
    }
  };

  const mapClicked = (e) => {
    const lat = Number(e.Latitud);
    const lng = Number(e.Longitud);

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
        {location.markers.map((markers, key) => (
          <Marker
            key={key}
            title={markers.title}
            name={markers.name}
            position={markers.position}
            onClick={() => agregarLista(markers, key)}
            onMouseOver={() => markerClicked(markers, key)}
            onMouseOut={() => setActiveMarker(null)}
          >
            {activeMarker === key ? (
              <InfoWindow>
                <div>
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
            destination: new google.maps.LatLng(destinationLat, destinationLong),
            travelMode: "DRIVING",
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
