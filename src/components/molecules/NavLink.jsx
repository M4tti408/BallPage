import Link from "next/link";

export default function NavLink({text, href, active}) {
    return (
        <>
            <Link className={`nav__link`} href={href}>
                {text}
            </Link>
        </>
    );
}
