// import * as React from 'react';
// import Map from 'react-map-gl';

// const MapBox=()=> {
//   return (
//     <Map
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       mapboxAccessToken={process.env.REACT_APP_MAPBOX}

//     />

//   );
// }
// export default MapBox;




import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const MapBox = () => {
<MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
};
export default MapBox;
