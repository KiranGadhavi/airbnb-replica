import React, {useEffect, useState} from "react";
function Tab6Footer(){
    const [buttonPosition, setButtonPosition] = useState(17); // Default to xl screen
    const [showHiddenItems, setShowHiddenItems] = useState(false); // State to show/hide items

  const updateButtonPosition = () => {
    const width = window.innerWidth;
    if (width >= 1200) { // xl screen
      setButtonPosition(17);
    } else if (width >= 768) { // md screen
      setButtonPosition(11);
    } else { // sm screen
      setButtonPosition(7);
    }
  };

  useEffect(() => {
    updateButtonPosition(); // Initial check
    window.addEventListener('resize', updateButtonPosition); // Update on resize
    return () => window.removeEventListener('resize', updateButtonPosition); // Cleanup listener
  }, []);

//   const listItems = Array.from({ length: 10 }, (_, i) => i + 1); // Generate 10 li items

  const handleClick = () => {
    setShowHiddenItems(true);
  };

  const listItems = [
    { title: 'Yurt Rentals', subtitle: 'United States' },
    { title: 'Yurt Rentals', subtitle: 'United Kingdom' },
    { title: 'Castle Rentals', subtitle: 'United States' },
    { title: 'Houseboats', subtitle: 'United States' },
    { title: 'Holiday Caravans', subtitle: 'United Kingdom' },
    { title: 'Private Island Rentals', subtitle: 'United States' },
    { title: 'Farm Houses', subtitle: 'United States' },
    { title: 'Farm Cottages', subtitle: 'United Kingdom' },
    { title: 'Cabin Rentals', subtitle: 'Australia' },
    { title: 'Luxury Cabins', subtitle: 'United Kingdom' },
    { title: 'Luxury Cabins', subtitle: 'United States' },
    { title: 'Holiday Chalets', subtitle: 'United Kingdom' },
    { title: 'Cottage Rentals', subtitle: 'United States' },
    { title: 'Holiday Cottages', subtitle: 'United Kingdom' },
    { title: 'Mansion Rentals', subtitle: 'United States' },
    { title: 'Villa Rentals', subtitle: 'United Kingdom' },
    { title: 'Holiday Bungalows', subtitle: 'United Kingdom' },
    { title: 'Bungalow Rentals', subtitle: 'United States' },
    { title: 'Condo Rentals', subtitle: 'United States' },
    { title: 'Holiday Apartments', subtitle: 'Australia' },
    { title: 'Holiday Houses', subtitle: 'United States' },
    { title: 'Holiday Houses', subtitle: 'United Kingdom' },
    { title: 'Private Holiday Rentals', subtitle: 'United Kingdom' },
    { title: 'Big House Rentals', subtitle: 'United States' },
    { title: 'Big Cottages', subtitle: 'Australia' },
    { title: 'Large Villas', subtitle: 'United Kingdom' },
    { title: 'House Rentals with a Pool', subtitle: 'United States' },
    { title: 'Cabin Rentals with a Pool', subtitle: 'United States' },
    { title: 'Villas with a Pool', subtitle: 'United Kingdom' },
    { title: 'Apartments with a Hot Tub', subtitle: 'United States' },
    { title: 'Holiday Cottages with a Hot Tub', subtitle: 'United Kingdom' },
    { title: 'Beach Cabins', subtitle: 'United States' },
    { title: 'Beach Condos', subtitle: 'United States' },
    { title: 'Beachfront Rentals', subtitle: 'United States' },
    { title: 'Beach Houses', subtitle: 'United Kingdom' },
    { title: 'Beach Villas', subtitle: 'United Kingdom' },
    { title: 'Coastal Cottages', subtitle: 'United Kingdom' },
    { title: 'Pet-Friendly Vacation Rentals', subtitle: 'United States' },
    { title: 'Pet-Friendly Beach Rentals', subtitle: 'United States' },
    { title: 'Pet-Friendly Cabin Rentals', subtitle: 'United States' },
    { title: 'Dog-Friendly Cottages', subtitle: 'United Kingdom' },
    { title: 'Luxury Dog-Friendly Cottages', subtitle: 'United Kingdom' }
  ];
  return(
<>
<ul className="grid grid-cols-6 gap-4 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 custom-xs:grid-cols-2">
        {listItems.map((item, index) => (
          <React.Fragment key={index}>
            {(showHiddenItems || index < buttonPosition) && (
              <li className="col-span-1 md:col-span-1 sm:col-span-1">
                <div className="font-bold">{item.title}</div>
                <span className="text-zinc-500">{item.subtitle}</span>
              </li>
            )}
            {index === buttonPosition && !showHiddenItems && (
              <li className="col-span-1 " key="special-button" >
                <button onClick={handleClick} className="text-black">
                  <span className="flex">
                <span>Show More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-4 w-4 my-1.5 mx-0.5" aria-hidden="true" role="presentation" focusable="false" stroke="currentColor">
                      <path strokeWidth="5" d="M8 12 L16 20 L24 12" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </button>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      </>
  )
}
  export default Tab6Footer;