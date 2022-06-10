import * as React from "react";
import ReactMapGL, {Marker, NavigationControl} from "react-map-gl";
import PinBar from "./ PinBar";
import ControlPanel from "./ControlPanel";

const MapBox = ({style}) => {
  const [viewport, setViewport] = React.useState({
    latitude: 35.715298,
    longitude: 51.404343,
    zoom: 11,
    width: "100%",
    height: "100%",
  });
  const initialViewState = {
    latitude: 40,
    longitude: -100,
    zoom: 3.5
  };
  const [marker, setMarker] = React.useState({
    latitude: 40,
    longitude: -100
  });
  const [events, logEvents] = React.useState({});

  const onMarkerDragStart = React.useCallback((event) => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = React.useCallback((event) => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));

    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat
    });
  }, []);

  const onMarkerDragEnd = React.useCallback((event) => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
  }, []);
  return (
  <>
    <ReactMapGL
      style={style}
      mapStyle="mapbox://styles/bardia1375/cl1m1lpll00dv15qs77gj36mn"
      mapboxApiAccessToken="pk.eyJ1IjoiYmFyZGlhMTM3NSIsImEiOiJja3pxdzhlN3MwYTJ4MnFvMWh2eng0NXZuIn0.f4BgA_h-avnIWW8LhFGZLw"
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
         <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            draggable
            onDragStart={onMarkerDragStart}
            onDrag={onMarkerDrag}
            onDragEnd={onMarkerDragEnd}
          >
          </Marker>
          <PinBar size={50} />

          <NavigationControl />
    </ReactMapGL>
    
          {/* <ReactMapGL
           style={style}
          initialViewState={initialViewState}
          mapStyle="mapbox://styles/bardia1375/cl1m1lpll00dv15qs77gj36mn"
          mapboxApiAccessToken="pk.eyJ1IjoiYmFyZGlhMTM3NSIsImEiOiJja3pxdzhlN3MwYTJ4MnFvMWh2eng0NXZuIn0.f4BgA_h-avnIWW8LhFGZLw"
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            draggable
            onDragStart={onMarkerDragStart}
            onDrag={onMarkerDrag}
            onDragEnd={onMarkerDragEnd}
          >
          </Marker>
  
          <NavigationControl />
       

        </ReactMapGL> */}
             <ControlPanel events={events} />
      </>

  );
};
export default MapBox;


