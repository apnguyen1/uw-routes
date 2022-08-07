import React, {useContext, useState} from "react";
import {Button, Image, Offcanvas} from "react-bootstrap";
import {Squash as Hamburger} from 'hamburger-react';
import {CanvasContext} from "./Context";
import {Buildings, Clear, Draw, Selection} from "./Helpers";
import style from "../styles/UserInterface.module.css";

function Canvas(props) {
    const {show, setShow} = useContext(CanvasContext);
    const {start, setStart, end, setEnd} = useContext(CanvasContext)

    return (
        <>
            <Hamburger size={32} direction={"left"}
                       onToggle={() => setShow(true)}
                       toggled={show}
                       label={"show menu"}
            />

            <Offcanvas show={show}
                       onHide={() => setShow(false)}
                       backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Draw a Route!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Choose two buildings on campus and find the most optimal route between them!</p>

                    <Dropdowns start={start}
                               changeStart={setStart}
                               end={end}
                               changeEnd={setEnd}/>
                    <Submit start={start}
                            changeStart={setStart}
                            end={end}
                            changeEnd={setEnd}
                            set={props.path}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

const Dropdowns = (props) => {
    const buildings = Buildings();

    return(
        <div className={style.dropdown}>
            <Selection title={"Start"}
                       buildings={buildings}
                       type={props.start}
                       select={props.changeStart}/>
            <div className={style.adjust}>
                <Selection title={"End"}
                           buildings={buildings}
                           type={props.end}
                           select={props.changeEnd}/>
            </div>
        </div>
    );
}

const Submit = props => {

    return(
        <div className={style.submit} >
            <Draw startName={props.start} endName={props.end} set={props.set}/>
            <Clear setStart={props.changeStart} setEnd={props.changeEnd} set={props.set}/>
        </div>
    );
}

export {Canvas}