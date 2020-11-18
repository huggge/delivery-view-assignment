import React, { useEffect } from "react";

import BoxItem from "../BoxItem";
import PrevNext from "../PrevNext";

import buttonState from "../../buttonState";

const prevPage: string = "/";
const nextPage: string = "/picked-boxes";
const active: string = "ui big button";

interface Props {
    setButtonMenu: (obj: { start: string; storage: string; items: string; delivery: string; confirm: string }) => void;
    count: number;
    setCount: (number: number) => void;
    userBoxes: Array<box>;
    setUserBoxes: Function;
}

type box = {
    type: string;
    id: number;
    name: string;
    checked: boolean;
};

const BoxList: React.FC<Props> = ({ setButtonMenu, count, setCount, setUserBoxes, userBoxes }) => {
    useEffect(() => {
        setButtonMenu({
            ...buttonState,
            storage: "ui large button",
        });
    }, [setButtonMenu]);

    return (
        <div>
            <div className="outercontainer">
                <div className="subheader">
                    <div className="headerimg">
                        <img src="img/box.svg" alt="Moving box" className="img" />
                    </div>
                    <h1>Välj lådor</h1>
                    <br />
                </div>
                <div className="boxlistcontainer">
                    {userBoxes.map((box: box) => {
                        return (
                            <BoxItem
                                key={box.id}
                                setCount={setCount}
                                userBoxes={userBoxes}
                                setUserBoxes={setUserBoxes}
                                box={box}
                            />
                        );
                    })}
                </div>
                <PrevNext prevPage={prevPage} nextPage={nextPage} prevClass={active} nextClass={active} />
            </div>
            <div className="counter">
                <br />
                <h2>{count} Kartonger valda</h2>
            </div>
        </div>
    );
};

export default BoxList;
