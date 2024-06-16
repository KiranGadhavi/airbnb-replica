import React, { useState } from 'react';

function NavComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 14;
  const itemsPerPageMd = 7;
  const itemsPerPageSm = 4;

  const items = [
    { img: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png', text: 'Icons' },
    { img: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg', text: 'Play'},
    { img: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg', text: 'Caves' },
    { img: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', text: 'Islands' },
    { img: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg', text: 'Lakefront' },
    { img: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg', text: 'Arctic' },
    { img: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg', text: 'Cabins' },
    { img: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg', text: 'Beachfront' },
    { img: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg', text: 'OMG!' },
    { img: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg', text: 'Amazing views'},
    { img: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg', text: 'Amazing pools' },
    { img: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', text: 'Castles' },
    { img: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg', text: 'Treehouses' },
    { img: 'https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg', text: `Shepherd's huts` },
    { img: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', text: 'National parks' },
    { img: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg', text: 'Off-the-grid' },
    { img: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg', text: 'Countryside' },
    { img: 'https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg', text: 'Yurts' },
    { img: 'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg', text: 'Lake' },
    { img: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg', text: 'Camping' },
    { img: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg', text: 'Boats' },
    { img: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg', text: 'Trending' },
    { img: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', text: 'Tiny homes' },
    { img: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg', text: 'Design' },
    { img: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg', text: 'bed & breakfasts' },
    { img: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', text: 'Mansions' },
    { img: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg', text: 'Domes' },
    { img: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg', text: 'New' },
    { img: 'https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg', text: 'Towers' },
    { img: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', text: 'Farms' },
    { img: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', text: 'Historical homes' },
    { img: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg', text: 'A-frames' },
    { img: 'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg', text: 'Vineyards' },
    { img: 'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg', text: 'Hanoks' },
    { img: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg', text: 'Earth homes' },
    { img: 'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg', text: 'Creative spaces ' },
    { img: 'https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg', text: 'Houseboats' },
    { img: 'https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg', text: 'Desert' },
    { img: 'https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg', text: 'Grand pianos' },
    { img: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg', text: 'Luxe' },
    { img: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg', text: 'Top cities' },
    { img: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg', text: 'Tropical' },
    { img: 'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg', text: 'Adapted' },
    { img: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg', text: 'Surfing' },
    { img: 'https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg', text: `Chef's Kitchens`},
    { img: 'https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg', text: 'Cycladic homes' },
    { img: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg', text: 'Skiing' },
    { img: 'https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg', text: 'Containers' },
    { img: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg', text: 'Ski-in/out' },
    { img: 'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg', text: 'Windmills' },
    { img: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg', text: 'Barns' },
    { img: 'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg', text: 'Camper Vans' },
    { img: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg', text: 'Golfing' },
    { img: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', text: 'Rooms' },
    { img: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg', text: 'Top of the world' },
    { img: 'https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg', text: 'Casas particulares' },
    { img: 'https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg', text: 'Minsus' },
    { img: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg', text: 'Ryokans' },
    { img: 'https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg', text: 'Riads' },
    { img: 'https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg', text: 'Trulli' },
    { img: 'https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg', text: 'Dammusi' },
    { img: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg', text: 'Beach' },
  ];
  const handlePrevBtn = () => {
    let step = 0;
    if (window.innerWidth >= 1280) {
      step = itemsPerPage;
    } else if (window.innerWidth >= 768) {
      step = itemsPerPageMd;
    } else {
      step = itemsPerPageSm;
    }
    setCurrentIndex((prevIndex) => Math.max(prevIndex - step, 0));
  };
  const handleNextBtn = () => {
    let step = 0;
    if (window.innerWidth >= 1280) {
      step = itemsPerPage;
    } else if (window.innerWidth >= 768) {
      step = itemsPerPageMd;
    } else {
      step = itemsPerPageSm;
    }
    setCurrentIndex((prevIndex) => Math.min(prevIndex + step, items.length - step));
  };
  return (
    <>
      <div className='fixed top-48 xl:top-48 md:top-52 sm:top-24 custom-xs:top-24 left-0 right-0 z-50 bg-white'>
        <div className="relative xl:px-20 lg:px-12 md:px-8 md:pt-5 h-18 sm:h-24 custom-xs:h-20">
          {/* xl and lg screen */}
          <div className="grid grid-cols-12 xl:grid-cols-12 lg:grid-cols-12">
            <div className='hidden xl:block lg:block md:hidden sm:hidden'>
              <div className='flex flex-row text-sm xl:gap-2 lg:gap-1'>
                {currentIndex > 1 && (
                  <button className="drop-shadow-2xl pb-4" onClick={handlePrevBtn} disabled={currentIndex === 0}>
                    <svg className="h-8 w-8 py-2 border border-slate-400 rounded-full active:border border-slate-600" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65 15 L20 50 L65 85" stroke="black" strokeWidth="16" fill="none"/>
                    </svg>
                  </button>
                )}
                {/*xl:gap-9 xl:gap-7.5xl:gap-6.5 xl:gap-5 */}
                <div className='flex xl:gap-9 lg:gap-3'>
                  {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                    <div className="opacity-65 hover:opacity-100 hover:border-b-2 active:border-b-2 hover:pb-2" key={index}>
                      <div className="flex items-center justify-center ">
                        <img src={item.img} alt={`Item ${index + 1}`}  className='h-6 w-6'/>
                      </div>
                      <span className='truncate w-14'>{item.text}</span>
                    </div>
                  ))}
                </div>
                {currentIndex < items.length - itemsPerPage && (
                  <button onClick={handleNextBtn} className="drop-shadow-2xl pb-4">
                    <svg className="h-8 w-8 py-2 border border-slate-400 rounded-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M20 15 L65 50 L20 85" stroke="black" strokeWidth="16" fill="none"/>
                    </svg>
                  </button>
                )}
                <div className='flex-row pb-3'>
                  <span className=" flex border border-slate-400 p-3 rounded-xl xl:col-span-1 lg:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-4 w-4  " fill="none" viewBox="0 0 32 32" stroke="currentColor" >
                      <path  strokeWidth="3" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
                    </svg>
                    <span className="place-self-center xl:px-1.5 ">Filters</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* md screen*/}
          <div className="text-sm grid grid-cols-12 md:grid-cols-12 pt-1 ">
            <div className='hidden xl:hidden lg:hidden md:block sm:hidden'>
              <div className='flex md:gap-2'>
                <button onClick={handlePrevBtn} disabled={currentIndex === 0}>
                  <svg className="h-8 w-8 py-2 border border-slate-400 rounded-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65 15 L20 50 L65 85" stroke="black" strokeWidth="16" fill="none"/>
                  </svg>
                </button>
                <div className='flex md:gap-8'>
                  {items.slice(currentIndex, currentIndex + itemsPerPageMd).map((item, index) => (
                    <div className="opacity-65 hover:opacity-100 hover:border-b-2 active:border-b-2 hover:pb-2" key={index}>
                      <div className='flex items-center justify-center' > 
                        <img src={item.img} alt={`Item ${index + 1}`}  className='h-7 w-7 '/>
                      </div>
                      <span className='truncate w-12' >{item.text}</span>
                    </div>
                  ))}
                </div>
                <button  onClick={handleNextBtn} disabled={currentIndex >= items.length - itemsPerPage}>
                  <svg className="h-8 w-8 py-2 border border-slate-400 rounded-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M20 15 L65 50 L20 85" stroke="black" strokeWidth="16" fill="none"/>
                  </svg>
                </button>
                <div className="flex-row  ">
                  <span className='flex border border-slate-400 py-3 px-3 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-4 w-4 x " fill="none" viewBox="0 0 32 32" stroke="currentColor" >
                      <path  strokeWidth="3" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
                    </svg>
                    <span className="pb-2.4 px-2">Filters</span>
                  </span> 
                </div>
              </div>
            </div>
          </div>
          {/* sm and xs screen */}
          {/* sm:h-screen custom-xs:h-screen sm:overflow-y-auto custom-xs:overflow-y-auto sm:hide-scrollbar custom-xs:hide-scrollbar */}
          <div className="text-sm px-6 sm:grid sm:grid-cols-12 sm:gap-9 absolute  overflow-x-auto overflow-y-auto hide-x-scroll">
            <div className=' hidden xl:hidden lg:hidden md:hidden sm:block custom-xs:block'>
              <div className='flex flex-row gap-8'>
                {items.map((item, index) => (
                  <div className=" sm:col-span-1 custom-xs:col-span-1 opacity-65 hover:opacity-100 hover:border-b-2 active:border-b-2 hover:pb-2" key={index}>
                    <div className='flex items-center justify-center'> 
                      <img src={item.img} alt={`Item ${index + 1}`}  className='h-7 w-7 '/>
                    </div>
                    <span className='truncate w-14'>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
       </div>
       </div>
    </>
  );
}
export default NavComponent