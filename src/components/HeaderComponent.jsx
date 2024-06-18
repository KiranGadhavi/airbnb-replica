import React from 'react';
import imgUrl from "../assets/Airbnb-Logo.wine.svg";
function HeaderComponent(){
return(
    <div className='fixed top-0 right-0 left-0 z-50 bg-white'>
    <div className="hidden sm:hidden md:block lg:block xl:block ">
    <div className="flex pt-4 flex-wrap">
            <div className="xl:px-12 lg:px-6 md:px-8 sm:px-6 text-xl xl:basis-1/4 lg:basic-1/4 md:basis-1/2 md:order-1 xl:order-1">
            <div className='hidden sm:hidden md:hidden lg:block xl:block'>
                <img className="w-40 h-12 mx-0.5" src={imgUrl} alt="logo"/>
                </div>
                <div className='h-8 w-8 hidden sm:block md:block lg:hidden xl:hidden'>
    <svg enableBackground="new 0 0 1991.3 2143.2" viewBox="0 0 1991.3 2143.2" xmlns="http://www.w3.org/2000/svg">
    <path d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z" fill="#e0565b"/></svg>
    </div>
            </div>
            <div className=" flex xl:basis-2/5 lg:basic-2/5 md:basis-full md:order-3 xl:order-2 md:place-content-center">
            <div className=" flex-col ">
                <button className="py-2 px-4 active:font-bold focus:font-bold hover:bg-gray-100 rounded-full  ">Stays</button>
                </div>
            <div className=" flex-col  ">
                <button className="py-2 px-4 active:font-bold focus:font-bold hover:bg-gray-100 rounded-full ">Experiences</button>
                </div>
            <div className=" flex-col ">
                <button className="py-2 px-4 active:font-bold focus:font-bold hover:bg-gray-100 rounded-full ">Online Experiences</button>
                </div>
            </div>
        <div className="flex xl:basis-1/3 lg:basic-1/3 md:basis-1/2 md:order-2 xl:order-3 md:place-content-end md:px-10">
        <div className="flex-col">
            <button className="py-2 xl:px-6 md:px-2 active:font-bold hover:bg-gray-100 rounded-full font-bold ">Airbnb your home</button>
                </div>
            <div className=" flex-col">
            <button className=" xl:px-1 md:px-2 py-3.5 active:font-bold hover:bg-gray-100 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " viewBox="0 0 16 16">
                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
            </button>
            </div>
            <div className=" flex-col xl:px-4 md:px-1 sm:px-4">
            <button className="flex items-center space-x-3 py-1 px-2 h-12 w-20 hover:shadow-md rounded-full ring-1 ring-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-4 w-6 ">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-8 w-9 " >
                    <path  className="fill-zinc-500 " d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                    </svg>
            </button>
                </div>
        </div>
    </div>
    </div>
            <br/>
    <div className="hidden sm:hidden md:block lg:block xl:block ">
        <div  className="flex xl:place-content-center md:place-content-center">
            <div className="flex flex-row border rounded-full items-center ">
            
            <div tabIndex="0" className=" focus:bg-slate-50 md:px-5 py-2 hover:bg-gray-200 rounded-full">
                <div>Where</div>
                <input  className="bg-inherit outline-none w-34" placeholder="Search destinations"></input>
            </div>
            <span className="h-9 border-l border-gray-400 "> </span>

            <div tabIndex="0" className="w-36 bg-white focus:bg-slate-50 outline-none px-4 py-2 hover:bg-gray-200 rounded-full basis-1/6">
                <div>Check in</div>
                <input className="bg-inherit  outline-none w-28" placeholder="Add dates"></input>
            </div>
            <span className="h-9 border-l border-gray-400 "> </span>
            <div tabIndex="0" className="w-36 bg-white focus:bg-slate-50 flex-col px-4 py-2 hover:bg-gray-200 rounded-full">
                <div>Check out</div>
                <input className="bg-inherit outline-none w-28" placeholder="Add dates"></input>
            </div>
            <span className="h-9 border-l border-gray-400 "> </span>
            <div tabIndex="0"  className="bg-white focus:bg-slate-50  flex flex-row hover:bg-gray-200 rounded-full">
            <div className="flex-col px-4 py-2 ">
                <div>who</div>
                <input className="bg-inherit  outline-none w-32" placeholder="Add guests"></input>         
            </div>
            <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12 px-3 py-3 mx-2 stroke-white  my-2 bg-red-500 hover:bg-red-600  rounded-full  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M21 21l-6-6M9 15a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
            </div>
        </div>
        </div>
    </div>
    {/* sm & sm Header design */}
    <div  className="px-6 hidden custom-xs:block sm:block md:hidden lg:hidden xl:hidden">
    <div className="flex  basis-full">
            <div className="flex shadow-md border rounded-full sm:basis-9/12 custom-xs:basis-11/12" >
                <div className="flex-row px-1 py-2 mx-3 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true" role="presentation" focusable="false" stroke="black" strokeWidth="3" fill="none">
                        <g fill="none"><circle cx="12" cy="12" r="10"></circle>
                        <path d="m19 19 11 11" ></path></g></svg>
                </div>
                <div className="flex-row py-1 text-sm overflow-hidden">
                <label className="font-bold">Where to?</label>
                    <br/>
                    <div className="text-zinc-500"> 
                    <span>Anywhere . </span>
                    <span>Anytime . </span>
                    <span>Add guests</span></div>
                </div>
                </div>
            <div className="flex basis-10 px-2 sm:px-7 py-1">
    <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12 py-3 border border-slate-400 rounded-full" fill="none" viewBox="0 0 32 32" stroke="currentColor" >
        <path  strokeWidth="3" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path></svg>
        </div>
    </div>     
                
    </div>
    <br/>
            <hr/>
            <br/>
            {/* </div> */}
    </div>
)
}
export default HeaderComponent