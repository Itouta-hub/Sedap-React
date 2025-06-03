import { RiFileUserLine } from "react-icons/ri"; 
import { SlBasket } from "react-icons/sl";
import { RiDashboardLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi"; 
import { CgUnavailable } from "react-icons/cg"; 
import { RiForbid2Line } from "react-icons/ri"; 
import { MdFastfood } from "react-icons/md"; 
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <RiDashboardLine className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <SlBasket className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <BsPeople className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/400" className={menuClass}>
            <BiErrorAlt className="mr-2 text-xl" />
            Error 400
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/401" className={menuClass}>
            <CgUnavailable className="mr-2 text-xl" />
            Error 401
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/403" className={menuClass}>
            <RiForbid2Line className="mr-2 text-xl" />
            Error 403
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-7" to="/ListUser" className={menuClass}>
            <RiFileUserLine className="mr-2 text-xl" />
            List User
          </NavLink>
        </li>
        <li>
          <NavLink
                  id="menu-8"
                  to="/products"
                  className={menuClass}
              >
                  <MdFastfood className="mr-4 text-xl" />
                  Products
          </NavLink>
        </li>
        <li>
          <NavLink
                  id="menu-8"
                  to="/notes"
                  className={menuClass}
              >
                  <MdFastfood className="mr-4 text-xl" />
                  Notes
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
