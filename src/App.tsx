import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Start from "./components/views/Start";
import BoxList from "./components/views/BoxList";
import PickedBoxList from "./components/views/PickedBoxList";
import Delivery from "./components/views/Delivery";
import NavView from "./components/NavView";

import buttonState from "./buttonState";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirm from "./components/views/Confirm";

const App: React.FC = () => {
    const [userBoxes, setUserBoxes] = useState([]);
    const [buttonMenu, setButtonMenu] = useState(buttonState);
    const [count, setCount] = useState(0);
    const [userDetails, setUserDetails] = useState({
        name: "",
        lastname: "",
        adress: "",
        zipcode: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
    });
    const [pickerDetails, setPickerDetails] = useState({
        boxes: [],
        delivery: {},
    });

    const printDetails = () => {
        console.log(pickerDetails);
    }

    useEffect(() => {
        fetch("http://localhost:3000/data/storage-large.json")
            .then((response) => response.json())
            .then((json) => setUserBoxes(json));
    }, []);

    return (
        <Router>
            <div className="app">
                <Header />
                <NavView
                    start={buttonMenu.start}
                    storage={buttonMenu.storage}
                    items={buttonMenu.items}
                    delivery={buttonMenu.delivery}
                    confirm={buttonMenu.confirm}
                />
                <Switch>
                    <Route path="/" exact render={() => <Start setButtonMenu={setButtonMenu} />} />
                    <Route
                        path="/boxlist"
                        render={() => (
                            <BoxList
                                setButtonMenu={setButtonMenu}
                                count={count}
                                setCount={setCount}
                                setUserBoxes={setUserBoxes}
                                userBoxes={userBoxes}
                            />
                        )}
                    />
                    <Route
                        path="/picked-boxes"
                        render={() => (
                            <PickedBoxList
                                setButtonMenu={setButtonMenu}
                                setUserBoxes={setUserBoxes}
                                userBoxes={userBoxes}
                            />
                        )}
                    />
                    <Route
                        path="/delivery"
                        render={() => (
                            <Delivery
                                setButtonMenu={setButtonMenu}
                                userBoxes={userBoxes}
                                userDetails={userDetails}
                                setUserDetails={setUserDetails}
                                pickerDetails={pickerDetails}
                                setPickerDetails={setPickerDetails}
                            />
                        )}
                    />
                    <Route
                        path="/confirm"
                        render={() => (
                            <Confirm setButtonMenu={setButtonMenu} printDetails={printDetails} />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
