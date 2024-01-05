import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Edit = () => {
  const defauldEditFormData = {
    username: "",
    email: "",
    phone: "",
  };
  const params = useParams();
  const { authorizationToken } = useAuth();
  const [edit, setEdit] = useState(defauldEditFormData);
  // const { user } = useAuth();
  // const [userData, setUserData] = useState(true);

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      setEdit({
        username: data.username,
        email: data.email,
        phone: data.phone,
      });
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
    // eslint-disable-next
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdit({ ...edit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(edit),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("User updated successfully");
        console.log(data);
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User</h1>
        </div>
        <div className="container grid grid-two-cols">
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  required
                  onChange={handleInput}
                  value={edit.username}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  onChange={handleInput}
                  value={edit.email}
                />
              </div>
              <div>
                <label htmlFor="mobile">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  required
                  onChange={handleInput}
                  value={edit.phone}
                />
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
