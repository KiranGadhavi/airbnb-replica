import { useState } from "react";

function ImageCard({ images, title, host, status }){
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBulletIndex, setCurrentBulletIndex] = useState(0);
console.log(`images value ${images[1]}`);
       const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex - 1 + images.length) % images.length;
          if (newIndex <= 2) {
            setCurrentBulletIndex(newIndex);
            // setCurrentBulletIndex(0);
          } else {
            // setCurrentBulletIndex((index) => Math.max(index - 1, 0));
            setCurrentBulletIndex(newIndex - 2);
          }
          return newIndex;
        });
      };
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % images.length;
          if (newIndex <= 2) {
            setCurrentBulletIndex(newIndex);
          } else {
            setCurrentBulletIndex((index) => Math.min(index + 1, 2));
          }
          return newIndex;
        });
      };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const bulletSize = (index) => {
      if(images.length === 1)  return !index;
      if (index === currentIndex && index < 2 || index === 2) return 7;
      if(index < 2)
       { if (index === 0 || index === 1 ) return 7; // Smaller size for other bullets
      }
      else if(index > 2){
        if(index === 0 || index === 1 || index === 3 || index === 4) return 5; // Smaller size for other bullets
    }
    };
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
    return(
        <>
        <div className="px-4 ">
            <div className="relative flex flex-row-reverse"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
          {  <img
            className="xl:h-80 lg:h-64 md:h-80 sm:h-80 custom-xs:h-96 xl:w-80 lg:w-72 md:w-80 sm:w-full custom-xs:w-full object-cover rounded-xl"
            src={ images[currentIndex]} 
            alt={`images ${currentIndex + 1}`} 
             />}
            <div className="absolute top-3 px-2">
            <button className=" bg-rose-50 hover:bg-white hover:scale-105 hover:duration-700 rounded-full p-2 h-8">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " aria-hidden="true" role="presentation" focusable="false"  >
                <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none" stroke="black" strokeWidth="4" ></path></svg>
            </button>
            </div>
            
             {isHovered && currentIndex > 0 && (
            <div className="flex flex-row" > 
            <div className="absolute xl:top-36 lg:top-28 md:top-28 sm:top-36 custom-xs:top-36 px-2" >
            <button 
            className="bg-rose-50 hover:bg-white hover:scale-105 hover:duration-700 rounded-full p-2 h-8 "
            onClick={handlePrevClick}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " aria-hidden="true" role="presentation" focusable="false"  >
                <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" fill="none" stroke="black" strokeWidth="4" ></path></svg>
            </button>
            </div> 
            </div>
            )}
            {isHovered && currentIndex < images.length-1  && ( 
            <div className="absolute xl:top-36 lg:top-28 sm:top-36 md:top-28 custom-xs:top-36 px-2">
            <button className="bg-rose-50 hover:bg-white hover:scale-105 hover:duration-700 rounded-full p-2 h-8 "  onClick={handleNextClick}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  " aria-hidden="true" role="presentation" focusable="false"  >
                <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" fill="none" stroke="black" strokeWidth="4" ></path></svg>
            </button>
            </div>)}
            {/* <div>
              {`${images==images[1]?<button className="bg-rose-50">26|12m|03s|</button>:''}`}
              {images[currentIndex]==images[1][0]&&<button className="bg-rose-50">26|12m|03s|</button>}
            </div> */}
            <div className="flex justify-center absolute bottom-2 right-24 left-24 ">
        {images.slice(0, 5).map((_, index) => (
          <svg
            key={index}
            className={`cursor-pointer fill-current h-4 w-4 ${ index  === currentBulletIndex ? " text-white" : "text-gray-300 "}`}
            onClick={() => goToSlide(index)}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12"
            r={`${bulletSize(index)}`} 
            />
          </svg>
        ))}
      </div>
            </div>
          <div className="font-semibold  pt-2">{title}</div>
              <span className="text-[#727272]">{host}</span>
          <div className="font-semibold pb-10">{status}</div>
         
        </div>
        </>
    )
}
export default ImageCard