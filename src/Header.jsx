import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("rendering NavBar");
  return (
    <header className="flex flex-wrap justify-between p-5 h-16 bg-slate-400">
      <NavLinks />
      <div className="flex gap-2">
        <Link to={`/cart`}>Cart</Link>
        <div>
          {/* num of items in cart will go here */}
          #2
        </div>
      </div>
    </header>
  );
};

export { Header };
