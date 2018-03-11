import * as React from "react";

interface MenuProps {
    titles: string[]
    isNav?: boolean;
}

interface MenuState {

}

export class Menu extends React.Component<MenuProps, MenuState> {
    constructor(props) {
        super(props);
    }

    checkBody = () => {
        if (this.props.isNav) {
            return (
                <nav>
                    <ul className={"nav-menu"}>
                        {this.props.titles.map((value, key) => <li key={key}><a href="#" className={"nav-link"}>{value}</a></li>)}
                    </ul>
                </nav>
            );
        } else {
            return (
                <ul className={"aSide-menu"}>
                    {this.props.titles.map((value, key) => <li key={key}><a href="#" className={"nav-link"}>{value}</a></li>)}
                </ul>);
        }
    }


    render() {
        return (
            <div className={"wrapper"}>
                {this.checkBody()}
            </div>
        )

    }
}

