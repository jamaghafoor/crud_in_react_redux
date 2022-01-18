import { BsFillPencilFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from "../../actions/contactAction"; 
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
const Home = () => {
const dispatch = useDispatch();
  const contact = useSelector(state => state.contactReducer.contacts);
  
const handleDelete = (id) =>{
  dispatch(deleteContact(id));
}

    return (
        <div className="container mt-4" >
          <div className="heading text-center">
            <h2>My Contact List</h2>
          </div>
       <table className="table align-middle">
  <thead className="tableHead" style={{color: 'white'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   {
     contact.map((cont, index) =>
     <tr key={index}>
      <th scope="row">{index+1}</th>
      <td><Avatar name={cont.name} size="40" round={true} style={{marginRight: '10px'}}/>{cont.name}</td>
      <td>{cont.email}</td>
      <td>{cont.phone}</td>
      <td>{cont.website}</td>
      <td className="actions">
<Link to={`/contact/update/${cont.id}`}><button type="button" className="btn  btn-sm px-1 my-1" style={{color: '#ffc107', fontSize: '18px'}}>
          <BsFillPencilFill/>
        </button></Link>
        
        <button type="button" className="btn  btn-sm px-3" style={{color: '#dc3545',fontSize: '18px'}} onClick={()=> handleDelete(cont.id)}>
        <FaMinusCircle />
        </button>
       
      </td>
    </tr>
     )    
   }
    
  </tbody>
</table>
        </div>
    )
}

export default Home
