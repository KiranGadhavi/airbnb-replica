import React from 'react';
import imgUrl from "../assets/Airbnb-Logo.wine.svg";
function HeaderComponent(){
  
return(
<div className=' '>
    <div className=''>
<div className="hidden sm:hidden md:block lg:block xl:block ">
<div className="flex pt-4 flex-wrap">

        <div className="px-12  text-xl xl:basis-2/6 lg:basic-2/6  md:basis-1/2 md:order-1  xl:order-1">
            <img className="w-40 h-12 mx-0.5" src={imgUrl} alt="logo"/>
        </div>
       <div className=''></div>
        <div className=" flex xl:basis-2/5 lg:basic-2/5 md:basis-full md:order-3 xl:order-2 md:place-content-center">
        <div className=" flex-col ">
            <button className="py-2 px-4 active:font-bold hover:bg-gray-100 rounded-full font-bold ">Stays</button>
            </div>
        <div className=" flex-col  ">
            <button className="py-2 px-4 active:font-bold hover:bg-gray-100 rounded-full ">Experiences</button>
            </div>
        <div className=" flex-col ">
            <button className="py-2 px-4 active:font-bold hover:bg-gray-100 rounded-full ">Online Experiences</button>
            </div>
        </div>
        
       <div className=" flex xl:basis-1/4 lg:basic-1/4 md:basis-1/2 md:order-2  xl:order-3 md:place-content-end md:px-10">
       <div className=" flex-col">
        <button className="py-2 px-3 active:font-bold hover:bg-gray-100 rounded-full font-bold ">Airbnb your home</button>
            </div>
        <div className=" flex-col">
        <button className=" px-4 py-3.5 active:font-bold hover:bg-gray-100 rounded-full ">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " viewBox="0 0 16 16">
             <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
        </button>
    
        </div>
        <div className=" flex-col ">
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
        <div className="flex flex-row border rounded-full items-center">
        
        <div tabIndex="0" className="bg-white focus:bg-red-200 md:px-5 py-2  hover:bg-gray-200 rounded-full">
            <div >Where</div>
            <input  className="hover:bg-gray-200 outline-none w-34" placeholder="Search destinations"></input>
        </div>
        <span className="h-9 border-l border-gray-400 "> </span>

        <div tabIndex="0" className="w-36 bg-white focus:bg-red-200 outline-none px-4 py-2 hover:bg-gray-200 rounded-full basis-1/6">
            <div>Check in</div>
            <input className="hover:bg-gray-200  outline-none w-28" placeholder="Add dates"></input>
        </div>
        <span className="h-9 border-l border-gray-400 "> </span>
        <div tabIndex="0" className="w-36 bg-white focus:bg-red-200 flex-col px-4 py-2 hover:bg-gray-200 rounded-full">
            <div>Check out</div>
            <input className="hover:bg-gray-200 outline-none w-28" placeholder="Add dates"></input>
        </div>
        <span className="h-9 border-l border-gray-400 "> </span>
        <div tabIndex="0"  className="bg-white focus:bg-red-200  flex flex-row hover:bg-gray-200 rounded-full">
        <div className="flex-col px-4 py-2 ">
            <div>who</div>
            <input className="hover:bg-gray-200 outline-none w-32" placeholder="Add guests"></input>         
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12 px-3 py-3 mx-2 stroke-white  my-2 bg-red-500 hover:bg-red-600  rounded-full  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" d="M21 21l-6-6M9 15a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
        </div>
    </div>
    </div>
    

  </div>
  {/* sm & sm Header design */}
  <div  className="flex flex-row hidden px-2 custom-xs:block sm:block md:hidden lg:hidden xl:hidden">
  <div className="px-3 flex  ">
           <div className="flex shadow-md border rounded-full basis-11/12">
            <div className="flex-col">
            <svg xmlns="http://www.w3.org/2000/svg"  className="h-9 w-9 px-1 py-1 mx-2 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" d="M21 21l-6-6M9 15a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            </div>
            
            <div className="flex-col py-1">
            <label className="font-bold">Where to?</label>
                 <br/>
                 <div className="text-zinc-500"> 
                <span>Anywhere . </span>
                <span>Anytime . </span>
                <span>Add guests</span></div>
               
            </div>
            </div>
           
            
           <div className="basis-10 px-3 py-1">
  <svg xmlns="http://www.w3.org/2000/svg"  className="h-12 w-12 py-3 border border-slate-400 rounded-full" fill="none" viewBox="0 0 32 32" stroke="currentColor" >
    <path  strokeWidth="3" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path></svg>
    </div>
  </div>     
            
  </div>
<br/>



        <hr/>
        <br/>
        </div>
</div>
)
}
export default HeaderComponent