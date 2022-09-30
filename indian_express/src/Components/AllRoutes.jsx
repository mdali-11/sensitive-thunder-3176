import { Route ,Routes} from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"



 const AllRoutes=()=>{


    

    return <div>


        <Routes>
        <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Navbar />}></Route>
        </Routes>
    </div>
}

export default AllRoutes;