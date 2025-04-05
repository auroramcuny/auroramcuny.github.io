const parks = [
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Acadia National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "3,961,661"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Acadia National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "3,879,890"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Acadia National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "3,970,260"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Acadia National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "4,069,098"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Acadia National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "2,669,034"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Acadia National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "3,437,286"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Boston Harbor Islands National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2024,
      "TRV": "28,157"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Boston Harbor Islands National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2023,
      "TRV": "27,986"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Boston Harbor Islands National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2022,
      "TRV": "29,241"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Boston Harbor Islands National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2021,
      "TRV": "20,777"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Boston Harbor Islands National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2020,
      "TRV": "71,991"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Boston Harbor Islands National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2019,
      "TRV": ""
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Delaware Water Gap National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2024,
      "TRV": "4,079,763"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Delaware Water Gap National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2023,
      "TRV": "4,207,541"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Delaware Water Gap National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2022,
      "TRV": "4,380,225"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Delaware Water Gap National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2021,
      "TRV": "4,340,902"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Delaware Water Gap National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2020,
      "TRV": "4,068,529"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Delaware Water Gap National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2019,
      "TRV": "3,374,865"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gateway National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2024,
      "TRV": "8,929,035"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gateway National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2023,
      "TRV": "8,705,329"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gateway National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2022,
      "TRV": "8,728,291"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gateway National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2021,
      "TRV": "9,060,807"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gateway National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2020,
      "TRV": "8,404,728"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gateway National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2019,
      "TRV": "9,405,622"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gauley River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2024,
      "TRV": "272,898"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gauley River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2023,
      "TRV": "187,223"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gauley River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2022,
      "TRV": "163,510"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gauley River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2021,
      "TRV": "167,794"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gauley River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2020,
      "TRV": "109,378"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Gauley River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2019,
      "TRV": "119,282"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "New River Gorge National Park & PRES",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "1,811,937"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "New River Gorge National Park & PRES",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "1,707,223"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "New River Gorge National Park & PRES",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "1,593,523"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "New River Gorge National Park & PRES",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "1,682,720"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "New River Gorge National Park & PRES",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "1,054,374"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "New River Gorge National Park & PRES",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "1,195,721"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Shenandoah National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "1,720,211"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Shenandoah National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "1,576,008"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Shenandoah National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "1,449,300"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Shenandoah National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "1,592,312"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Shenandoah National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "1,666,265"
    },
    {
      "RegionName": "Northeast  Region",
      "ParkName": "Shenandoah National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "1,425,507"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Biscayne National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "512,213"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Biscayne National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "571,242"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Biscayne National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "701,023"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Biscayne National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "705,655"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Biscayne National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "402,770"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Biscayne National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "708,522"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Chattahoochee River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2024,
      "TRV": "2,940,804"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Chattahoochee River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2023,
      "TRV": "3,183,081"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Chattahoochee River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2022,
      "TRV": "3,537,848"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Chattahoochee River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2021,
      "TRV": "3,256,151"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Chattahoochee River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2020,
      "TRV": "3,066,877"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Chattahoochee River National Recreation Area",
      "ParkType": "National Recreation Area",
      "Year": 2019,
      "TRV": "3,393,133"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Congaree National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "242,049"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Congaree National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "250,114"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Congaree National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "204,522"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Congaree National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "215,181"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Congaree National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "119,306"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Congaree National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "159,445"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Dry Tortugas National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "84,873"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Dry Tortugas National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "84,285"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Dry Tortugas National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "78,488"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Dry Tortugas National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "83,817"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Dry Tortugas National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "48,543"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Dry Tortugas National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "79,200"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Everglades National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "741,983"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Everglades National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "810,189"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Everglades National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "1,155,193"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Everglades National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "942,130"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Everglades National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "702,319"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Everglades National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "1,118,300"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Great Smoky Mountains National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "12,191,834"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Great Smoky Mountains National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "13,297,647"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Great Smoky Mountains National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "12,937,633"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Great Smoky Mountains National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "14,161,548"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Great Smoky Mountains National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "12,095,720"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Great Smoky Mountains National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "12,547,743"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Mammoth Cave National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "747,042"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Mammoth Cave National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "654,450"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Mammoth Cave National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "663,147"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Mammoth Cave National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "515,774"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Mammoth Cave National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "290,392"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Mammoth Cave National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "551,590"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Virgin Islands National Park",
      "ParkType": "National Park",
      "Year": 2024,
      "TRV": "423,029"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Virgin Islands National Park",
      "ParkType": "National Park",
      "Year": 2023,
      "TRV": "343,685"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Virgin Islands National Park",
      "ParkType": "National Park",
      "Year": 2022,
      "TRV": "196,752"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Virgin Islands National Park",
      "ParkType": "National Park",
      "Year": 2021,
      "TRV": "323,999"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Virgin Islands National Park",
      "ParkType": "National Park",
      "Year": 2020,
      "TRV": "167,540"
    },
    {
      "RegionName": "Southeast  Region",
      "ParkName": "Virgin Islands National Park",
      "ParkType": "National Park",
      "Year": 2019,
      "TRV": "133,398"
    }
  ]

let container = document.getElementById('container');

// Group parks by ParkName
const groupedParks = parks.reduce((acc, park) => {
    if (!acc[park.ParkName]) {
        acc[park.ParkName] = [];
    }
    acc[park.ParkName].push(park);
    return acc;
}, {});

// Function to create cards with a table for each park
function makeCards(ParkName, ParkType, RegionName, parkData) {
    // Create a div
    let elementDiv = document.createElement('div');

    // Add a class
    elementDiv.classList.add('photo-container');

    elementDiv.setAttribute('region', RegionName);
    console.log(RegionName);

    // Create the card header
    let cardHeader = `
        <h2 class="name">${ParkName}</h2>
        <p><span>Type:</span> ${ParkType}</p>
        <p><span>Region:</span> ${RegionName}</p>
    `;

    // Create a table for the years and TRV
    let table = `
        <table class="visitors">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Visitors</th>
                </tr>
            </thead>
            <tbody>
                ${parkData.map(park => `
                    <tr>
                        <td>${park.Year}</td>
                        <td>${park.TRV || 'N/A'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    // Combine the header and table
    elementDiv.innerHTML = cardHeader + table;

    // Append div to the container
    container.append(elementDiv);
}

// Loop through the grouped parks and create cards
Object.keys(groupedParks).forEach(ParkName => {
    const parkData = groupedParks[ParkName];
    const { ParkType, RegionName } = parkData[0]; // Use the first entry for common details
    makeCards(ParkName, ParkType, RegionName, parkData);
});

let dropdown = document.getElementById('filterDropdown');

let cards = document.querySelectorAll('div.photo-container'); 

dropdown.addEventListener('change', function(){
  let filterValue = this.value;

  cards.forEach(function(card){ 
      // If the dropdown value equals the region of the card or 'all', display the card
      if (filterValue === 'all' || card.getAttribute('region') === filterValue) {
        card.style.display = 'block';
      }
      // Otherwise, hide the card
      else {
        card.style.display = 'none';
      }    
  });


})