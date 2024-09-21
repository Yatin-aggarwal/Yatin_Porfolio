import {Outlet} from "react-router-dom";
import {Home} from "./Components/Home.jsx";
import {Navbar} from "./Components/Navbar.jsx";
function App() {
  return (
   <>
   <div className="h-dvh w-dvh bg-[#0B1224]  overflow-scroll overscroll-none">
    <Navbar/>
       <Outlet/>
   </div>
   </>
  )
}

export default App
