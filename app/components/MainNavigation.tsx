import { NavLink } from "@remix-run/react";

const MainNavigation = () => {
  let activeClass = "text-white hover:text-gray-200 text-xl ";
  let inactiveClass = "text-indigo-500 text-xl fonts-semibold";
  return (
    <nav className="bg-orange-500">
      <ul className="flex space-x-4 justify-center p-2">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/notes"}
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            My Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
