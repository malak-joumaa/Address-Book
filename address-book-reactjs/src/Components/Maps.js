import React, { useState, useEffect, useDebugValue } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import GeoLocation from "./GeoLocation";

const Maps = ({
  selectedPosition,
  setSelectedPosition,
  setLocationName,
  getName,
}) => {
  const location = GeoLocation();

  //Function to display marker on click
  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        console.log(selectedPosition);
        getName();
      },
    });
    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      />
    ) : null;
  };

  //Function to get current location
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      setSelectedPosition([
        location.coordinates.lat,
        location.coordinates.long,
      ]);
      useMap.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.long],
        20,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      <MapContainer
        center={selectedPosition}
        zoom="12"
        onClick={console.log("clicked")}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers />
      </MapContainer>
      <button
        onClick={(e) => {
          e.preventDefault();
          showMyLocation();
        }}
      >
        Locate Me
      </button>
    </>
  );
};

export default Maps;
