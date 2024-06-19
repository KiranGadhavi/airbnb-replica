import React, { useState } from 'react';
// import MainComponent from './MainComponent';
// import Tab2Navbar from './TabNavbar/Tab2Navbar.jsx';


function NavComponent() {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [startIndex, setStartIndex] = useState(0);
    // Function to handle tab clicks
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
}

  const images = [
    {id: 'Tab1', img: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png', text: 'Icons' },
    {id: 'Tab2', img: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg', text: 'Play'},
    {id: 'Tab3', img: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg', text: 'Caves' },
    {id: 'Tab4', img: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', text: 'Islands' },
    {id: 'Tab5', img: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg', text: 'Lakefront' },
    {id: 'Tab6', img: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg', text: 'Arctic' },
    {id: 'Tab7', img: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg', text: 'Cabins' },
    {id: 'Tab8', img: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg', text: 'Beachfront' },
    {id: 'Tab9', img: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg', text: 'OMG!' },
    {id: 'Tab10', img: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg', text: 'Amazing views'},
    {id: 'Tab11', img: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg', text: 'Amazing pools' },
    {id: 'Tab12', img: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', text: 'Castles' },
    {id: 'Tab13', img: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg', text: 'Treehouses' },
    {id: 'Tab14', img: 'https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg', text: `Shepherd's huts` },
    {id: 'Tab15', img: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', text: 'National parks' },
    {id: 'Tab16', img: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg', text: 'Off-the-grid' },
    {id: 'Tab17', img: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg', text: 'Countryside' },
    {id: 'Tab18', img: 'https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg', text: 'Yurts' },
    {id: 'Tab19', img: 'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg', text: 'Lake' },
    {id: 'Tab20', img: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg', text: 'Camping' },
    {id: 'Tab21', img: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg', text: 'Boats' },
    {id: 'Tab22', img: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg', text: 'Trending' },
    {id: 'Tab23', img: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', text: 'Tiny homes' },
    {id: 'Tab24', img: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg', text: 'Design' },
    {id: 'Tab25', img: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg', text: 'bed & breakfasts' },
    {id: 'Tab26', img: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', text: 'Mansions' },
    {id: 'Tab27', img: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg', text: 'Domes' },
    {id: 'Tab28', img: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg', text: 'New' },
    {id: 'Tab29', img: 'https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg', text: 'Towers' },
    {id: 'Tab30', img: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', text: 'Farms' },
    {id: 'Tab31', img: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', text: 'Historical homes' },
    {id: 'Tab32', img: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg', text: 'A-frames' },
    {id: 'Tab33', img: 'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg', text: 'Vineyards' },
    {id: 'Tab34', img: 'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg', text: 'Hanoks' },
    {id: 'Tab35', img: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg', text: 'Earth homes' },
    {id: 'Tab36', img: 'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg', text: 'Creative spaces ' },
    {id: 'Tab37', img: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg', text: 'Houseboats' },
    {id: 'Tab38', img: 'https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg', text: 'Desert' },
    {id: 'Tab39', img: 'https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg', text: 'Grand pianos' },
    {id: 'Tab40', img: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg', text: 'Luxe' },
    {id: 'Tab51', img: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg', text: 'Top cities' },
    {id: 'Tab52', img: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg', text: 'Tropical' },
    {id: 'Tab53', img: 'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg', text: 'Adapted' },
    {id: 'Tab54', img: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg', text: 'Surfing' },
    {id: 'Tab55', img: 'https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg', text: `Chef's Kitchens`},
    {id: 'Tab56', img: 'https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg', text: 'Cycladic homes' },
    {id: 'Tab57', img: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg', text: 'Skiing' },
    {id: 'Tab58', img: 'https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg', text: 'Containers' },
    {id: 'Tab59', img: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg', text: 'Ski-in/out' },
    {id: 'Tab60', img: 'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg', text: 'Windmills' },
    {id: 'Tab61', img: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg', text: 'Barns' },
    {id: 'Tab62', img: 'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg', text: 'Camper Vans' },
    {id: 'Tab63', img: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg', text: 'Golfing' },
    {id: 'Tab64', img: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', text: 'Rooms' },
    {id: 'Tab65', img: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg', text: 'Top of the world' },
    {id: 'Tab66', img: 'https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg', text: 'Casas particulares' },
    {id: 'Tab67', img: 'https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg', text: 'Minsus' },
    {id: 'Tab68', img: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg', text: 'Ryokans' },
    {id: 'Tab69', img: 'https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg', text: 'Riads' },
    {id: 'Tab70', img: 'https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg', text: 'Trulli' },
    {id: 'Tab71', img: 'https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg', text: 'Dammusi' },
    {id: 'Tab72', img: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg', text: 'Beach' },
  ];
  
  const imagesToShow = 14;

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + imagesToShow, images.length - imagesToShow));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - imagesToShow, 0));
  };

  const visibleImages = images.slice(startIndex, startIndex + imagesToShow);
  return (
    <>
    <nav className="mx-auto fixed top-48 xl:top-48 md:top-52 sm:top-24 custom-xs:top-24 left-0 right-0 z-50 bg-white">
    <div className='hidden xl:block lg:block md:block sm:hidden custom-xs:hidden'> 
     <div className='xl:px-20 lg:px-12 md:px-8 flex items-center justify-center '>
      {startIndex > 1 && 
      <button
        onClick={handlePrev}
      >
        <svg className=" h-8 w-8 py-2 border border-slate-400 rounded-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65 15 L20 50 L65 85" stroke="black" strokeWidth="16" fill="none"/>
                  </svg>
      </button>}
      <div className="flex overflow-hidden space-x-10 w-full sm:w-[720px] md:w-[960px] lg:w-[1270px]">
        {visibleImages.map(tab => (
          <button
          onClick={() => handleTabClick(tab.id)}
         className={`${activeTab === tab.id ? 'active opacity-100 font-bold border-b-2 border-black ' : 'opacity-65 hover:opacity-100'}`}
             >
          <div key={tab.id} className="flex flex-col items-center hover:border-b-2 py-2 ">
            <img src={tab.img} alt={tab.text} className="w-7 h-7 object-cover" />
            <div className="text-center text-sm mt-2 truncate">{tab.text}</div>
          </div>
          </button>
        ))}
      </div>
      <div>
          {activeTab === 'tab1' && 
       <Tab1Navbar/>}
         {activeTab === 'tab2' && 
         <Tab2Navbar/>}
            </div>
      <div className='flex flex-col'>
     {startIndex < images.length- imagesToShow &&  (<button
        onClick={handleNext}
      >
         <svg className="h-8 w-8 py-2 border border-slate-400 rounded-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M20 15 L65 50 L20 85" stroke="black" strokeWidth="16" fill="none"/>
                  </svg>
      </button>)}
      </div>
      <div className="flex-row  px-1">
                  <span className='flex border border-slate-400 py-3 px-2 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-4 " fill="none" viewBox="0 0 32 32" stroke="currentColor" >
                      <path  strokeWidth="3" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
                    </svg>
                    <span className=" px-2">Filters</span>
                  </span> 
                </div>
      </div>
      </div>
      <div className=' hidden xl:hidden lg:hidden md:hidden sm:block custom-xs:block'>
      <div className=" px-6 bg-white text-sm sm:grid sm:grid-cols-12 sm:gap-9 absolute ">
              <div className='flex flex-row space-x-6  w-screen overflow-x-auto'>
              {images.map((tab) => (
                <button
                onClick={() => handleTabClick(tab.id)}
               className={`${activeTab === tab.id ? 'active opacity-100 font-bold border-b-2 border-black ' : 'opacity-65 hover:opacity-100'}`}
                   >
                <div key={tab.id} className="flex flex-col items-center hover:border-b-2 py-2 ">
                  <img src={tab.img} alt={tab.text} className="w-7 h-7 object-cover" />
                  <div className="text-center text-sm mt-2 truncate">{tab.text}</div>
                </div>
                </button>
          
        ))}
              {/* </div>
              <div key={index} className="flex flex-col items-center opacity-65 hover:opacity-100 hover:border-b-2 active:border-b-2 py-2 ">
            <img src={image.img} alt={image.text} className="w-7 h-7 object-cover" />
            <div className="text-center text-sm mt-2 truncate">{image.text}</div>
         */}
         </div> 
          </div>
    </div>
    </nav>
    </>
  );
}
export default NavComponent