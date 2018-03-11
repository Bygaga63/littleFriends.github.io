import * as React from "react";
import {Menu} from "../components/Menu";
import {HelpInfo} from "../components/HelpInfo";
import {Slider} from "../components/Slider";

const TITLES =  ["главная", "о фонде", "живтоные","наши программы",
        "новости","контакты", "проекты","партнерство"]

interface HeaderProps {
}

interface HeaderState {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"header"}>
                <HelpInfo isHeader/>
                <Menu titles={TITLES} isNav/>
                <Slider slides={SLIDES}/>
            </div>
        );
    }
}

const SLIDES = [
    {
        city: 'ПОМОГИ БЕЗДОМНЫМ ЖИВОТНЫМ..',
        country: 'ГОЛОДНЫЙ ТЕЛЕФОН: 89278850642 ',
        img: '../../static/img/pet1.jpg',
    },
    {
        city: 'ДЛЯ ТЕБЯ – МЕЛОЧЬ, ДЛЯ КОГО-ТО – ЖИЗНЬ...',
        country: 'МНЕ СРОЧНО НУЖНА ОПЕРАЦИЯ!',
        img: '../../static/img/pet3.jpg',
    },
    {
        city: 'ДЛЯ ТЕБЯ ЭТО ПРОСТО КОПЕЙКИ В КАРМАНЕ...',
        country: 'ДЛЯ НЕГО ВОЗМОЖНОСТЬ НЕ УМЕРЕТЬ С ГОЛОДУ!',
        img: "../../static/img/pet4.jpg",
    },
    {
        city: 'Я  ТАКОЙ  ЖЕ  ЖИВОЙ,  КАК  И  ТЫ!..',
        country: 'МНЕ ТОЖЕ ХОЧЕТСЯ ДОМОЙ И КУШАТЬ…',
        img: '../../static/img/pet2.jpg',
    },
];