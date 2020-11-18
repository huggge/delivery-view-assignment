import React, { useEffect, useState, useRef } from "react";

import PrevNext from "../PrevNext";

import buttonState from "../../buttonState";

const prevPage = "/picked-boxes";
const nextPage = "/confirm";
const active = "ui big button";

interface Props {
    userBoxes: Array<box>;
    setButtonMenu: (obj: { start: string; storage: string; items: string; delivery: string; confirm: string }) => void;
    userDetails: {
        name: string;
        lastname: string;
        adress: string;
        zipcode: string;
        phone: string;
        date: string;
        time: string;
        notes: string;
    };
    setUserDetails: Function;
    pickerDetails: {};
    setPickerDetails: Function;
    handleChange?: (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

type box = {
    type: string;
    id: number;
    name: string;
    checked: boolean;
};

const Delivery: React.FC<Props> = ({ setButtonMenu, userBoxes, pickerDetails, setPickerDetails, userDetails, setUserDetails }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [buttonColor, setButtonColor] = useState(true);


    const handleChange: Props["handleChange"] = (e) => {
        const value = e.target.value;
        setUserDetails({
            ...userDetails,
            [e.target.name]: value,
        });
    };

    const handleSubmit: Props["handleSubmit"] = (e) => {
        e.preventDefault();
        setButtonColor(false);
        setPickerDetails({
            ...pickerDetails,
            boxes: userBoxes.filter((box) => box.checked === true),
            delivery: userDetails,
        });
    };

    useEffect(() => {
        setButtonMenu({
            ...buttonState,
            delivery: "ui large button",
        });
    }, [setButtonMenu]);

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="outercontainer">
            <div className="subheader">
                <div className="headerimg">
                    <img src="img/map.svg" alt="Map" className="mapimg" />
                </div>
                <h1>Leverans</h1>
            </div>
            <div>
                <h2>Ange vart du önskar få dina saker levererade</h2>
            </div>
            <div className="deliverycontainer">
                <br />
                <hr />
                <form onSubmit={handleSubmit} className="ui form medium deliveryform">
                    <div className="field">
                        <input
                            ref={inputRef}
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            placeholder="Namn"
                        />
                    </div>

                    <div className="field">
                        <input
                            type="text"
                            name="lastname"
                            value={userDetails.lastname}
                            onChange={handleChange}
                            placeholder="Efternamn"
                        />
                    </div>

                    <div className="field">
                        <input
                            type="text"
                            name="adress"
                            value={userDetails.adress}
                            onChange={handleChange}
                            placeholder="Adress"
                        />
                    </div>

                    <div className="field">
                        <input
                            type="text"
                            name="zipcode"
                            value={userDetails.zipcode}
                            onChange={handleChange}
                            placeholder="Postnummer"
                        />
                    </div>

                    <div className="field">
                        <input
                            type="text"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleChange}
                            placeholder="Telefonnummer"
                        />
                    </div>
                    <div className="field">
                        <input type="date" name="date" value={userDetails.date} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <select name="time" value={userDetails.time} onChange={handleChange}>
                            <option>Välj tidpunkt</option>
                            <option>08.00 - 10.00</option>
                            <option>10.00 - 12.00</option>
                            <option>12.00 - 14.00</option>
                            <option>14.00 - 16.00</option>
                        </select>
                    </div>
                    <div className="field">
                        <textarea
                            name="notes"
                            value={userDetails.notes}
                            onChange={handleChange}
                            placeholder="Övriga kommentarer"
                        />
                    </div>
                    <button className={buttonColor ? "ui button" : "ui green button"} type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <PrevNext prevPage={prevPage} nextPage={nextPage} prevClass={active} nextClass={active} />
        </div>
    );
};

export default Delivery;
