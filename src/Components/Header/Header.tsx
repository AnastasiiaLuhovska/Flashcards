import {NavLink} from "react-router";
import s from './Header.module.css'
import clsx from "clsx";

const Header = () => {
    return (
        <ul className={s.ul}>
            <li className={s.li}>
                <svg width='20' height='20'><use href='/symbol-defs.svg#icon-computer'></use></svg>
                <NavLink to={'/'}>Profile</NavLink>
            </li>
            <li className={clsx(s.li, s.colorPink)}>
                <svg width='20' height='20'><use href='/symbol-defs.svg#icon-cloud'></use></svg>
                <NavLink to={'/deck'}>Deck</NavLink>
            </li>
            <li className={clsx(s.li, s.colorPurple)}>
                <svg width='20' height='20'><use href='/symbol-defs.svg#icon-game'></use></svg>
                <NavLink to={'/game'}>Game</NavLink>
            </li>
        </ul>
    );
};

export default Header;