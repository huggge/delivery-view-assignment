import React from "react";

import PrevNext from "../PrevNext";

const prevPage = "/boxlist";
const nextPage = "/delivery";
const active = "ui big button";

const Error = () => {
    return (
        <div className="outercontainer">
            <div className="subheader">
                <div className="headerimg">
                    <img src="img/open-box.svg" alt="Moving box" className="img" />
                </div>
                <h1>Välj saker</h1>
            </div>
            <div className="errorcontainer">
                <div>
                    <img src="/img/error.svg" alt="Error sign" className="errorimg" />
                    <h1>
                        Du har inte valt några lådor.
                        <br /> Gå tillbaka ett steg.
                    </h1>
                </div>
            </div>
            <PrevNext prevPage={prevPage} nextPage={nextPage} prevClass={active} nextClass={active} />
        </div>
    );
};

export default Error;
