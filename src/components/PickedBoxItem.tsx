import React, { useState, useEffect, useRef } from "react";

interface Props {
    userBoxes: Array<box>;
    setUserBoxes: Function;
    box: box;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

type box = {
    type: string;
    id: number;
    name: string;
    checked: boolean;
    description?: string;
    isPicked?: boolean;
};

const PickedBoxItem: React.FC<Props> = ({ userBoxes, setUserBoxes, box }) => {
    const [value, setValue] = useState<string | undefined>("");
    const [done, setDone] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: Props["handleChange"] = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit: Props["handleSubmit"] = (e) => {
        e.preventDefault();
        const tempUserBoxes = Array.from(userBoxes);

        tempUserBoxes.map((tempBox: box) => {
            if (box.id === tempBox.id) {
                if (value !== "") {
                    tempBox.description = value;
                    box.isPicked = true;
                }
                if (value === "") box.isPicked = false;
            }
            return null;
        });
        setUserBoxes(tempUserBoxes);
    };

    useEffect(() => {
        if (box.isPicked) {
            setDone(true);
        }
        if (!box.isPicked) {
            setDone(false);
        }
    }, [box.isPicked]);

    useEffect(() => {
        setValue(box.description);
    }, [box.description]);

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <div className={`${done ? "item-card-longer greenify" : "item-card-longer"}`}>
                <div className="item-card">
                    <img src="img/package.svg" alt="Moving box" className="boximg" />
                    <p>
                        <b>{box.name}</b>
                    </p>
                </div>
                <form className="ui form large">
                    <div className="m10">
                        <input
                            ref={inputRef}
                            type="text"
                            value={value}
                            onChange={handleChange}
                            onKeyUp={handleSubmit}
                            placeholder="Beskriv dina saker"
                            className=""
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PickedBoxItem;
