import { useState } from "react"
import Tab1Footer from './TabFooter/Tab1Footer.jsx';
import Tab2Footer from './TabFooter/Tab2Footer.jsx';
import Tab3Footer from './TabFooter/Tab3Footer.jsx';
import Tab4Footer from './TabFooter/Tab4Footer.jsx';
import Tab5Footer from './TabFooter/Tab5Footer.jsx';
import Tab6Footer from './TabFooter/Tab6Footer.jsx';
import Tab7Footer from './TabFooter/Tab7Footer.jsx';
import Tab8Footer from './TabFooter/Tab8Footer.jsx';

function FooterComponent(){
        // State to keep track of the currently active tab
        const [activeTab, setActiveTab] = useState('Tab1');
        const [currentIndex, setCurrentIndex] = useState(0);
        let itemsPerPage = 8;
        if (window.innerWidth >= 575) {
            itemsPerPage = 7;
          }else if(window.innerWidth <= 575){
            itemsPerPage = 5;
          }
        
        const handlePrevBtn = () => {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
          };
        
          const handleNextBtn = () => {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, tabs.length - itemsPerPage));
          };

        // Function to handle tab clicks
        const handleTabClick = (tabId) => {
            setActiveTab(tabId);
    }
    const tabs = [
        { id: 'Tab1', label: 'Popular' },
        { id: 'Tab2', label: 'Historic' },
        { id: 'Tab3', label: 'Coastal' },
        { id: 'Tab4', label: 'Islands' },
        { id: 'Tab5', label: 'Lakes' },
        { id: 'Tab6', label: 'Unique stays' },
        { id: 'Tab7', label: 'Categories' },
        { id: 'Tab8', label: 'Things to do' }
    ];
    return(
        <>
    <footer className="relative bg-customGray pt-6 md:px-2 lg:px-6 sm:px-1 ">  
       <section className="xl:px-14 custom-xs:px-6 py-8">
            <h1 className="font-bold text-xl ">Inspiration for future getaways</h1>
            {/* text-[#727272x] */}
        <div className="flex pt-4 relative">
            <div className="hidden xl:hidden lg:hidden md:hidden sm:block custom-xs:block ">
            {currentIndex > 0 && (    
                <button className="mr-2" onClick={handlePrevBtn}>
                <svg className="h-8 w-4 py-2  active:border border-slate-600" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path d="M65 15 L20 50 L65 85" stroke="black" strokeWidth="10" fill="none"/>
                </svg>
                </button>
            )}
            </div>
            <div className="hidden xl:hidden lg:hidden md:hidden sm:block custom-xs:block">
           <div className="flex flex-row sm:gap-6 custom-xs:gap-6 relative w-full sm:w-[720px] custom-xs:w-[350px] overflow-hidden"> 
            {tabs.slice(currentIndex, currentIndex + itemsPerPage).map(tab => (
                <div key={tab.id} >
                    <button
                        onClick={() => handleTabClick(tab.id)}
                        className={`pb-4  ${activeTab === tab.id ? 'active font-bold border-b-2 border-black pb-4 ' : ''}`}
                    >
                        {tab.label}
                    </button>
                </div>
            ))}
            </div>
        </div>
        <div className="hidden xl:block lg:block md:block sm:hidden custom-block">
        <div className="flex  relative gap-7">
            {tabs.map(tab => (
                        <div key={tab.id} >
                             <button
                        onClick={() => handleTabClick(tab.id)}
                        className={`pb-4  ${activeTab === tab.id ? 'active font-bold border-b-2 border-black pb-4 ' : ''}`}
                    >
                         {tab.label}
                    </button>
                           
                </div>))}
                </div>
                </div>
           <div className="hidden xl:hidden lg:hidden md:hidden sm:block custom-xs:block ml-1 ">
           {currentIndex + itemsPerPage < tabs.length &&( 
            <button onClick={handleNextBtn}>
                <svg className="h-8 w-8 py-2 " viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path  d="M20 15 L65 50 L20 85" stroke="black" strokeWidth="10" fill="none"/>
                        </svg>
                       </button>
                    )}
           </div>
        </div>
        <hr/>
            <div className="pt-2">
                   {/* Popular tab1 content*/}
                    {activeTab === 'Tab1' && 
                    <div className="pt-5">
                        <Tab1Footer/>
                        </div>}
                    {/* Historic tab2 content*/}
                    {activeTab === 'Tab2' && 
                     <div className="pt-5">
                     <Tab2Footer/>
                     </div>}
                     {/*Coastal tab3 content*/}
                    {activeTab === 'Tab3' && 
                     <div className="pt-5">
                     <Tab3Footer/>
                     </div>}
                    {/* Content tab4 Islands*/}
                    {activeTab === 'Tab4' && 
                    <div className="pt-5">
                    <Tab4Footer/>
                    </div>}
                    {/* Content tab5 Lakes*/}
                    {activeTab === 'Tab5' && 
                    <div className="pt-5">
                     <Tab5Footer/>
                    </div>}
                    {/* Content tab6 Unique stays*/}
                    {activeTab === 'Tab6' && 
                     <div className="pt-5">
                     <Tab6Footer/>
                     </div>}
                    {/* Content tab7 Categories*/}
                    {activeTab === 'Tab7' && 
                    <div className="pt-5">
                     <Tab7Footer/>
                    </div>}
                    {/* Content tab8 Things to do*/}      
                    {activeTab === 'Tab8' && 
                     <div className="pt-5">
                     <Tab8Footer/>
                     </div>}
            </div>
        </section>
        <hr/>
                 {/* The footerRow2 has been divided into three articles */}
        <section className="xl:px-14  grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1  custom-xs:px-6">
              {/* footerRow2 artice-1 */}
            <article className="flex flex-row  pt-4 pb-3 space-y-4 ">
                
                <ul className="flex-col space-y-3 ">
                <span className=" font-bold">Support</span>
                    <li>Help Centre</li>
                    <li>AirCover</li>
                    <li>Anti-discrimination</li>
                    <li>Disability support</li>
                    <li>Cancellation options</li>
                    <li>Report neighbourhood concern</li>
                </ul>
                </article>
               <div className=" hidden custom-xs:block sm:block md:block lg:hidden xl:hidden"> <hr/></div>
              {/* footerRow2 artice-2 */}
            <article className="flex pt-4 pb-4 space-y-3 ">
                
                <ul className="flex-col space-y-3">
                <span className=" font-bold">Hosting</span>
                    <li>Airbnb your home</li>
                    <li>AirCover for Hosts</li>
                    <li>Hosting resources</li>
                    <li>Community forum</li>
                    <li>Hostings responsibly</li>
                    <li>Join a free Hosting class</li>
                </ul>
                </article>
               <div className="hidden custom-xs:block sm:block md:block lg:hidden xl:hidden"> <hr/></div>
              {/* footerRow2 artice-3 */}
            <article className=" flex pt-4 pb-4 space-y-3  ">
                <ul className="flex-col space-y-3">
                <span className="font-bold">Airbnb</span>
                    <li>Newsroom</li>
                    <li>New features</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Gift cards</li>
                    <li>Airbnb.org emergency stays</li>
                </ul>
                
                </article>
        </section>
        <div className="pt-3 px-16"><hr/></div>

            {/* The footerRow3 has been divided into three articles */}
        <section className="grid xl:grid-cols-6 md:grid-cols-1 p-6 xl:px-0">
       {/* footerRow3 artice-1 */}
        <article className="xl:order-1 md:order-2 custom-xs:order-2 xl:px-14  md:mx-auto xl:col-span-1  grid xl:auto-cols-max lg:auto-cols-max ">
        <div>
        <span className="flex ">
            <span className=" custom-xs:hidden xl:block"> © 2024 AirbnbReplica, Inc.</span>
       
            <span className="custom-xs:pt-3 custom-xs:block xl:hidden">© 2024 AirbnbReplica, Inc.</span>
            </span>
            </div>
        </article>
        {/* footerRow3 artice-2 */}
        <article className="custom-xs:text-sm xl:order-2 md:order-3 custom-xs:order-3 md:mx-auto xl:col-span-2  grid auto-cols-max   ">
                <div>
                <ol className="flex flex-row xl:space-x-1 custom-xs:space-x-2 ">
                    <span > . </span>
                    <li>Privacy </li>
                    <span> . </span>
                    <li>Terms </li>
                    <div> . </div>
                    <li>Sitemap </li>
                    <div > . </div>
                    <li >UK Modern Slacvery Act </li>
                    <div> . </div>
                    <li className="hidden sm:hidden md:block lg:block xl:block">Company details </li>
                    <li></li>
                    </ol>
                    </div>
        </article>
        {/* footerRow3 artice-3 */}
        <article className="xl:order-3 md:order-1 custom-xs:order-1 md:mx-auto xl:col-span-3  ">
            <div >
                <div className="flex flex-row custom-xs:font-bold ">
                    <div className="xl:px-40 xl:mx-4"></div>
             <button className="lg:px-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" viewBox="0 0 16 16" >
                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
            </button>
            <button className="px-2 lg:px-1">English (GB) </button>
            <button className="xl:px-6">
            <span>£</span>
            <span>GBP</span>
            </button>
            <button className="px-2 lg:px-1 hidden sm:hidden md:block lg:block xl:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 " aria-label="Navigate to Facebook" role="img" focusable="false">
                <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                <path fill="#fff" d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"></path></svg>
            </button>
            <button className="px-2 lg:px-1 hidden sm:hidden md:block lg:block xl:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 " aria-label="Navigate to Twitter" role="img" focusable="false">
                <path d="M32 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4z"></path>
                <path fill="#fff" d="M18.66 7.99a4.5 4.5 0 0 0-2.28 4.88A12.31 12.31 0 0 1 7.3 8.25a4.25 4.25 0 0 0 1.38 5.88c-.69 0-1.38-.13-2-.44a4.54 4.54 0 0 0 3.5 4.31 4.3 4.3 0 0 1-2 .06 4.64 4.64 0 0 0 4.19 3.13A8.33 8.33 0 0 1 5.8 23a12.44 12.44 0 0 0 19.32-11.19A7.72 7.72 0 0 0 27.3 9.5a8.3 8.3 0 0 1-2.5.75 4.7 4.7 0 0 0 2-2.5c-.87.5-1.81.87-2.81 1.06a4.5 4.5 0 0 0-5.34-.83z"></path></svg>
            </button>
             <button className="xl:px-2 lg:px-1 hidden sm:hidden md:block lg:block xl:block">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 " aria-label="Navigate to Instagram" role="img" focusable="false">
                <path d="M30 0H2a2 2 0 0 0-2 2v28c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
             <path fill="#fff" d="M15.71 4h1.25c2.4 0 2.85.02 3.99.07 1.28.06 2.15.26 2.91.56.79.3 1.46.72 2.13 1.38.6.6 1.08 1.33 1.38 2.13l.02.06c.28.74.48 1.58.54 2.8l.01.4c.05 1.02.06 1.63.06 4.4v.92c0 2.6-.02 3.05-.07 4.23a8.78 8.78 0 0 1-.56 2.91c-.3.8-.77 1.53-1.38 2.13a5.88 5.88 0 0 1-2.13 1.38l-.06.02c-.74.28-1.59.48-2.8.53l-.4.02c-1.02.05-1.63.06-4.4.06h-.92a73.1 73.1 0 0 1-4.23-.07 8.78 8.78 0 0 1-2.91-.56c-.8-.3-1.53-.77-2.13-1.38a5.88 5.88 0 0 1-1.38-2.13l-.02-.06a8.84 8.84 0 0 1-.54-2.8l-.01-.37A84.75 84.75 0 0 1 4 16.29v-1c0-2.62.02-3.06.07-4.24.06-1.26.26-2.13.55-2.88l.01-.03c.3-.8.77-1.53 1.38-2.13a5.88 5.88 0 0 1 2.13-1.38l.06-.02a8.84 8.84 0 0 1 2.8-.54l.37-.01C12.39 4 12.99 4 15.71 4zm.91 2.16h-1.24c-2.3 0-2.91.01-3.81.05l-.42.02c-1.17.05-1.8.25-2.23.41-.56.22-.96.48-1.38.9-.4.41-.67.8-.88 1.35l-.03.06a6.7 6.7 0 0 0-.4 2.2l-.02.45c-.04.9-.05 1.53-.05 3.94v1.08c0 2.64.02 3.05.07 4.23v.07c.06 1.13.25 1.74.42 2.16.21.56.47.96.9 1.38.4.4.8.67 1.34.88l.06.03a6.7 6.7 0 0 0 2.2.4l.45.02c.9.04 1.53.05 3.94.05h1.08c2.64 0 3.05-.02 4.23-.07h.07a6.51 6.51 0 0 0 2.16-.42c.52-.19.99-.5 1.38-.9.4-.4.67-.8.88-1.34l.03-.06a6.7 6.7 0 0 0 .4-2.2l.02-.45c.04-.9.05-1.53.05-3.94v-1.09c0-2.63-.02-3.04-.07-4.22v-.07a6.51 6.51 0 0 0-.42-2.16c-.19-.52-.5-.99-.9-1.38a3.7 3.7 0 0 0-1.34-.88l-.06-.03a6.63 6.63 0 0 0-2.16-.4l-.46-.02c-.9-.04-1.5-.05-3.8-.05zM16 9.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.4-3.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"></path></svg>    
            </button> 
            </div>  
        </div>
            </article>
           
        <article className="fixed bottom-0 right-0 left-0 z-40 bg-white hidden custom-xs:block sm:block md:block lg:hidden xl:hidden">
           <div className="relative grid grid-cols-12 text-xs py-3 ">
            <div className="col-span-4 text-red-500  justify-self-end">
                <span className=" flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6 text-red-500" aria-hidden="true" role="presentation" focusable="false" stroke="red" strokeWidth="3" fill="none">
                    <g fill="none"><circle cx="12" cy="12" r="10"></circle>
                    <path d="m19 19 11 11" ></path></g></svg>
                </span>
                <span>Explore</span>
            </div>
            <div className="col-span-4 justify-self-center text-gray-600">
                <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6 text-red-500 justify-items-center"  aria-hidden="true" role="presentation" focusable="false" stroke="grey" strokeWidth="2" fill="none">
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
            </span>
                <span>Wishlists</span>
            </div>
            <div className="col-span-4 text-gray-600">
            <span className="col-span-4 justify-self-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6 text-red-500 " aria-hidden="true" role="presentation" focusable="false" stroke="grey" strokeWidth="2" fill="none">
            <g fill="none"><circle cx="16" cy="16" r="14"></circle>
            <path d="M14.02 19.66a6 6 0 1 1 3.96 0M17.35 19.67H18c3.69.61 6.8 2.91 8.54 6.08m-20.92-.27A12.01 12.01 0 0 1 14 19.67h.62"></path></g></svg>
            </span>
                <span>LogIn</span>
            </div>
            </div>
        </article>
        </section>
    </footer>
    </>
    )
}
export default FooterComponent