
import C from "/src/assets/Languages/C.png"
import Python from "/src/assets/Languages/Python.png"
import JS from "/src/assets/Languages/Javascript.png"
import Torch from "/src/assets/Ml/Torch.png"
import Hg from "/src/assets/Ml/Hugging face.png"
import Sklearn from "/src/assets/Ml/Sk learn.png"
import Tf from "/src/assets/Ml/Tf.png"
import CV from "/src/assets/Ml/Opencv.png"
import Pandas from "/src/assets/Ml/Pandas.png"
import Numpy from "/src/assets/Ml/Numpy.png"
import Matplotlib from "/src/assets/Ml/Matplotlib.png"
import html from "/src/assets/Frontend/Html.png"
import CSS from "/src/assets/Frontend/CSS.png"
import REACT from "/src/assets/Frontend/React.png"
import Tailwind from "/src/assets/Frontend/Tailwind.png"
import Bootstrap from "/src/assets/Frontend/Bootstrap.png"
import Node from "/src/assets/Backend/NodeJs.png"
import Fastapi from "/src/assets/Backend/FastApi.png"
import Git from "/src/assets/Backend/Git.png"
import Docker from "/src/assets/Backend/Docker.png"
import Gradio from "/src/assets/Backend/Gradio.png"
import  Firebase from "/src/assets/Database/FireBase.png"
import Mysql from "/src/assets/Database/MYSQL.png"
import Mongo from  "/src/assets/Database/Mongo.png"
export function Skills(){
    return(
        <>


            <div className=" text-amber-50 flex justify-center text-3xl font-bold pt-[1%]"><div className="bg-[#121e3d] p-[0.7%] rounded-2xl" >SKILLS</div></div>
            <div className="overscroll-none flex flex-col">
                <div className="text-amber-50 flex justify-center text-2xl font-bold pt-[2%]">Programming Languages
                </div>
                <div className="flex flex-row sm:flex-wrap md:flex-nowrap  justify-center gap-[3%] mt-[1%]">
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[15%] md:w-[6%] flex rounded flex-col  ">
                        <div className="h-full w-[100%] flex px-[15%] items-center "><img src={C} width="100%"/></div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%]">C++</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-[15%] md:w-[6%] flex rounded flex-col">
                        <img src={Python} width="100%"/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%]">Python</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-[15%] md:w-[6%] flex rounded flex-col">
                        <img src={JS} width="100%"/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%]">JavaScript</div>
                    </div>
                </div>
                <div className="text-amber-50 flex justify-center text-2xl font-bold pt-[2%] ">ML Libraries
                </div>
                <div className="md:flex  md:flex-row sm:grid sm:grid-cols-5 w-full  justify-center sm:gap-[1%] md:gap-[3%] mt-[1%]">
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-full md:w-[7%]  flex rounded flex-col   ">
                        <div className="px-[14%] "><img src={Sklearn} width="100%"/>
                        </div>
                        <div className=" w-full text-amber-50 flex  mb-[2%] justify-center">Sci-Kit Learn</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-full md:w-[7%] flex rounded flex-col justify-center ">
                        <img src={Hg} width="100%" className="px-[15%] "/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">HuggingFace</div>

                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-full md:w-[7%] flex rounded flex-col">
                        <img src={Torch} width="100%" className="px-[14%]"/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%]">Pytorch</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-full md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Pandas}
                                                                                                         width="80%"
                                                                                                         className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Pandas</div>

                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-full md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Numpy}
                                                                                                         width="80%"
                                                                                                         className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Numpy</div>

                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-full md:w-[7%] flex rounded flex-col justify-center sm:col-start-2 ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={CV}
                                                                                                         width="80%"
                                                                                                         className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Open CV</div>

                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50   sm:w-full md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img
                            src={Matplotlib}
                            width="80%"
                            className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Matplotlib</div>

                    </div>
                    <div className=" bg-[#0B1234]  border border-gray-800 shadow-md shadow-gray-800/50  sm:w-full md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Tf}
                                                                                                         width="80%"
                                                                                                         className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Tensorflow</div>

                    </div>
                </div>
                <div className="text-amber-50 flex justify-center text-2xl font-bold pt-[2%]">Frontend Libraries &
                    Frameworks
                </div>
                <div className=" flex flex-row  justify-center gap-[3%] mt-[1%]">
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-[18%] md:w-[7%] flex rounded flex-col  ">
                        <div className="h-full w-[100%] flex px-[14%] items-center "><img src={html} width="100%"/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%]">HTML</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <img src={CSS} width="100%" className="px-[14%] "/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">CSS</div>
                    </div>
                    <div className=" bg-[#0B1234]   sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <img src={REACT} width="100%" className="px-[14%] "/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">React</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <img src={Tailwind} width="100%" className=" "/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Tailwind</div>
                    </div>
                    <div className="bg-[#0B1234]  border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <img src={Bootstrap} width="100%" className=""/>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Bootstrap</div>
                    </div>
                </div>
                <div className=" text-amber-50 flex justify-center text-2xl font-bold pt-[2%]">Backend
                    Libraries
                </div>
                <div className="bg-[#0B1224] flex flex-row  justify-center gap-[3%] pt-[1%]">
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col  ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Node}
                                                                                                         width="80%"/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%]">Node Js</div>
                    </div>
                    <div className=" bg-[#0B1234]  border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center  ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Fastapi}
                                                                                                         width="85%"
                                                                                                         className="px-[7%] "/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">FastApi</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col  ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Gradio}
                                                                                                         width="100%"
                                                                                                         className=" "/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Gradio</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Docker}
                                                                                                         width="100%"
                                                                                                         className=" "/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Docker</div>
                    </div>
                    <div className=" bg-[#0B1234]  border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Git}
                                                                                                         width="80%"
                                                                                                         className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Git</div>
                    </div>
                </div>
                <div className="bg-[#0B1224] text-amber-50 flex justify-center text-2xl font-bold pt-[2%]">Databases
                </div>
                <div className="bg-[#0B1224] flex flex-row  justify-center gap-[3%] pt-[1%] ">
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-[18%] md:w-[7%] flex rounded flex-col  ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Mongo}
                                                                                                         width="100%"
                                                                                                         className=" "/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Mong Db</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50  sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Mysql}
                                                                                                         width="80%"
                                                                                                         className=" "/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">Mysql</div>
                    </div>
                    <div className=" bg-[#0B1234] border border-gray-800 shadow-md shadow-gray-800/50 sm:w-[18%] md:w-[7%] flex rounded flex-col justify-center ">
                        <div className="h-full w-[100%] flex px-[14%] items-center justify-center "><img src={Firebase}
                                                                                                         width="80%"
                                                                                                         className=""/>
                        </div>
                        <div className=" w-full text-amber-50 flex justify-center mb-[2%] px-[2%] ">FireBase</div>
                    </div>
                </div>
                <div className="h-[2%]  text-[#0B1224]"> jjd</div>
            </div>
        </>
    );
}