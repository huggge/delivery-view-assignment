import React from "react";

import { Link } from "react-router-dom";

interface Props {
    prevPage: string;
    nextPage: string;
    prevClass: string;
    nextClass: string;
}

const PrevNext: React.FC<Props> = ({ prevPage, nextPage, prevClass, nextClass }) => {
    return (
        <div className="prevnext">
            <Link to={prevPage}>
                <button className={prevClass}>
                    <i className="left arrow icon"></i>
                    Bakåt
                </button>
            </Link>
            <Link to={nextPage}>
                <button className={nextClass}>
                    Nästa
                    <i className="right arrow icon"></i>
                </button>
            </Link>
        </div>
    );
}

export default PrevNext;
