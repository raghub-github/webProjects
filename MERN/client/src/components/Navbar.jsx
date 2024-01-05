import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { isLoggedIn, user, isLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(user.isAdmin);
  },[isLoading, user])

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Logo Here</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Regitser</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
              {!isLoading && isAdmin && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
