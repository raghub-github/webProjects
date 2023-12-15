import { NavLink } from "react-router-dom";
// import { toast } from "react-toastify";

export const Error = () => {
  // toast.error("Sorry! Page not found");
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
          <p>
            Oops! It seems like the page you are trying to access does not exist.
            If you believe there is an issue, feel free to report it, and we will
            look into it.
          </p>
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
