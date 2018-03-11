import * as React from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Aside} from "./aside/aSide";
import {Main} from "./main/Main";

interface AppProps {

}

interface AppState {
    display: boolean;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
    }
    state = {
        display: false
    }
    render() {
        const {display} = this.state;
        return (
            <div >
                <Header/>
                <div className={"wrapper"}>
                {display &&  <Aside isDisplay/>}
                <Main/>
                </div>
                <Footer/>
            </div>
        );
    }
}