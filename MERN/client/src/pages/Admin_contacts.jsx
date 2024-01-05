import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);
  const getContactData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      // const data = await response.json();
      if (response.ok) {
        toast.success("Contact Deleted Successfully");
        getContactData();
      }
      else{toast.error("Contact Not Deleted");}
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContactData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="contact-content container">
          <h1 className="main-heading">Contact List</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.message}</td>
                    <td>{user.date}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => deleteContact(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
