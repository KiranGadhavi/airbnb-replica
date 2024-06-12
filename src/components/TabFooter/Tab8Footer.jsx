import React, {useEffect, useState} from "react";
function Tab8Footer(){
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
    { title: 'London', subtitle: 'England' },
    { title: 'Paris', subtitle: 'Île-de-France' },
    { title: 'New York', subtitle: 'New York' },
    { title: 'Barcelona', subtitle: 'Catalonia' },
    { title: 'İstanbul', subtitle: 'İstanbul' },
    { title: 'Bali', subtitle: 'Indonesia' },
    { title: 'Amsterdam', subtitle: 'North Holland' },
    { title: 'Miami', subtitle: 'Florida' },
    { title: 'Madrid', subtitle: 'Community of Madrid' },
    { title: 'Los Angeles', subtitle: 'California' },
    { title: 'Rome', subtitle: 'Lazio' },
    { title: 'Lisbon', subtitle: 'Lisbon' },
    { title: 'Tokyo', subtitle: 'Tokyo' },
    { title: 'Vienna', subtitle: 'Vienna' },
    { title: 'Athens', subtitle: 'Greece' },
    { title: 'Prague', subtitle: 'Czechia' },
    { title: 'Orlando', subtitle: 'Florida' },
    { title: 'Cancún', subtitle: 'Quintana Roo' },
    { title: 'Santorini', subtitle: 'Greece' },
    { title: 'Mexico City', subtitle: 'Mexico City' },
    { title: 'Venice', subtitle: 'Veneto' },
    { title: 'Playa del Carmen', subtitle: 'Quintana Roo' },
    { title: 'San Francisco', subtitle: 'California' },
    { title: 'Las Vegas', subtitle: 'Nevada' },
    { title: 'Boston', subtitle: 'Massachusetts' },
    { title: 'San Diego', subtitle: 'California' },
    { title: 'Chicago', subtitle: 'Illinois' },
    { title: 'Seattle', subtitle: 'Washington' },
    { title: 'Washington', subtitle: 'District of Columbia' },
    { title: 'Atlanta', subtitle: 'Georgia' },
    { title: 'Austin', subtitle: 'Texas' },
    { title: 'Maui', subtitle: 'Hawaii' },
    { title: 'New Orleans', subtitle: 'Louisiana' },
    { title: 'San Juan', subtitle: 'San Juan' },
    { title: 'O‘ahu', subtitle: 'Hawaii' },
    { title: 'Denver', subtitle: 'Colorado' },
    { title: 'Nashville', subtitle: 'Tennessee' },
    { title: 'Charleston', subtitle: 'South Carolina' },
    { title: 'Los Cabos', subtitle: 'Baja California Sur' },
    { title: 'Savannah', subtitle: 'Georgia' },
    { title: 'Dubai', subtitle: 'Dubai' },
    { title: 'Seoul', subtitle: 'Seoul' },
    { title: 'France', subtitle: '' },
    { title: 'Berlin', subtitle: 'Berlin' },
    { title: 'Canada', subtitle: '' },
    { title: 'Toronto', subtitle: 'Ontario' },
    { title: 'Switzerland', subtitle: '' },
    { title: 'Budapest', subtitle: 'Hungary' },
    { title: 'Spain', subtitle: '' },
    { title: 'Portugal', subtitle: '' },
    { title: 'United States', subtitle: '' },
    { title: 'Italy', subtitle: '' },
    { title: 'Greece', subtitle: '' },
    { title: 'Malta', subtitle: '' },
    { title: 'Türkiye', subtitle: '' },
    { title: 'Croatia', subtitle: '' },
    { title: 'Vancouver', subtitle: 'British Columbia' },
    { title: 'Mexico', subtitle: '' },
    { title: 'Milan', subtitle: 'Lombardy' },
    { title: 'Dublin', subtitle: 'County Dublin' },
    { title: 'Germany', subtitle: '' },
    { title: 'Costa Rica', subtitle: '' },
    { title: 'Manhattan', subtitle: 'New York' },
    { title: 'Japan', subtitle: '' },
    { title: 'Málaga', subtitle: 'Andalusia' },
    { title: 'Copenhagen', subtitle: 'Denmark' },
    { title: 'Montreal', subtitle: 'Quebec' },
    { title: 'Brussels', subtitle: 'Brussels' },
    { title: 'Valencia', subtitle: 'Valencian Community' },
    { title: 'Singapore', subtitle: '' },
    { title: 'Nice', subtitle: 'Provence-Alpes-Côte d\'Azur' },
    { title: 'Munich', subtitle: 'Bavaria' },
    { title: 'Majorca', subtitle: 'Balearic Islands' },
    { title: 'Thailand', subtitle: '' },
    { title: 'Tulum', subtitle: 'Quintana Roo' },
    { title: 'Ireland', subtitle: '' },
    { title: 'Porto', subtitle: 'Porto District' },
    { title: 'England', subtitle: 'United Kingdom' },
    { title: 'Miami Beach', subtitle: 'Florida' },
    { title: 'Tenerife', subtitle: 'Canary Islands' },
    { title: 'Netherlands', subtitle: '' },
    { title: 'Zürich', subtitle: 'Zurich' },
    { title: 'Cyprus', subtitle: '' },
    { title: 'Stockholm', subtitle: 'Stockholm County' },
    { title: 'Cape Town', subtitle: 'Western Cape' },
    { title: 'Norway', subtitle: '' },
    { title: 'Sydney', subtitle: 'New South Wales' },
    { title: 'Tuscany', subtitle: 'Italy' },
    { title: 'Mykonos', subtitle: 'Greece' },
    { title: 'Hawaii', subtitle: 'United States' },
    { title: 'Florence', subtitle: 'Tuscany' },
    { title: 'Colombia', subtitle: '' },
    { title: 'Kyiv', subtitle: 'Ukraine' },
    { title: 'Antalya', subtitle: 'Antalya' },
    { title: 'Iceland', subtitle: '' },
    { title: 'Bangkok', subtitle: 'Thailand' },
    { title: 'Buenos Aires', subtitle: 'Buenos Aires' },
    { title: 'Bogotá', subtitle: 'Bogota' },
    { title: 'Warsaw', subtitle: 'Masovian Voivodeship' }
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
  export default Tab8Footer;