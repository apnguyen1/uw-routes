import {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import {Dropdowns, Submit} from "../components/UserInterface";
import style from "../styles/Canvas.module.css";

const options = [
    {scroll: true,
     backdrop: false,}
]

function Canvas(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant={"primary"} onClick={() => setShow(true)}>Hello</Button>

            <Offcanvas show={show}
                       onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton={true}>
                    <Offcanvas.Title>Choose two Routes!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Choose two buildings on campus and find the most optimal route between them!</p>

                    <Dropdowns start={props.props.start} end={props.props.end}/>
                    {/*<Submit start={props.start} end={props.end} set={props.set}*/}
                </Offcanvas.Body>
            </Offcanvas>
        </>
        );
}

export {Canvas}