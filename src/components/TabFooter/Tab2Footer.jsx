import React, {useEffect, useState} from "react";
function Tab2Footer(){
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
    { title: 'Aberdeen', subtitle: 'Flat rentals' },
    { title: 'Aberystwyth', subtitle: 'Cottage rentals' },
    { title: 'Alnwick', subtitle: 'Holiday rentals' },
    { title: 'Bamburgh', subtitle: 'Cottage rentals' },
    { title: 'Berwick-upon-Tweed', subtitle: 'Holiday rentals' },
    { title: 'Boscastle', subtitle: 'Flat rentals' },
    { title: 'Brittany', subtitle: 'Holiday rentals' },
    { title: 'Budapest', subtitle: 'Flat rentals' },
    { title: 'Cardiff', subtitle: 'Cottage rentals' },
    { title: 'Castleton', subtitle: 'Cottage rentals' },
    { title: 'Cheltenham', subtitle: 'Flat rentals' },
    { title: 'Conwy', subtitle: 'Cottage rentals' },
    { title: 'Criccieth', subtitle: 'Beachfront rentals' },
    { title: 'Dartmouth', subtitle: 'House rentals' },
    { title: 'Donegal', subtitle: 'Beachfront rentals' },
    { title: 'Dublin', subtitle: 'Holiday rentals' },
    { title: 'Dumfries', subtitle: 'Cottage rentals' },
    { title: 'Durham', subtitle: 'Holiday rentals' },
    { title: 'Galway', subtitle: 'Holiday rentals' },
    { title: 'Glasgow', subtitle: 'Cottage rentals' },
    { title: 'Grassington', subtitle: 'Cottage rentals' },
    { title: 'Harrogate', subtitle: 'Cottage rentals' },
    { title: 'Hawes', subtitle: 'Holiday rentals' },
    { title: 'Hay-on-Wye', subtitle: 'Holiday rentals' },
    { title: 'Inverness', subtitle: 'Flat rentals' },
    { title: 'Kielder', subtitle: 'Cabin rentals' },
    { title: 'Kraków', subtitle: 'Holiday rentals' },
    { title: 'Lisbon', subtitle: 'Beachfront rentals' },
    { title: 'Llangollen', subtitle: 'Holiday rentals' },
    { title: 'Ludlow', subtitle: 'Holiday rentals' },
    { title: 'Lymington', subtitle: 'Holiday rentals' },
    { title: 'Málaga', subtitle: 'Villa rentals' },
    { title: 'Milan', subtitle: 'House rentals' },
    { title: 'Minehead', subtitle: 'Cottage rentals' },
    { title: 'Murcia', subtitle: 'Flat rentals' },
    { title: 'Newcastle upon Tyne', subtitle: 'Holiday rentals' },
    { title: 'Nice', subtitle: 'Flat rentals' },
    { title: 'North Berwick', subtitle: 'Cottage rentals' },
    { title: 'Norwich', subtitle: 'Holiday rentals' },
    { title: 'Nottingham', subtitle: 'Cottage rentals' },
    { title: 'Oban', subtitle: 'Cabin rentals' },
    { title: 'Palma', subtitle: 'Beachfront rentals' },
    { title: 'Pickering', subtitle: 'Holiday rentals' },
    { title: 'Pitlochry', subtitle: 'Holiday rentals' },
    { title: 'Porthmadog', subtitle: 'Holiday rentals' },
    { title: 'Portpatrick', subtitle: 'Holiday rentals' },
    { title: 'Rye', subtitle: 'Cabin rentals' },
    { title: 'Seahouses', subtitle: 'Cottage rentals' },
    { title: 'Skipton', subtitle: 'Flat rentals' },
    { title: 'Llanberis', subtitle: 'Holiday rentals' },
    { title: 'St Andrews', subtitle: 'Cottage rentals' },
    { title: 'St Austell', subtitle: 'Cottage rentals' },
    { title: 'Swanage', subtitle: 'Flat rentals' },
    { title: 'Swansea', subtitle: 'Beachfront rentals' },
    { title: 'Tintagel', subtitle: 'Holiday rentals' },
    { title: 'West Wittering', subtitle: 'Holiday rentals' },
    { title: 'York', subtitle: 'Family-friendly rentals' },
    { title: 'Tokyo', subtitle: 'Flat rentals' }
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
  export default Tab2Footer;