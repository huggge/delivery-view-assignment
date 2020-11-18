import React, { useEffect } from "react";

import PickedBoxItem from "../PickedBoxItem";
import PrevNext from "../PrevNext";
import Error from "../views/Error";

import buttonState from "../../buttonState";

const prevPage = "/boxlist";
const nextPage = "/delivery";
const active = "ui big button";

interface Props {
    userBoxes: Array<box>;
    setButtonMenu: (obj: { start: string; storage: string; items: string; delivery: string; confirm: string }) => void;
    setUserBoxes: Function;
}

type box = {
    type: string;
    id: number;
    name: string;
    checked: boolean;
    isPicked: boolean;
};

const PickedBoxList: React.FC<Props> = ({ setButtonMenu, setUserBoxes, userBoxes }) => {
    let renderErrorOrPickedList;

    userBoxes.forEach((box: box) => {
        if (box.checked) {
            renderErrorOrPickedList = true;
        }
    });

    useEffect(() => {
        setButtonMenu({
            ...buttonState,
            items: "ui large button",
        });
    }, [setButtonMenu]);

    if (!renderErrorOrPickedList) {
        return (
            <Error />
        );
    }
    return (
        <div className="outercontainer">
            <div className="subheader">
                <div className="headerimg">
                    <img src="img/open-box.svg" alt="Moving box" className="img" />
                </div>
                <h1>Välj saker</h1>
            </div>
            <h2>
                Ange specifika saker du vill ha urplockat
                <br />
                och levererat ur respektive lådor.
            </h2>
            <div className="pickedboxlistcontainer">
                {userBoxes.map((box: box) => {
                    if (box.checked) {
                        return (
                            <PickedBoxItem key={box.id} box={box} userBoxes={userBoxes} setUserBoxes={setUserBoxes} />
                        );
                    }
                    return null;
                })}
            </div>
            <PrevNext prevPage={prevPage} nextPage={nextPage} prevClass={active} nextClass={active} />
        </div>
    );
};

export default PickedBoxList;
