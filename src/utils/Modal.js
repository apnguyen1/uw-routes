import {useState} from "react";
import {Button, CloseButton, Modal} from "react-bootstrap";
import infoIcon from '../assets/infoIcon.png'
import style from '../styles/Modal.module.css'

export function Info() {
    const [show, setShow] = useState(true);

    return (
        <>
            <img src={infoIcon}
                 alt={"icon for more information about the website"}
                 onClick={() => setShow(true)}
                 className={style.info}/>

            <Modal show={show}
                   onHide={() => setShow(false) }
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Welcome to UW's Campus!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        A complete re-vamp of one of my final projects in my CSE classes at the
                        University of Washington. Being swamped with finals, I wasn't able to dive deep into
                        learning ReactJS or create an enjoyable experience for users to actually enjoy the website.

                        This application allows user's to choose two buildings on
                        the university's campus and it will draw a route of the shortest, most optimal path
                        between them.
                    </p>
                </Modal.Body>

            </Modal>
        </>
    )
}