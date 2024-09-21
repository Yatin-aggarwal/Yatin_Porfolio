import {NavLink} from "react-router-dom";

export function Navbar (){
    return(
        <>
        <div className="w-full h-[8%] border-b border-b-cyan-50 flex items-center md:gap-[10%] sm:gap-[5%] ">
            <NavLink to={"/"} className="pl-[2%] col-span-1 font-bold sm:text-lg md:text-2xl"><div > <span className="text-gray-500">Yatin</span> <span className="text-emerald-400">Aggarwal</span></div></NavLink>
            <div className="pl-[10%] w-[74%] text-amber-50 col-span-2    flex justify-end font-medium">
                <NavLink  className={({isActive}) => `${isActive ? "text-emerald-600" : "text-amber-50"} pr-[4%] hover:text-gray-500 ` }  to={"/"}  >
                    <div >
                        HOME
                    </div>
                </NavLink>
                <NavLink className={({isActive}) => `${isActive ? "text-emerald-600" : "text-amber-50"} pr-[4%] hover:text-gray-500 ` }  to={"/about"}>
                    <div >
                        ABOUT
                    </div>
               </NavLink>
                 <NavLink className={({isActive}) => `${isActive ? "text-emerald-600" : "text-amber-50"} pr-[4%] hover:text-gray-500 ` }  to={"/skills"}>
                    <div >
                        SKILLS
                    </div>
                 </NavLink>
                <NavLink className={({isActive}) => `${isActive ? "text-emerald-600" : "text-amber-50"}  hover:text-gray-500 ` }  to={"Projects"}>
                    <div >
                        PROJECTS
                    </div>
                </NavLink>
            </div>
        </div>

        </>
    )
}