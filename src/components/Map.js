import {MapContainer, TileLayer, useMap} from "react-leaflet";
import {UW_LAT_CENTER, UW_LONG_CENTER} from "../data/Constants";
import styles from "../styles/Map.module.css";
import MapLine, {BuildingMarkers, position} from "./MapLine";
import React, {useContext, useEffect} from "react";
import {CanvasContext} from "../utils/Context";

function Map(props) {
    const {startBuilding, endBuilding, comps} = Route(props);

    return(
        <div>
            <MapContainer center={[UW_LAT_CENTER, UW_LONG_CENTER]} zoom={18} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Fly path={props.path}/>
                    {startBuilding}
                    {comps}
                    {endBuilding}
            </MapContainer>
        </div>
    );
}



const Fly = (props) => {
    const map = useMap();

    useEffect(() => {
        if(props.path.length !== 0) {
            const start = props.path[0].start;
            map.flyTo(position(start.x, start.y), 17);
        }
    }, [props.path]);
    return null;
}

const Route = props => {
    const {start, end} = useContext(CanvasContext);
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
    if (props.path.length !== 0) {
        let startXY = {x: props.path[0].start.x, y: props.path[0].start.y}
        let endXY = {x: props.path[props.path.length-1].end.x, y: props.path[props.path.length-1].end.y}
        startBuilding = <BuildingMarkers x1={startXY.x}
                                         y1={startXY.y}
                                         name={start}/>
        endBuilding = <BuildingMarkers x1={endXY.x}
                                       y1={endXY.y}
                                       name={end}/>
    }

    return {startBuilding, endBuilding, comps}
}

export {Map}