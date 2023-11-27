import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
   const dispatch = useDispatch();

   const deleteUser = (id) => {
      dispatch(removeUser(id));
   }

   const data = useSelector((state) => {
      return state.users;
   })

   return (
      <Wrapper>
      {
         data.map((user, id) => {
            return <li key={id}>
               {user}
               <button className="btn btn-delete" onClick={ () => deleteUser(id) }> 
                  <FaTrashAlt />                  
               </button>
            </li>
         })
      }
      </Wrapper>
   )
}

const Wrapper = styled.section`

`;
export default DisplayUsers