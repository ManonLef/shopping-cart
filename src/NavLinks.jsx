import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <Link to={`/shop`}>Shop</Link>
        </li>
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavLinks };
