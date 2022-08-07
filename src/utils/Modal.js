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
                        This application allows users' to choose two buildings on
                        the university's campus and it will draw a route of the shortest, most optimal path
                        between them.
                        <br/>
                        <br/>
                        A complete re-vamp of my final projects back in June 2022 for CSE 331 at the
                        at the University of Washington. Being swamped with studying for three different
                        finals, I couldn't find the time to dive deep into the project and turned in a
                        superficial but complete project.
                        <br/>
                        <br/>
                        A few month passes by and I realize that this is one of the most important projects
                        I've done. It taught me how web applications work, what frameworks are, and how to
                        approach these types of projects.
                        <br/>
                        <br/>
                        Taking up this project again, I've learned much more about ReactJS, Kotlin, Spark,
                        Ktor, Javascript, Typescript and deployment. Yay, more skills to put on my resume. In all
                        seriousness though, it was very annoying and frustrating to try to learn all these new
                        technologies in such a short time. But it was fun :P
                    </p>
                </Modal.Body>

            </Modal>
        </>
    )
}