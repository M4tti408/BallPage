import Link from "next/link";
import {useState} from "react";

import CartIcon from "../molecules/CartIcon";
import AccountIcon from "../molecules/AccountIcon";
import NavLink from "../molecules/NavLink";

const LINKS = [
    {text: "Home", href: "/"},
    {text: "Products", href: "/products"},
    {text: "About", href: "/about"},
    {text: "Gallery", href: "/gallery"},
    {text: "Contact", href: "/contact"},
];

export default function NavBar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <>
            <header>
                <nav className={`nav`}>
                    <Link href={"/"}>
                        <h1 className="logo">Fanpage</h1>
                    </Link>
                    <div
                        onClick={() => setNavActive(!navActive)}
                        className={`nav__menu-bar`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                        {LINKS.map((menu, idx) => (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}
                                style={{textAlign: "center"}}
                            >
                                <NavLink active={activeIdx === idx} {...menu} />
                            </div>
                        ))}
                    </div>

                    <div>
                        <CartIcon/>

                        <AccountIcon/>
                    </div>
                </nav>
            </header>
        </>
    );
}
