import * as React from "react";
import {HelpInfo} from "../components/HelpInfo";

interface FooterProps {

}

interface FooterState {

}

export class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"footer"}>
                <HelpInfo/>
            </div>
        );
    }
}