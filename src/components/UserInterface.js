import React from "react"
import style from "../styles/UserInterface.module.css"
import {Info} from "../utils/Modal";
import {Canvas} from "../utils/Canvas";

function UserInterface(props) {
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.info}>
                    <Info/>
                </div>
                <Welcome/>
                <div className={style.menu}>
                    <Canvas path={props.set}/>
                </div>
            </div>
        </div>
    )
}

const Welcome = () => {
    return(
        <>
            <h2>Welcome to my University!</h2>
            <hr/>
        </>
    );
}



export {UserInterface};