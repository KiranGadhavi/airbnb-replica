import React, {useEffect, useState} from "react";
function Tab5Footer(){
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
    { title: 'Ambleside', subtitle: 'Holiday rentals' },
    { title: 'Bowness-on-Windermere', subtitle: 'Holiday rentals' },
    { title: 'Coniston', subtitle: 'Holiday rentals' },
    { title: 'Grasmere', subtitle: 'Flat rentals' },
    { title: 'Hawkshead', subtitle: 'Cottage rentals' },
    { title: 'Keswick', subtitle: 'House rentals' },
    { title: 'Kissimmee', subtitle: 'Villa rentals' },
    { title: 'Windermere', subtitle: 'Lakehouse rentals' },
    { title: 'Lakeside', subtitle: 'Holiday rentals' },
    { title: 'Morzine', subtitle: 'Holiday rentals' },
    { title: 'New York', subtitle: 'Flat rentals' },
    { title: 'Orlando', subtitle: 'Family-friendly rentals' },
    { title: 'Tattershall', subtitle: 'Holiday rentals' }
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
  export default Tab5Footer;