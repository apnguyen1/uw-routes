import React, {useContext} from "react";
import { Polyline } from 'react-leaflet/Polyline';
import {UW_LAT, UW_LAT_OFFSET, UW_LONG, UW_LAT_SCALE, UW_LONG_OFFSET, UW_LONG_SCALE} from "../data/Constants";
import {Marker, Popup} from "react-leaflet";
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import {Icon} from 'leaflet'
import {CanvasContext} from "../utils/Context";

function MapLine(props) {
    return(
        <Polyline
            pathOptions={{weight: 10, color: props.color}}
            positions={[
                [yToLat(props.y1), xToLon(props.x1)],
                [yToLat(props.y2), xToLon(props.x2)],
            ]}
        />
    );
}

export const BuildingMarkers = props => {
    return(
        <Marker position={[yToLat(props.y1), xToLon(props.x1)]}
                icon={new Icon({iconUrl: markerIcon, iconSize: [25,41], iconAnchor: [12,41]})}
        >
            <Popup>
                {props.name}
            </Popup>
        </Marker>
    )
}

export const position = (x, y) => {
    return [yToLat(y), xToLon(x)]
}

function xToLon(x) {
    return UW_LONG + (x - UW_LONG_OFFSET) * UW_LONG_SCALE;
}

function yToLat(y) {
    return UW_LAT + (y - UW_LAT_OFFSET) * UW_LAT_SCALE;
}


export default MapLine;