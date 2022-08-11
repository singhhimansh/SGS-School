import React from "react";
import { useState } from "react";

function Main() {



    return (
        <div className="flex justify-center">
            <div className="container w-11/12 flex flex-col items-center">
                {/* welcome to sgs school */}
                <section className="welcome mx-px sm:w-2/3 my-5 text-justify  md:text-center select-none " >
                    <h1 className="text-xl md:text-3xl mb-4 md:mb-9 font-serif text-center font-semibold tracking-wider text-sky-800 ">Welcome to S.G.S School</h1>
                    <p className="leading-6 md:leading-7 text-sm md:text-base">The role of private educational institutions to make the goal of universalisation of education possible has since been commended across the board by all. Establishing schools, in fact, has been the top charitable activity in indian society since time immemorial.  <span className="font-semibold">Shri. Gangadhar Singh</span> of Village Lalgarhi in District Aligarh was a philanthrophic personality who often felt the need of a school for uplift of the rural folks. He nurtured a dream which was ultimately fulfilled by his worthy grandson <span className="font-semibold">Shri. Amar Singh</span> in year 2002.</p>
                    <p className="mt-7 leading-6 md:leading-7 text-sm md:text-base">Here at <span className="font-semibold">S.G.S Inter College</span> , We believe in all round growth of children. To achieve the same, we provide various facilities which includes practical laboratories, Student Library and two playgrounds. The premise is under CCTV servillance ensuring secure environemnt for girls. The greenary makes the ambiance of the premise more appealing.</p>

                </section>

                <hr className="w-3/4 h-0.5 my-8  md:my-16 bg-slate-200" />



                {/* faculty */}
                <section id="faculty" className="my-5 md:w-2/3 flex-initial flex flex-col gap-7  text-slate-700 ">
                    <h1 className="my-2 text-center text-xl md:text-2xl font-medium tracking-wider">Faculty</h1>
                    {/* facilities card */}
                    <div className="px-2 py-4 md:p-4 mb-3  rounded-md flex items-center gap-3 md:gap-6 border-2 border-gray-200 hover:drop-shadow-xl duration-150 ">
                        <img src={require('./images/director.jpg')} className='h-28 md:h-40 object-cover rounded-md' alt="" />
                        <div className='flex flex-col  justify-evenly '>
                            <div className=''>
                                <h1 className="capitalize text-sm md:text-lg leading-5 font-medium">Shri. Amar Singh</h1>
                                <h1 className=" text-xs md:text-base font-medium">Director</h1>
                            </div>
                            <p className=" text-xs my-1 md:text-sm text-slate-600/90 ">Every child is like a seed which has the potential to grow if it is nourished with love and care under the right guidance.</p>
                            <p className="italic mt-1 text-xs  md:text-sm text-slate-600/90">"The only place where success comes before work is in the dictionary."</p>
                        </div>
                    </div>
                    <div className="px-2 py-4 md:p-4 my-3  rounded-md flex items-center flex-row-reverse gap-3 md:gap-6 border-2 border-gray-200 hover:drop-shadow-xl duration-150 ">
                        <img src={require('./images/principal.jpeg')} className='h-28 md:h-40 object-cover rounded-md' alt="" />
                        <div className='flex flex-col justify-evenly text-end'>
                            <div>
                                <h1 className="capitalize text-sm md:text-lg leading-5 font-medium">Shri. Rajesh Kumar</h1>
                                <h1 className="text-xs md:text-base font-medium">Principal</h1>
                            </div>
                            <p className=" text-xs my-1 md:text-sm  text-slate-600/90">Childhood is the best time to instil core values essential for the overall development of a person.</p>
                            <p className="italic mt-1 text-xs md:text-sm text-slate-600/90">"One must not stop till he reach his destination"</p>
                        </div>
                    </div>
                    <div className="px-2 py-4 md:p-4 my-3  rounded-md flex items-center gap-3 md:gap-6 border-2 border-gray-200 hover:drop-shadow-xl duration-150">
                        <img src={require('./images/coordinator.jpeg')} className='h-28 md:h-40 object-cover rounded-md' alt="" />
                        <div className='flex flex-col justify-evenly'>
                            <div>
                                <h1 className="capitalize text-sm md:text-lg leading-5 font-medium">Shri. Rampal Singh</h1>
                                <h1 className="text-xs md:text-base font-medium ">Coordinator</h1>
                            </div>
                            <p className="text-xs my-1 md:text-sm text-slate-600/90">Children shouldn't only excel in academics but also develop courtesy, discipline, social sensitivity and traditional & cultural values.</p>
                            <p className="italic mt-1 text-xs md:text-sm text-slate-600/90">"Hardwork never goes in vein"</p>
                        </div>
                    </div>

                </section>

                <hr className="w-3/4 h-0.5 my-8 md:my-16 bg-slate-200" />

                {/* facilities */}
                <section id='facilities' className="facility w-4/5 my-5 ">
                    <h1 className="my-2 text-center text-2xl font-medium tracking-wider">Facilities</h1>
                    <div className="flex flex-wrap m-4 mb-16 justify-center">
                        {/* facilities card */}
                        <div className="w-72 p-4 m-3 bg-slate-50 border-2 hover:shadow-md shadow-gray-200 border-gray-100 rounded-md hover:scale-105 hover:shadow-sky-200 duration-100">
                            <img src={require('./images/laboratory.jpg')} className='h-40 w-full object-cover rounded-md' alt="" />
                            <h1 className="m-3 text-center capitalize text-lg font-medium">Science Labs</h1>
                            <p className="mx-3 mb-5 text-sm text-center">High End practical laboratories for subjects like physics, chemisty and Biology. </p>
                        </div>
                        <div className="w-72  p-4 m-3 bg-slate-50 border-2 hover:shadow-md shadow-gray-200 border-gray-100 rounded-md hover:scale-105 hover:shadow-sky-200 duration-100">
                            <img src={require('./images/computer.jpg')} className='  h-40 w-full object-cover rounded-md' alt="" />
                            <h1 className="m-3 text-center capitalize text-lg font-medium">Computer Lab</h1>
                            <p className="mx-3 mb-5 text-sm text-center">A computer lab for providing exposure of computer knowledge to students.</p>
                        </div>
                        <div className="w-72  p-4 m-3 bg-slate-50 border-2 hover:shadow-md shadow-gray-200 border-gray-100 rounded-md hover:scale-105 hover:shadow-sky-200 duration-100">
                            <img src={require('./images/playground.jpeg')} className=' h-40 w-full object-cover rounded-md' alt="" />
                            <h1 className="m-3 text-center capitalize text-lg font-medium">playground</h1>
                            <p className="mx-3 mb-5 text-sm text-center">Two playgrounds for events and sport activities for boys and girls saperately.</p>
                        </div>
                        <div className="w-72  p-4 m-3 bg-slate-50 border-2 hover:shadow-md shadow-gray-200 border-gray-100 rounded-md hover:scale-105 hover:shadow-sky-200 duration-100">
                            <img src={require('./images/cctv.jpg')} className=' h-40 w-full object-cover rounded-md saturate-[60%] brightness-105' alt="" />
                            <h1 className="m-3 text-center capitalize text-lg font-medium">CCTV</h1>
                            <p className="mx-3 mb-5 text-sm text-center">Entire premise is under CCTV surveillance which ensure security of personal belongings.</p>
                        </div>
                        <div className="w-72  p-4 m-3 bg-slate-50 border-2 hover:shadow-md shadow-gray-200 border-gray-100 rounded-md hover:scale-105 hover:shadow-sky-200 duration-100">
                            <img src={require('./images/cyclestand.jpeg')} className=' h-40 w-full object-cover rounded-md' alt="" />
                            <h1 className="m-3 text-center capitalize text-lg font-medium">vehicle stand</h1>
                            <p className="mx-3 mb-5 text-sm text-center">Personal vehicle stand for student cycles and bikes.</p>
                        </div>

                    </div>
                </section>

            </div>
        </div>

    );

}

export default Main;