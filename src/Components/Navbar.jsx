import {NavLink} from "react-router-dom";

export function Navbar (){
    return(
        <>
        <div className="w-full h-[8%] border-b border-b-cyan-50 flex items-center gap-[10%] ">
            <NavLink to={"/"} className="pl-[2%] col-span-1 font-bold text-2xl"><div > <span className="text-gray-500">Yatin</span> <span className="text-emerald-400">Aggarwal</span></div></NavLink>
            <div className="pl-[10%] w-[74%] text-amber-50 col-span-2    flex justify-end font-medium">
                <NavLink className="pr-[4%]" to={"/"}>
                    <div >
                        HOME
                    </div>
                </NavLink>
                <NavLink className="pr-[4%]" to={"/about"}>
                    <div >
                        ABOUT
                    </div>
               </NavLink>
                 <NavLink className="pr-[4%]" to={"/skills"}>
                    <div >
                        SKILLS
                    </div>
                 </NavLink>
                <NavLink to={"Projects"}>
                    <div >
                        PROJECTS
                    </div>
                </NavLink>
            </div>
        </div>

        </>
    )
}