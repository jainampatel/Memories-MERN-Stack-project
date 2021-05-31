import React, { useEffect, useRef } from "react";

import "./Map.css";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

const Map = (props) => {
  const mapRef = useRef();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiamFpbmFtcGF0ZWwzOTcxIiwiYSI6ImNrbXZveGFzdTA3MW8ybnFuZHF2OWNvNWEifQ.P_QhOxS9K1sg3W14qcuW4Q";

  const { center, zoom } = props;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });
    const marker = new mapboxgl.Marker().setLngLat(center).addTo(map);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
