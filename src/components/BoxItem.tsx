import React from "react";

interface Props {
    userBoxes: Array<box>;
    setUserBoxes: Function;
    setCount: (number: number) => void;
    selectBox?: (obj: Object) => void;
    box: box;
}

type box = {
    type: string;
    id: number;
    name: string;
    checked: boolean;
};

const BoxItem: React.FC<Props> = ({ userBoxes, setUserBoxes, setCount, box }) => {
    let tempCount = 0;

    const selectBox = (box: box) => {
        const tempUserBoxes: box[] = Array.from(userBoxes);
        tempUserBoxes.map((tempBox: box) => {
            if (box.id === tempBox.id) {
                return (tempBox.checked = !tempBox.checked);
            }
            return null;
        });

        tempUserBoxes.map((tempBox: box) => {
            if (tempBox.checked) {
                return tempCount++;
            }
            return null;
        });

        setCount(tempCount);
        setUserBoxes(tempUserBoxes);
    };

    return (
        <div onClick={() => selectBox(box)} className={`${box.checked ? "card-clicked" : "card"}`}>
            <img src="img/box-item.svg" alt="Moving box" className="boximg" />
            <div className="card-container">
                <h5 className="ml">
                    <b>{box.name}</b>
                </h5>
            </div>
        </div>
    );
};

export default BoxItem;
