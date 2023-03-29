import { NavLink } from "react-router-dom";
import style from './Link.module.css'

const Link = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.navbarList}>
                <li className={style.navbarItem}>
                    <NavLink to="/" exact className={style.navbarLink}  activeClassName={style.active}>
                        Главная
                    </NavLink>
                </li>
                <li className={style.navbarItem}>
                    <NavLink to='/marks' className={style.navbarLink} activeClassName={style.active}>
                        Марки
                    </NavLink>
                </li>
                <li className={style.navbarItem}>
                    <NavLink to={style.tutorial} className={style.navbarLink} activeClassName={style.active}>
                        Подписка
                    </NavLink>
                </li>
                <li className={style.navbarItem}>
                    <NavLink to={style.tutorial} className={style.navbarLink} activeClassName={style.hello}>
                        О компании
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Link;
