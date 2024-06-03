import { useState } from "react";

function ImageCard({ images, title, host, status }){
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
    console.log(setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length,images==images.length ));
  //  if (images==images.length)  
  //   {setCurrentIndex(false)}
       };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return(
        <>
        <div className="  ">
            <div className="relative  flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
           <div className="">
            <img className="w-80 h-80 xl:w-80 xl:h-80 lg:w-64 lg:h-56 md:h-64 md:w-72  object-cover rounded-xl" src={images[currentIndex]}></img>
            </div>
            <div className="absolute top-3 px-64 mx-5 xl:px-64 xl:mx-5 lg:px-48 md:px-56 ">
            <button className="bg-rose-50 rounded-full p-2 h-8 ">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " aria-hidden="true" role="presentation" focusable="false"  >
                <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" stroke="black" strokeWidth="4" ></path></svg>
            </button>
            </div>
            
             {isHovered && 
                <div className="flex absolute basis-full"> 
            <div className="absolute top-36 px-3 basis-2/4" >
            <button className="bg-rose-50 rounded-full p-2 h-8 " onClick={handlePrevClick}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " aria-hidden="true" role="presentation" focusable="false"  >
                <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" fill="none" stroke="black" strokeWidth="4" ></path></svg>
            </button>
            </div> 
            
            <div className="absolute top-36  basis-2/4 mx-64">
            <button className="bg-rose-50 rounded-full p-2 h-8 mx-5"  onClick={handleNextClick}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " aria-hidden="true" role="presentation" focusable="false"  >
                <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" fill="none" stroke="black" strokeWidth="4" ></path></svg>
            </button>
            </div>
            </div>}
            </div>
            <div className="font-bold pt-2">{title}</div>
      <span>{host}</span>
      <div className="font-bold pb-10">{status}</div>
    
        </div>
        </>
    )
}
export default ImageCard