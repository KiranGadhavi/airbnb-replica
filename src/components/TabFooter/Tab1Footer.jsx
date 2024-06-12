import React, {useEffect, useState} from "react";
function Tab1Footer(){
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
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Amsterdam', subtitle: 'Flat rentals' },
    { title: 'Athens', subtitle: 'Rentals with pools' },
    { title: 'Aviemore', subtitle: 'Holiday rentals' },
    { title: 'Bakewell', subtitle: 'Cottage rentals' },
    { title: 'Barcelona', subtitle: 'Flat rentals' },
    { title: 'Bath', subtitle: 'Cabin rentals' },
    { title: 'Betws-y-Coed', subtitle: 'Holiday rentals' },
    { title: 'Birmingham', subtitle: 'Holiday rentals' },
    { title: 'Bordeaux', subtitle: 'House rentals' },
    { title: 'Bourton-on-the-Water', subtitle: 'Holiday rentals' },
    { title: 'Brecon', subtitle: 'Villa rentals' },
    { title: 'Bridport', subtitle: 'Holiday rentals' },
    { title: 'Bristol', subtitle: 'Flat rentals' },
    { title: 'Cambridge', subtitle: 'House rentals' },
    { title: 'Chamonix', subtitle: 'Ski-in/ski-out rentals' },
    { title: 'Cheddar', subtitle: 'Holiday rentals' },
    { title: 'Chester', subtitle: 'Cottage rentals' },
    { title: 'Chichester', subtitle: 'Flat rentals' },
    { title: 'Davenport', subtitle: 'House rentals' },
    { title: 'Exmouth', subtitle: 'Holiday rentals' },
    { title: 'Florence', subtitle: 'Flat rentals' },
    { title: 'Kirkby Lonsdale', subtitle: 'House rentals' },
    { title: 'Las Vegas', subtitle: 'Holiday rentals' },
    { title: 'Leeds', subtitle: 'Cottage rentals' },
    { title: 'Leicester', subtitle: 'Flat rentals' },
    { title: 'Les Gets', subtitle: 'Ski-in/ski-out rentals' },
    { title: 'Liverpool', subtitle: 'Flat rentals' },
    { title: 'London', subtitle: 'House rentals' },
    { title: 'Los Angeles', subtitle: 'Apartment rentals' },
    { title: 'Manchester', subtitle: 'Holiday rentals' },
    { title: 'Munich', subtitle: 'House rentals' },
    { title: 'Oxford', subtitle: 'Holiday rentals' },
    { title: 'Paris', subtitle: 'Flat rentals' },
    { title: 'Peebles', subtitle: 'Cottage rentals' },
    { title: 'Porto', subtitle: 'Rentals with pools' },
    { title: 'Portsmouth', subtitle: 'Pet-friendly rentals' },
    { title: 'Rome', subtitle: 'Holiday rentals' },
    { title: 'San Antonio', subtitle: 'Holiday rentals' },
    { title: 'San Francisco', subtitle: 'Flat rentals' },
    { title: 'Seville', subtitle: 'Flat rentals' },
    { title: 'Sheffield', subtitle: 'Holiday rentals' },
    { title: 'St Davids', subtitle: 'Flat rentals' },
    { title: 'Stratford-upon-Avon', subtitle: 'Holiday rentals' },
    { title: 'Sussex', subtitle: 'Flat rentals' },
    { title: 'Tignes', subtitle: 'Flat rentals' },
    { title: 'Venice', subtitle: 'House rentals' },
    { title: 'Vienna', subtitle: 'Holiday rentals' }
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
  export default Tab1Footer;