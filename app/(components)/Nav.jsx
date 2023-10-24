import Link from "next/link";

const Nav = () => {
  return <nav>
    <div>
      <Link href="/">
          <FontAwesomeIcon
      </Link>
    </div>
    <div>
      <p className="text-default-text">jake@statefarm.com</p>
    </div>
  </nav>
};

export default Nav;
