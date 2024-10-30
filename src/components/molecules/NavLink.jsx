import Link from "next/link";

export default function NavLink({ text, href, active }) {
  return (
    <>
      <Link href={href}>
        <a className={`nav__link`}>{text}</a>
      </Link>
    </>
  );
}
