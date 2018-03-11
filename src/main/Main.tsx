import * as React from "react";
import {PetCard} from "../components/PetCard";

interface MainProps {

}

interface MainState {

}

export class Main extends React.Component<MainProps, MainState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"main"}>
                <PetCard/>
                <PetCard/>
                <PetCard/>
            </div>
        );
    }
}