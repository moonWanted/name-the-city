import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { MAP_BOX_ACCESS_TOKEN } from '../../config/config';

import { Map as MapboxMap } from "mapbox-gl";
import { IFeature } from '../types';

mapboxgl.accessToken = MAP_BOX_ACCESS_TOKEN;

export const Map = ({ cityFeatures }: {cityFeatures: IFeature[]}) => {
  const [map, setMap] = useState<MapboxMap|null>(null);
  const [isLayer, setIsLayer] = useState(false);

  const divElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: divElement.current as HTMLDivElement,
      style: 'mapbox://styles/moonw/ckhdx1vsi04s819o2mt63qaxo',
      center: [12, 56.7405],
      zoom: 3.2,
      interactive: false
    });

    setMap(map);

    // add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map) {
      map.on('load', () => {
        // add the data source for new a feature collection with no features
        map.addSource('random-points-data', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
        });
        // now add the layer, and reference the data source above by name
        map.addLayer({
          id: 'random-points-layer',
          source: 'random-points-data',
          'type': 'circle',
          'paint': {
            'circle-radius': ["get", "radius"],
            'circle-color': '#007cbf',
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.5,
          }
        });
        setIsLayer(true);
      });

    }

  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps 

  useEffect(() => {

    const data = {
      type: 'FeatureCollection',
      features: cityFeatures
    }

    // @ts-ignore
    isLayer && cityFeatures && map && map.getSource('random-points-data').setData(data);
  }, [cityFeatures]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="map" ref={divElement} />
  )
}