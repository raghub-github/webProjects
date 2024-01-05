// import React from 'react'
import { FaUser, FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdMiscellaneousServices } from "react-icons/md";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
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
