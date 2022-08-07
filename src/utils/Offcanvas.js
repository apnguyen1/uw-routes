import {useState} from "react";
import {Button, Image, Offcanvas} from "react-bootstrap";
import {Dropdowns, Submit} from "../components/UserInterface";
import {Squash as Hamburger} from 'hamburger-react';

const options = [
    {scroll: true,
     backdrop: false,}
]

function Canvas(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Hamburger size={32} direction={"left"}
                       onToggle={() => setShow(true)}
                       toggled={show}
                       label={"show menu"}/>
            <Offcanvas show={show}
                       onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Draw a Route!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Choose two buildings on campus and find the most optimal route between them!</p>

                    <Dropdowns start={props.props.start} end={props.props.end}/>
                    <Submit start={props.props.start} end={props.props.end} set={props.props.set}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
        );
}

export {Canvas}