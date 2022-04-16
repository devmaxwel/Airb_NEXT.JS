import React, { useState } from 'react'
import ReactMapGL,{Popup,Marker} from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from '@heroicons/react/solid';
 
function MapBox({searchResults}) {

    const [selctedResult, setSelectedResult] =useState({});
    
    // Transform results 

    const coordinates = searchResults?.map((result) => ({
      latitude: result.lat,
      longitude: result.long,
    }));

    const center = getCenter(coordinates);
    console.log(center);
    const [viewPort, setViewPort]= useState({
        width:"100%",
        height:"100%",
        zoom:8,
        latitude:center.latitude,
        longitude:center.longitude,
    });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/devmaxwel/cl21jganb008114lfgi9vnei6"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewPortChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults?.map((res) => (
        <div key={res.long}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedResult(res)}
              role="img"
              aria-label="push-pin"
              className="text-2xl 
                    animate-bounce "
            >
              {/* <LocationMarkerIcon className="h-6 cursor-pointer bg-red-400 relative" /> */}
            </p>
          </Marker>
          {setSelectedResult.long === res.long ? (
            <Popup
              onClose={() => setSelectedResult({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default MapBox;