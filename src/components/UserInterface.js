import React from "react"
import style from "../styles/UserInterface.module.css"
import {Buildings, Selection, Draw, Clear} from "../utils/utils";
import {Info} from "../utils/Modal";
import {Canvas} from "../utils/Offcanvas";

function UserInterface(props) {
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.info}>
                    <Info/>
                </div>
                <Welcome/>
                <Canvas props={props}/>




                {/*<Welcome/>*/}
                {/*<>*/}
                {/*    <Dropdowns start={props.start} end={props.end}/>*/}
                {/*</>*/}
                {/*<>*/}
                {/*    <Submit start={props.start} end={props.end} set={props.set}/>*/}
                {/*</>*/}
            </div>
        </div>
    )
}

const Welcome = () => {
    return(
        <>
            <h2>Welcome to my University!</h2>
            {/*<p>Choose two buildings on campus and find the most optimal route between*/}
            {/*    them!</p>*/}
            <hr/>
        </>
    );
}

export const Dropdowns = props => {
    const buildings = Buildings();

    return(
        <div className={style.dropdown}>
            <Selection title={"Start"}
                       buildings={buildings}
                       type={props.start.type}
                       select={props.start.set}/>
            <div className={style.adjust}>
                <Selection title={"End"}
                           buildings={buildings}
                           type={props.end.type}
                           select={props.end.set}/>
            </div>
        </div>
    );
}

export const Submit = props => {
    return(
        <div className={style.submit} >
            <Draw startName={props.start.type} endName={props.end.type} set={props.set}/>
            <Clear setStart={props.start.set} setEnd={props.end.set} set={props.set}/>
        </div>
    );
}

export {UserInterface};