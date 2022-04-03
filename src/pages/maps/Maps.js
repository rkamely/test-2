// import React from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// // styles
// import useStyles from "./styles";

// const BasicMap = withScriptjs(
//   withGoogleMap(() => (
//     <GoogleMap
//       defaultZoom={12}
//       defaultCenter={{
//         lat: parseFloat(-37.813179),
//         lng: parseFloat(144.950259),
//       }}
//     >
//       <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
//     </GoogleMap>
//   )),
// );

// export default function Maps() {
//   var classes = useStyles();

//   return (
//     <div className={classes.mapContainer}>
//       <BasicMap
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
//         loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
//         containerElement={<div style={{ height: "50%" }} />}
//         mapElement={<div style={{ height: "50%" }} />}
//       />
//     </div>
//   );
// }

// import { useState } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import 'mapbox-gl/dist/mapbox-gl.css';
// const Maps = () => {
//   const [latitude, setLatitude] = useState(35.6892);
//   const [longitude, setLongitude] = useState(51.389);
//   const [zoom, setZoom] = useState(10);
//   return (
//     <ReactMapGL
//       width="100%"
//       height={400}
//       latitude={latitude}
//       longitude={longitude}
//       zoom={zoom}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       mapboxApiAccessToken="sk.eyJ1IjoiYmFyZGlhMTM3NSIsImEiOiJja3p0aTVhdHg0bGVyMnZueTRqamIybGw1In0.SGGXhwz81gzVmuuNfWlOgQ"
//       onViewportChange={(viewState) => {
//         setLatitude(viewState.latitude);
//         setLongitude(viewState.longitude);
//         setZoom(viewState.zoom);
//       }}
//     ></ReactMapGL>
//   );
// };
// export default Maps

// import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import * as parkDate from "./data/skateboard-parks.json";

// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10,
//   });
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = (e) => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken="pk.eyJ1IjoiYmFyZGlhMTM3NSIsImEiOiJja3pxdzhlN3MwYTJ4MnFvMWh2eng0NXZuIn0.f4BgA_h-avnIWW8LhFGZLw"
//         mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
//         onViewportChange={(viewport) => {
//           setViewport(viewport);
//         }}
//       >
//         {parkDate.features.map((park) => (
//           <Marker
//             key={park.properties.PARK_ID}
//             latitude={park.geometry.coordinates[1]}
//             longitude={park.geometry.coordinates[0]}
//           >
//             <button
//               className="marker-btn"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setSelectedPark(park);
//               }}
//             >
//               <img src="/skateboarding.svg" alt="Skate Park Icon" />
//             </button>
//           </Marker>
//         ))}

//         {selectedPark ? (
//           <Popup
//             latitude={selectedPark.geometry.coordinates[1]}
//             longitude={selectedPark.geometry.coordinates[0]}
//             onClose={() => {
//               setSelectedPark(null);
//             }}
//           >
//             <div>
//               <h2>{selectedPark.properties.NAME}</h2>
//               <p>{selectedPark.properties.DESCRIPTIO}</p>
//             </div>
//           </Popup>
//         ) : null}
//       </ReactMapGL>
//     </div>
//   );
// }
