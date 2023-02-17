import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2MDUxMCIsImEiOiJjbGNoaG41czEwYmxuM3FtOWNvemVub3lkIn0.5hN1wrZNfw-7YmnNYKM2YQ';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(79.2925);
  const [lat, setLat] = useState(29.2811);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/dev0510/cle5cyqqj001401q921cucm3o',
      center: [lng, lat],
      zoom: zoom
    });
    //     const beforemap = new mapboxgl.Map({
    //   container: 'before',
    //   style: 'mapbox://styles/dev0510/cle5cyqqj001401q921cucm3o',
    //   center: [lng, lat],
    //   zoom: zoom
    // });
    // const aftermap = new mapboxgl.Map({
    //   container: 'after',
    //   style: 'mapbox://styles/dev0510/cle5dg0ad005x01mt2d8phfe3',
    //   center: [lng, lat],
    //   zoom: zoom
    // });
    
    // map.current= new mapboxgl.Compare(beforemap, aftermap, mapContainer.current, {
   
    //    mousemove: true
    //   });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" id ="map"/>
      <div id = "before"></div>
      <div id ="after"></div>
    </div>
  );
}

