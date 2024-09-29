import "./Projects.css"
import Project_Discription from "./Project_Discription.js";
function Card(props){
    return(
        <>
            <div className={"  text-amber-50  bg-[#0B1224] w-[60%] h-full"}>
                <div
                    className="  ml-[10%] w-[80%] h-[10%] flex items-center pl-[2%] rounded-t border-2 border-b-[#181A4B]">
                    <button disabled className="bg-rose-400 mr-[2%] rounded-full h-3 w-3"></button>
                    <button disabled className="bg-orange-600 mr-[2%] rounded-full h-3 w-3"></button>
                    <button disabled className="bg-green-500 mr-[2%] rounded-full h-3 w-3"></button>
                    <div className="pl-[18%] text-[#54eb13] font-extrabold text-2xl ">{props.title}</div>
                </div>
                <div
                    className=" font-medium flex flex-col  font-mono ml-[10%] w-[80%]  h-[70%]   pl-[2%]  border-2 border-t-[#181A4B]  ">
                    <div className="flex  h-[85%] pt-[3%]">
                        {props.content}
                    </div>
                    <div className="flex pl-[2%]   items-end  ">
                        <a className=" text-xl" href={props.github} ><button className="bg-purple-600 p-[15%] rounded-xl font-bold ">Github</button></a>
                    </div>

                </div>

            </div>
        </>
    );
}

export function Project() {
    return (
        <>

            <div className="container">
                <div className="font-bold w-full text-4xl pt-[2%]  flex text-amber-50 justify-center ">
                    <div className="bg-[#121e3d] p-[0.7%] rounded-2xl">Projects</div>
                </div>
                <ul id="cards">
                    <li className="card" id="card1">

                        <div className="card-body">
                            <Card {...Project_Discription.Pixel_Prompt}/>
                        </div>
                    </li>
                    <li className="card" id="card2">
                        <div className="card-body">
                            <Card{...Project_Discription.Color_World}/>
                        </div>
                    </li>
                    <li className="card" id="card3">
                        <div className="card-body ">
                            <Card {...Project_Discription.Sky_Watch}/>
                        </div>
                    </li>
                    <li className="card" id="card4">
                        <div className="card-body ">
                            <Card {...Project_Discription.WGAN_GP}/>
                        </div>
                    </li>
                    <li className="card" id="card5">
                        <div className="card-body ">
                            <Card {...Project_Discription.Sakura_trails}/>
                        </div>
                    </li>

                </ul>
            </div>


        </>
    );
}