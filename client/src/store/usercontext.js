import { createContext,useState } from "react";
import { useCookies } from "react-cookie";


export const UserContext = createContext('')

function User({children})

{

//   const user = JSON.parse(localStorage.getItem('user'));
//   const admin = JSON.parse(localStorage.getItem('admin'));

    // const [userDetails,setUserDetails] = useState(user)
    // const [adminDetails, setAdminDetails]=useState(admin)
    const [cookies,setCookie,removeCookie] = useCookies([]);
    return(
        <UserContext.Provider value={{cookies,setCookie,removeCookie}}>
          {children}
        </UserContext.Provider>
    )
}

export default User;