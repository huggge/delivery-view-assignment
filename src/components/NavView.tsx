import React from "react";

interface Props {
    start: string;
    storage: string;
    items: string;
    delivery: string;
    confirm: string;
}

const NavView: React.FC<Props> = ({ start, storage, items, delivery, confirm }) => {
    return (
        <div className="navview">
            <button className={start}>Start</button>
            <button className={storage}>Lager</button>
            <button className={items}>Saker</button>
            <button className={delivery}>Leverans</button>
            <button className={confirm}>Bekräfta</button>
        </div>
    );
};

export default NavView;
