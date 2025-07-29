import {NavLink} from "react-router";
import s from './Header.module.css'
import clsx from "clsx";

const Header = () => {
    return (
        <ul className={s.ul}>
            <li className={s.li}>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className={clsx(s.li, s.colorPink)}>
                <NavLink to={'/deck'}>Deck</NavLink>
            </li>
            <li className={clsx(s.li, s.colorPurple)}>
                <NavLink to={'/game'}>Game</NavLink>
            </li>
        </ul>
    );
};

export default Header;