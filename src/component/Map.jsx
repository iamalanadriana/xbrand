import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {

    const MapStyle = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 3.42158, lng: -76.5205
    }

    return ( 
        <LoadScript googleMapsApiKey='AIzaSyClUzbHuY47FCRVxPCoAF6b71NcHaXYAmc'>
            <GoogleMap
                mapContainerStyle={MapStyle}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
     );
}
 
export default Map;