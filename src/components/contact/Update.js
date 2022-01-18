import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getContact,updateContact} from "../../actions/contactAction";
import { useHistory,useParams } from "react-router-dom";

export const Update = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const contact = useSelector(state=> state.contactReducer.contact)

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [website, setwebsite] = useState("");

useEffect(()=>{
if (contact != null) {
    setname(contact.name);
    setemail(contact.email);
    setphone(contact.phone);
    setwebsite(contact.website);
}
    dispatch(getContact(id))
},[contact]);

const handleUpdate = (e) =>{
    e.preventDefault();

    const update_contact = Object.assign(contact,{
        name: name,
        email: email,
        phone: phone,
        website: website
    });
    dispatch(updateContact(update_contact));
history.push("/");
}


  return (
    <div className="container col-4 my-5 shadow p-5">
      <form onSubmit={e => handleUpdate(e)}>
        <div className="title text-center mb-4">
          <h3>Update Contact</h3>
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

        <button type="submit" className="btn btn-warning btn-block" style={{color: 'white'}}>
          Update
        </button>
      </form>
    </div>
  );
};
export default Update;
