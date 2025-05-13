import { Link, useLocation } from "react-router-dom";
import BottomPromo from "./BottomPromo";

const navItems = [
  { name: "Outlet", path: "/outlet", icon: "🏪" },
  { name: "Menu", path: "/", icon: "📋" },
  { name: "Account", path: "/account", icon: "👤" },
  { name: "More", path: "/more", icon: "☰" },
];

export default function Navbar() {
  const location = useLocation();
  const current = location.pathname;

  return (
    <div className="fixed bottom-0 w-full  flex flex-col gap-0 justify-center items-center">
      <nav className=" w-11/12 px-2 py-3 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)] bg-white border border-border rounded-lg border-solid flex items-center justify-between ">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex w-full ${
              current === item.path
                ? "border-b-2 border-primary mb-2"
                : "border-b-0 border-transparent"
            }   bg-transparent flex-col gap-1 justify-center items-center text-xs h-full font-sfDisplay font-medium leading-normal `}
          >
            <div
              className={`text-xl ${
                current === item.path ? "text-primary" : "text-textDark"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`${
                current === item.path ? "text-primary " : "text-textDark"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      <BottomPromo />
    </div>
  );
}
