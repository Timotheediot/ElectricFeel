import React, { useState } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  const [state, setState] = useState({ lat: 51.505, lng: -0.09, zoom: 13 });

  return (
    <div>
      <Map className="map" center={position} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={grenIcon}>
          <Popup>I am a green leaf</Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default LeafletMap;
