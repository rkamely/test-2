// import React, { useState } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import mapStyles from './mapStyle';
// import config from '../../../../../config';

// function MapComponent(props) {
//   const [zoomLevel, setZoomLevel] = useState(config.zoomLevel)
//   const [lat, setLat] = useState(config.lat || 51.4934);
//   const [lng, setLng] = useState(config.lng || 0.0098);
  
//   return (
//     <div className='map'>
//       <Map
//         google={props.google}
//         zoom={zoomLevel}
//         styles={mapStyles}
//         disableDefaultUI={config.useDefaultUI}
//         initialCenter={{
//           lat,
//           lng
//         }}
//       >map
//         {/* <Marker
//           position={{ lat: config.latitudeForMarker, lng: config.longitudeForMarker }}
//           icon={config.googleMapsMarkerIcon}
//         /> */}
//       </Map>
//     </div>
//   );
// };

// export default GoogleApiWrapper({ apiKey: config.apiKey })(MapComponent);