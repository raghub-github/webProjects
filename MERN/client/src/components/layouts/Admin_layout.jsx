// import React from 'react'
import { FaUser, FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdMiscellaneousServices } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <TiContacts />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <MdMiscellaneousServices />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
