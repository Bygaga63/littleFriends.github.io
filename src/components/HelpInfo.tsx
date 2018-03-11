import * as React from "react";

interface HelpInfoProps {
    isHeader?: boolean;
}

interface HelpInfoState {

}

export class HelpInfo extends React.Component<HelpInfoProps, HelpInfoState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className={"list-info"}>
                    <li><a href="#"><img className={"logo-img"} src="../../static/img/littleFriends.png" alt=""/></a></li>
                    <li><a href="#"><img className={"icons"} src="../../static/img/donate.png" alt=""/><b>Сделать пожертвование</b></a></li>
                    <li><a href="#"><img className={"icons"} src="../../static/img/help.png" alt=""/><b>Помочь делом</b></a></li>
                    <li><a href="#">Расскажите о нас в соцсетях:</a></li>
                    {this.props.isHeader &&<li><a href="#" className={"nav-link"}>Вход</a></li>}
                </ul>
            </div>
        );
    }
}