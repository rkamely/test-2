import * as React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapBox = ({style}) => {
  const [viewport, setViewport] = React.useState({
    latitude: 35.715298,
    longitude: 51.404343,
    zoom: 11,
    width: "100%",
    height: "100%",
  });
  return (
    <ReactMapGL
      style={style}
      mapStyle="mapbox://styles/bardia1375/cl1m1lpll00dv15qs77gj36mn"
      mapboxApiAccessToken="pk.eyJ1IjoiYmFyZGlhMTM3NSIsImEiOiJja3pxdzhlN3MwYTJ4MnFvMWh2eng0NXZuIn0.f4BgA_h-avnIWW8LhFGZLw"
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker longitude={45} latitude={30} anchor="bottom">
        <p>salam</p>
      </Marker>
    </ReactMapGL>
  );
};
export default MapBox;


