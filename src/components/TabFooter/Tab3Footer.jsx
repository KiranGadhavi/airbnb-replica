import React, {useEffect, useState} from "react";
function Tab3Footer(){
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

  const listItems =[
    { title: 'Abersoch', subtitle: 'Cottage rentals' },
    { title: 'Agadir', subtitle: 'Rentals with pools' },
    { title: 'Albufeira', subtitle: 'Flat rentals' },
    { title: 'Aldeburgh', subtitle: 'House rentals' },
    { title: 'Alicante', subtitle: 'Holiday rentals' },
    { title: 'Almería', subtitle: 'Flat rentals' },
    { title: 'Alnmouth', subtitle: 'Holiday rentals' },
    { title: 'Alvor', subtitle: 'Beach house rentals' },
    { title: 'Antibes', subtitle: 'Rentals with pools' },
    { title: 'Ayia Napa', subtitle: 'Holiday rentals' },
    { title: 'Barmouth', subtitle: 'Cottage rentals' },
    { title: 'Beach', subtitle: 'Holiday rentals' },
    { title: 'Beer', subtitle: 'Cottage rentals' },
    { title: 'Benalmádena', subtitle: 'Holiday rentals' },
    { title: 'Benidorm', subtitle: 'Flat rentals' },
    { title: 'Biarritz', subtitle: 'Flat rentals' },
    { title: 'Blackpool', subtitle: 'Cabin rentals' },
    { title: 'Bournemouth', subtitle: 'Flat rentals' },
    { title: 'Bradford', subtitle: 'Flat rentals' },
    { title: 'Brean', subtitle: 'Cottage rentals' },
    { title: 'Bridlington', subtitle: 'Chalet rentals' },
    { title: 'Brixham', subtitle: 'Chalet rentals' },
    { title: 'Broadstairs', subtitle: 'Holiday rentals' },
    { title: 'Bude', subtitle: 'House rentals' },
    { title: 'Bundoran', subtitle: 'Flat rentals' },
    { title: 'Buxton', subtitle: 'House rentals' },
    { title: "Cala d'Or", subtitle: 'Flat rentals' },
    { title: 'Cala Galdana', subtitle: 'Holiday rentals' },
    { title: 'Calp', subtitle: 'Beachfront rentals' },
    { title: 'Cannes', subtitle: 'Holiday rentals' },
    { title: 'Cape Town', subtitle: 'Beachfront rentals' },
    { title: 'Carvoeiro', subtitle: 'Holiday rentals' },
    { title: 'Christchurch', subtitle: 'House rentals' },
    { title: 'Crantock', subtitle: 'Holiday rentals' },
    { title: 'Cromer', subtitle: 'Chalet rentals' },
    { title: 'Cádiz', subtitle: 'Beachfront rentals' },
    { title: 'Dalyan', subtitle: 'Holiday rentals' },
    { title: 'Dawlish Warren', subtitle: 'Holiday rentals' },
    { title: 'Dawlish', subtitle: 'House rentals' },
    { title: 'Dubai', subtitle: 'Villa rentals' },
    { title: 'Eastbourne', subtitle: 'Holiday rentals' },
    { title: 'Falmouth', subtitle: 'House rentals' },
    { title: 'Faro', subtitle: 'Beach house rentals' },
    { title: 'Ölüdeniz', subtitle: 'House rentals' },
    { title: 'Filey', subtitle: 'Apartment rentals' },
    { title: 'Flamborough', subtitle: 'Cottage rentals' },
    { title: 'Fuengirola', subtitle: 'Holiday rentals' },
    { title: 'Corralejo', subtitle: 'Flat rentals' },
    { title: 'Great Yarmouth', subtitle: 'Holiday rentals' },
    { title: 'Hastings', subtitle: 'House rentals' },
    { title: 'Hemsby', subtitle: 'Cottage rentals' },
    { title: 'Hunstanton', subtitle: 'Beach house rentals' },
    { title: 'Ilfracombe', subtitle: 'House rentals' },
    { title: 'Puerto de la Duquesa', subtitle: 'Holiday rentals' },
    { title: 'Playa Blanca', subtitle: 'Beach house rentals' },
    { title: 'Lanzarote', subtitle: 'Holiday rentals' },
    { title: 'Larnaca', subtitle: 'Villa rentals' },
    { title: 'Lincoln', subtitle: 'Holiday rentals' },
    { title: 'Lindos', subtitle: 'Flat rentals' },
    { title: 'Lizard', subtitle: 'Holiday rentals' },
    { title: 'Llandudno', subtitle: 'Flat rentals' },
    { title: 'Looe', subtitle: 'Flat rentals' },
    { title: 'Los Cristianos', subtitle: 'Beach house rentals' },
    { title: 'Lyme Regis', subtitle: 'Holiday rentals' },
    { title: 'Magaluf', subtitle: 'House rentals' },
    { title: 'Alcúdia', subtitle: 'Villa rentals' },
    { title: 'Marbella', subtitle: 'Beachfront rentals' },
    { title: 'Margate', subtitle: 'Cottage rentals' },
    { title: 'İçmeler', subtitle: 'Holiday rentals' },
    { title: 'Mevagissey', subtitle: 'Holiday rentals' },
    { title: 'Miami Beach', subtitle: 'House rentals' },
    { title: 'Miami', subtitle: 'Holiday rentals' },
    { title: 'Mijas', subtitle: 'Holiday rentals' },
    { title: 'Moraira', subtitle: 'House rentals' },
    { title: 'Naples', subtitle: 'Flat rentals' },
    { title: 'Newcastle', subtitle: 'Flat rentals' },
    { title: 'Newquay', subtitle: 'Cottage rentals' },
    { title: 'Padstow', subtitle: 'Cabin rentals' },
    { title: 'Palma Nova', subtitle: 'House rentals' },
    { title: 'Paphos', subtitle: 'Beach house rentals' },
    { title: 'Penzance', subtitle: 'Holiday rentals' },
    { title: 'Perranporth', subtitle: 'Flat rentals' },
    { title: 'Plymouth', subtitle: 'House rentals' },
    { title: 'Polperro', subtitle: 'Flat rentals' },
    { title: 'Port Isaac', subtitle: 'Holiday rentals' },
    { title: 'Port de Pollença', subtitle: 'Flat rentals' },
    { title: 'Portrush', subtitle: 'Cottage rentals' },
    { title: 'Portstewart', subtitle: 'Flat rentals' },
    { title: 'Positano', subtitle: 'Flat rentals' },
    { title: 'Protaras', subtitle: 'House rentals' },
    { title: "Robin Hood's Bay", subtitle: 'Holiday rentals' },
    { title: 'Runswick Bay', subtitle: 'Holiday rentals' },
    { title: 'Salcombe', subtitle: 'Flat rentals' },
    { title: 'Salou', subtitle: 'House rentals' },
    { title: 'Donostia-San Sebastian', subtitle: 'Cottage rentals' },
    { title: 'Sandsend', subtitle: 'Cottage rentals' },
    { title: 'Santa Ponsa', subtitle: 'House rentals' },
    { title: 'Saundersfoot', subtitle: 'House rentals' },
    { title: 'Scarborough', subtitle: 'Holiday rentals' },
    { title: 'Seaside', subtitle: 'Beach house rentals' },
    { title: 'Seaview', subtitle: 'Holiday rentals' },
    { title: 'Sennen Cove', subtitle: 'Flat rentals' },
    { title: 'Sheringham', subtitle: 'Cottage rentals' },
    { title: 'Shetland', subtitle: 'Holiday rentals' },
    { title: 'Sidari', subtitle: 'Flat rentals' },
    { title: 'Sidmouth', subtitle: 'House rentals' },
    { title: 'Skegness', subtitle: 'Cottage rentals' },
    { title: 'Sorrento', subtitle: 'Villa rentals' },
    { title: 'Southport', subtitle: 'Flat rentals' },
    { title: 'Southwold', subtitle: 'Holiday rentals' },
    { title: 'Split', subtitle: 'Villa rentals' },
    { title: 'St Agnes', subtitle: 'Flat rentals' },
    { title: 'St Mawes', subtitle: 'Cottage rentals' },
    { title: 'St Ives', subtitle: 'Holiday rentals' },
    { title: 'Staithes', subtitle: 'Holiday rentals' },
    { title: 'Sunny Beach', subtitle: 'Flat rentals' },
    { title: 'Sydney', subtitle: 'Beachfront rentals' },
    { title: 'Sóller', subtitle: 'Flat rentals' },
    { title: 'Teignmouth', subtitle: 'Holiday rentals' },
    { title: 'Tenby', subtitle: 'Cottage rentals' },
    { title: 'Costa Adeje', subtitle: 'Villa rentals' },
    { title: 'Playa de las Américas', subtitle: 'Flat rentals' },
    { title: 'Torquay', subtitle: 'Flat rentals' },
    { title: 'Torremolinos', subtitle: 'Flat rentals' },
    { title: 'Torrevieja', subtitle: 'Holiday rentals' },
    { title: 'Valencia', subtitle: 'Flat rentals' },
    { title: 'Villamartin', subtitle: 'Holiday rentals' },
    { title: 'Wells-next-the-Sea', subtitle: 'Holiday rentals' },
    { title: 'Weston-super-Mare', subtitle: 'Holiday rentals' },
    { title: 'Weymouth', subtitle: 'Chalet rentals' },
    { title: 'Whitby', subtitle: 'House rentals' },
    { title: 'Whitstable', subtitle: 'Beach house rentals' },
    { title: 'Woolacombe', subtitle: 'Cottage rentals' },
    { title: 'Lefkada', subtitle: 'Villa rentals' },
    { title: 'Rhodes', subtitle: 'Villa rentals' }
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
  export default Tab3Footer;