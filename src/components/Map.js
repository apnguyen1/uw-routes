import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {UW_LAT_CENTER, UW_LONG_CENTER} from "../data/Constants";
import styles from "../styles/Map.module.css";

import MapLine, {BuildingMarkers} from "./MapLine";
import React from "react";

function Map(props) {
    const {startBuilding, endBuilding, comps} = route(props);

    return(
        <div>
            <MapContainer center={[UW_LAT_CENTER, UW_LONG_CENTER]} zoom={18} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <div>
                    {startBuilding}
                    {comps}
                    {endBuilding}
                </div>
            </MapContainer>
        </div>
    );
}

const route = props => {
    let startBuilding;
    let endBuilding;
    const comps = props.path.map( (segments, index) => (
        <MapLine key={index}
                 color={"#0d6efd"}
                 x1={segments.start.x}
                 x2={segments.end.x}
                 y1={segments.start.y}
                 y2={segments.end.y}
        ></MapLine>
    ))

    console.log(props.path.length);

    if (props.path.length !== 0) {
        startBuilding = <BuildingMarkers x1={props.path[0].start.x} y1={props.path[0].start.y}/>
        endBuilding = <BuildingMarkers x1={props.path[props.path.length-1].end.x} y1={props.path[props.path.length-1].end.y}/>
    }

    return {startBuilding, endBuilding, comps}
}

export {Map}