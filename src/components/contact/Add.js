import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
export const Add = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [website, setwebsite] = useState("");

  const contact = {
      id:shortid.generate(),
    name,
    email,
    phone,
    website,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(contact));
    history.push("/");
  };

  return (
    <div className="container col-4 my-5 shadow p-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="title text-center mb-4">
          <h3>Add Contact</h3>
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form1Example2">
            Name
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form1Example1">
            Email address
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form1Example2">
            Phone
          </label>
          <input
            type="text"
            value={phone}
            className="form-control"
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form1Example2">
            Website
          </label>
          <input
            type="text"
            value={website}
            className="form-control"
            onChange={(e) => setwebsite(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Add;
