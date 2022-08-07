import {useFetch} from "../hooks/useFetch";
import selection from "../styles/Selection.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {Button, DropdownButton} from "react-bootstrap";


export function Buildings() {
    const url = "https://campus-maps-server.herokuapp.com/buildings";
    const {loading, state, serverError} = useFetch(url);
    const options = [];

    if(loading) {
        options.push(
            <Dropdown.Item key={"loading"} title={"loading"} eventKey={"Error"} disabled={true}>LOADING...</Dropdown.Item>
        )
    } else if(!loading && serverError) {
        options.push(
            <Dropdown.Item key={"error"} title={"error"} eventKey={"Error"} disabled={true}>There was an error from the server</Dropdown.Item>
        )
    } else {
        for(const key in state) {
            options.push(
                <Dropdown.Item key={key} title={state[key]} eventKey={key}>{state[key]}</Dropdown.Item>
            );
        };
    }

    return options;
}

export const Selection = props => {
    const building = "--" + props.type + "--";

    return(
        <div className={selection.container}>
            <h4 className={selection.title}>{props.title} Location: </h4>
            <DropdownButton className={selection.dropdown} title={building} onSelect={e => props.select(e)}>
                {props.buildings}
            </DropdownButton>
        </div>
    );
}

export const Clear = props => {
    return(
        <Button variant={"outline-secondary"}
                onClick={e => {props.setStart("Start"); props.setEnd("End"); props.set([])}}
        >Clear
        </Button>
    );
}

export const Draw = props => {
    const usable = props.startName === "Start" || props.endName === "End";
    let url = '';
    if (usable) {
        url = "https://campus-maps-server.herokuapp.com/path/CSE/CSE";

    } else {
        url = "https://campus-maps-server.herokuapp.com/path/" + props.startName + "/" + props.endName;
    }
    const {loading, state, serverError} = useFetch(url);

    console.log(url);
    return(
        <Button variant={"primary"}
                disabled={usable}
                onClick={() => props.set(state.path)}
        >Draw a Route!
        </Button>
    )
}