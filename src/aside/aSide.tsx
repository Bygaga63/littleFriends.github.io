import * as React from "react";
import {Menu} from "../components/Menu";

const TITLES =  ["SOS!!!", "кошки", "собаки","другие животные",
    "в добрые руки","история добрых дел"]

interface aSideProps {
    isDisplay? : boolean;
}

interface aSideState {

}

export class Aside extends React.Component<aSideProps, aSideState> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.isDisplay && <Menu titles={TITLES}/>}
            </div>
        );
    }
}