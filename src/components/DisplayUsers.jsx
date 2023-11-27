import { useSelector } from "react-redux"
import styled from "styled-components"

const DisplayUsers = () => {

   const data = useSelector((state) => {
      return state.users;
   })

   return (
      <Wrapper>
      {
         data.map((user, id) => {
            return <li key={id}>
               {user}
            </li>
         })
      }
      </Wrapper>
   )
}

const Wrapper = styled.section`

`;
export default DisplayUsers