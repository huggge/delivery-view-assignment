import React, { useEffect } from "react";

import PrevNext from "../PrevNext";

import buttonState from "../../buttonState";

interface Props {
    setButtonMenu: (obj: {
        start: string;
        storage: string;
        items: string;
        delivery: string;
        confirm: string;
    }) => void;
}

const prevPage: string = "";
const nextPage: string = "/boxlist";
const active: string = "ui big button";
const disabled: string = "ui big disabled button";

const Start: React.FC<Props> = ({ setButtonMenu }) => {

    useEffect(() => {
        setButtonMenu({
            ...buttonState,
            start: "ui large button",
        });
    }, [setButtonMenu]);

    return (
        <div className="outercontainer">
            <div className="subheader">
                <div className="headerimg">
                    <img src="img/trolley.svg" alt="Pirra" className="img" />
                </div>
                <h1>Start</h1>
            </div>
            <div className="startcontainer">
                <div>
                    <h2>Börja plocka!</h2>
                    <h2>
                        Här kan du välja ut enskilda saker ur ditt förråd.
                        <br />
                        Tryck på nästa för att sätta igång
                    </h2>
                </div>
                <img src="img/moving-truck.svg" alt="Moving box" className="carimg animation" />
                <hr />
            </div>
            <PrevNext prevPage={prevPage} nextPage={nextPage} prevClass={disabled} nextClass={active} />
        </div>
    );
}

export default Start;
