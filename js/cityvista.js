const cityData = JSON.parse(
`{
 "warwick" :   {
        "name": "Warwick",
        "description" : "Warwick, Rhode Island, is a city steeped in history and natural beauty, offering a blend of urban amenities and suburban charm. Located on the western shore of Narragansett Bay, it boasts a rich maritime heritage and played a significant role in the American Industrial Revolution. Today, Warwick is a diverse community with attractions ranging from historic lighthouses and restored amusement parks to working farms and scenic waterfront areas.                        It's a convenient location with easy access to Providence and other parts of the state, making it a desirable place to live, work, and visit..",
        "population" : "82,999 (2023)",
        "incorporated" : "1931",
        "type" : "a suburban city and a historic port town",
        "avg_income" : "$ 43,859 (2022)",
        "located":"Located in Kent County, Rhode Island, USA. It is situated along the western shore of Narragansett Bay, south of Providence and north of East Greenwich.",
        "updated" : "2025-02-17",
        "landmarks": [
            {
                "name": "Warwick Neck Lighthouse",
                "website": "https://www.lighthousefriends.com/light.asp?ID=510",
                "description": "A historic lighthouse offering scenic views of Narragansett Bay.",
                "src": "https://www.dropbox.com/scl/fi/8ag3kbxz40x41poy32703/neck_lighthouse.jpg?rlkey=w1jfdo1j3i7e4bsl94z0ixe9j&st=fcajvgd0&raw=1",
                "author": "C Hanchey, Flickr",
                "source_url": "https://www.flickr.com/photos/cmhpictures/9908074583/in/photostream/"
            },
            {
                "name": "Rocky Point Park",
                "website": "https://www.warwickri.gov/rocky-point-park",
                "description": "A restored amusement park offering family fun and entertainment.",
                "src": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Rocky_Point_State_Park_-_Skyliner2.JPG",
                "author": "Rhododendrites, Wikimedia",
                "source_url": "https://commons.wikimedia.org/wiki/File:Rocky_Point_State_Park_-_Skyliner2.JPG"
            },
            {
                "name": "ALDRICH MANSION & ESTATE",
                "website": "https://www.aldrichmansion.com/",
                "description": "French chateau hosts a unique blend of European artistry and craftsmanship reflecting an era of yesteryear",
                "src": "https://upload.wikimedia.org/wikipedia/commons/5/50/Aldrich_Mansion_Indian_Oaks_16_finished.jpg",
                "author": "Bsmith61678, Wikimedia",
                "source_url": "https://commons.wikimedia.org/wiki/File:Aldrich_Mansion_Indian_Oaks_16_finished.jpg"
            },
            {
                "name": "Conimicut Point Park",
                "website": "https://www.warwickri.gov/conimicut-point-park",
                "description": "A waterfront park with a beach, playground, and picnic areas.",
                "src": "https://www.dropbox.com/scl/fi/sfc26nvqb8lxnxethm01p/conimicut.jpg?rlkey=f8mbqtbaap87pvpqfuej7s3td&st=2ftfbb7q&raw=1",
                "author": "Dietmar Down, Flickr",
                "source_url": "https://www.flickr.com/photos/dietmardownunder/28988532188/in/photolist-LaBNF7-n6vkUC-265hyw5-23obbHb-265hxQq-2oM4Hoe-qD99WZ-qmKGfm-2ZaYVY-2fBBsJs-2kRzqsG-Jb8G2P-e8iJPu-dZfttF-2kRvMEg-dqJTVd-Yf7gjY-dDTNxb-k6hZtM-iDUgqn-Yf7gF9-dqJTZd-2kRvMFo-e8d4v8-dqJU2Q-4LSdzz-dNyX3V-4LWocL-YiBv4p-dZmbUy-n5MUgg-dWUSqu-dqJJp8-dWPdyH-dwc1ek-dhVVGM-iFTK6k-iFTKrv-dDNqTk-e8d4up-dqJU1E-e8iJNw-e8iJP9-7ZV7TB-dhVVwy-81bie2-6ChtMW-dWPdzn-e2zwiq-e8iJQ3"
            },
            {
                "name": "WARWICK CENTER FOR THE ARTS",
                "website": "https://warwickcfa.org/",
                "description": "Center dedicated to uniting the community through the arts.",
                "src": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kentish_Artillery%2C_Warwick_RI.jpg",
                "author": "John Phelan, Wikipedia",
                "source_url": "https://commons.wikimedia.org/wiki/File:Kentish_Artillery,_Warwick_RI.jpg"
            },
            {
                "name": "Warwick City Park / Buttonwoods Beach",
                "website": "https://www.warwickri.gov/parks-and-recreation/pages/warwick-city-park-buttonwoods-beach",
                "description": "Beach park with three baseball fields, picnic areas and shelters, three-miles of paved bicycle paths and toilet facilities",
                "src": "https://www.dropbox.com/scl/fi/exlza8pc1srs3po8207e2/buttonwoods_beach.jpg?rlkey=olnpsn8hwm4lpawspy2uovh6u&st=d2kctllf&raw=1",
                "author": "This.Usually.Works, Flickr",
                "source_url": "https://www.flickr.com/photos/catzrule/6364851159/in/photolist-aGrwv6-9chqX2-WnfiRD-VbZYxM-5AJhFz-9UY4JW-X3XVNy-UfQm7m-YUPhbP-98Utbs-Eq29nX-eDGs1-mB4C6W-mB3zCk-dMz4uj-mB4Loh-mB4Hc7-HKRyvf-ygnX9P-24s9NbN-akc5VE-238NJcG-mB2YVK-yvzkwW-7xQWh9-7D1VJL-7rAECH-7rAEAr-mBnfbZ-eDGrW-7rAEWV-mB4Num-mB4VaL-267aFX1-6UEzWM-mB4Nn6-7BRXBh-29TTzK-aSnqHg-24s9Juu-qaGxs-c7hKPw-26esu19-diAwST-xrZuE3-diAvaY-TNC7yr-diAvMH-diAxkn-BLmyny"
            }
        ]
    },

    "providence" :
    {
        "name": "Providence",
        "description" : "Providence, is a vibrant and historic city, the capital of the state, and a hub of culture, education, and innovation. Founded in 1636 by Roger Williams, it boasts a rich history evident in its architecture, from Colonial buildings to stunning examples of industrial-era craftsmanship. Home to Brown University and the Rhode Island School of Design, Providence enjoys a youthful energy and a thriving arts scene.                         Its revitalized downtown area, along the Providence River, is known for its award-winning restaurants, unique shops,                        and the captivating WaterFire installation.  Providence offers a blend of big-city amenities and a friendly, walkable atmosphere, making it a dynamic destination in the heart of New England.",
        "population" : "190,792 (2023)",
        "incorporated" : "1831",
        "type" : "Urban.",
        "avg_income" : "$29,539 (2022)",
        "located": "Located in Providence County, Rhode Island, USA. It is situated at the head of Narragansett Bay, near the mouth of the Providence River. It's the capital city of Rhode Island and lies in the northeastern part of the state.",
        "updated" : "2025-02-17",
        "landmarks": [
            {
                "name": "Rhode Island School of Design Museum (RISD Museum)",
                "website": "https://risdmuseum.org/",
                "description": "Art museum housing diverse collections from around the world.",
                "src": "https://www.dropbox.com/scl/fi/2dvn0dawbx6vo6sgmxnqf/risd_museum_of_art_interior.jpg?rlkey=5vu4mhlj501lx9vxb8z9kflm2&st=wftp45od&raw=1",
                "author": "Kenneth C. Zirkel",
                "source_url": "https://commons.wikimedia.org/wiki/File:RISD_Museum_of_art_interior.jpg"
            },
            {
                "name": "Roger Williams Park Zoo",
                "website": "https://www.rwpzoo.org/",
                "description": "Zoo featuring animals from around the globe, along with exhibits and events.",
                "src": "https://www.dropbox.com/scl/fi/l17ykckhbykgl7sw9yepm/roger_williams_park_zoo.jpg?rlkey=hsbesrp1hbsveej8npq2nvsa3&st=rfr4h4b6&raw=1",
                "author": "Alex Starr",
                "source_url": "https://commons.wikimedia.org/wiki/File:Ammotragus_lervia_-Roger_Williams_Park_Zoo,_USA-8a.jpg"
            },
            {
                "name": "WaterFire Providence",
                "website": "https://waterfire.org/",
                "description": "An award-winning public art installation featuring bonfires on the Providence River.",
                "src": "https://www.dropbox.com/scl/fi/lytw2vtp09xtmxfohpqqt/waterfire_august_31_2024.jpg?rlkey=07zr28wipk2jroqeszybs60na&st=pnv5grfw&raw=1",
                "author": "4300streetcar",
                "source_url": "https://commons.m.wikimedia.org/wiki/File:Waterfire_August_31_2024.jpg"
            },
            {
                "name": "Providence Performing Arts Center (PPAC)",
                "website": "https://www.ppacri.org/",
                "description": "Historic theater hosting Broadway shows, concerts, and other performances.",
                "src": "https://www.dropbox.com/scl/fi/s9ctu085fgv5d5ffnoct7/ppac.jpg?rlkey=jegg9sjivx5fh20trmiolhqpn&st=ul9cdytm&raw=1",
                "author": "Canon in 2D, Flickr",
                "source_url": "https://www.flickr.com/photos/16462767@N00/3231129744"
            },
            {
                "name": "Brown University",
                "website": "https://www.brown.edu/",
                "description": "Ivy League university with historic architecture and a vibrant campus.",
                "src": "https://www.dropbox.com/scl/fi/x7rgd2rmczm37toqgx3xp/brown_university_pembroke_campus.jpg?rlkey=nejnim9a1bprfo3a1ovtnrw1q&st=5uvlu5zs&raw=1",
                "author": "Kenneth C. Zirkel, Wikipedia",
                "source_url": "https://commons.wikimedia.org/wiki/File:Brown_University_Pembroke_campus_%28crop_and_straighten%29.jpg"
            },
            {
                "name": "Benefit Street (Mile of History)",
                "website": "https://www.providenceri.com/planning-development/historic-preservation/districts/benefit-street-cemetery/",
                "description": "A street featuring restored Colonial and Federal-style buildings.",
                "src": "https://www.dropbox.com/scl/fi/vtkh8690awk2yigqgia5f/benefit_street_providence.jpg?rlkey=rcsh0j5t00a4el1idl8xhkrj6&st=tzg3ogl4&raw=1",
                "author": "Daniel Case, Wikipedia",
                "source_url": "https://commons.wikimedia.org/wiki/File:Benefit_Street,_Providence,_RI.jpg"
            }
        ]
    },

    "newport" :
    {
        "name": "Newport",
        "description" : "Captivating coastal city renowned for its opulent Gilded Age mansions, scenic Cliff Walk, and rich maritime history.  Perched on the edge of Narragansett Bay, this charming city offers a blend of historic grandeur and modern attractions.   From exploring the lavish summer cottages of the Vanderbilt and Astor families to sailing in the harbor or strolling along the breathtaking coastline, Newport provides a glimpse into a bygone era while remaining a vibrant destination. Its picturesque harbor, diverse culinary scene, and world-class events like the Newport Folk Festival  and Newport Jazz Festival contribute to its enduring appeal, making it a treasured gem in New England",
        "population" : "24717 (2023)",
        "incorporated" : "1784",
        "type" : "suburban",
        "avg_income" : "39,047 USD (2022)",
        "located":"Located on the southern tip of Aquidneck Island in Rhode Island, USA. It's situated in Newport County, along the shores of Narragansett Bay.",
        "updated" : "2025-02-17",
        "landmarks": [
            {
                "name": "Ocean Drive",
                "website": "https://www.discovernewport.org/things-to-do/ocean-drive/",
                "description": "Ocean Drive in Newport, Rhode Island",
                "src": "https://www.dropbox.com/scl/fi/q3v0konen4tsio5g3lv0k/ri_ocean_drive.jpg?rlkey=i420b8864jgb3bokxjy2eu439&st=t7s13p9w&raw=1",
                "author": "In Mou We Trust, Flickr",
                "source_url": "https://www.flickr.com/photos/dorothy201305/11880263545"
            },
            {
                "name": "The Breakers",
                "website": "https://www.newportmansions.org/the-breakers",
                "description": "Historic Vanderbilt mansion",
                "src": "https://www.dropbox.com/scl/fi/3zr8z0crwiatvy2vx2hbd/the_breakers.jpg?rlkey=kovvs9kl21manxf10nysoydjh&st=iiq3vu6v&raw=1",
                "author": "Frank Kovalchek, Flickr",
                "source_url": "https://www.flickr.com/photos/72213316@N00/48230975432/in/photostream/"
            },
            {
                "name": "Cliff Walk",
                "website": "https://www.discovernewport.org/things-to-do/cliff-walk",
                "description": "Scenic walkway along the coast",
                "src": "https://www.dropbox.com/scl/fi/5zsc8pgo9axw4ledn4ntq/cliff_walk_newport_ri.jpg?rlkey=ypnk2sxwvathhx9m2mo2sfin0&st=ppd4kku7&raw=1",
                "author": "Melissa McMasters, Flickr",
                "source_url": "https://www.flickr.com/photos/cricketsblog/51292794616/"
            },
            {
                "name": "Fort Adams State Park",
                "website": "https://www.fortadams.org/",
                "description": "A large coastal fort with historical exhibits and events.",
                "src": "https://www.dropbox.com/scl/fi/viaoogi0kndm0u3o64uzs/fort_adams.jpg?rlkey=sgnsdg9wo72bpmkoh6dfbtlz8&st=rwjwov2q&raw=1",
                "author": "LoC",
                "source_url": "www.loc.gov/item/ri0349/"
            },
            {
                "name": "Newport Harbor",
                "website": "https://www.newportharborisland.com/things-to-do/marina/",
                "description": "A bustling harbor with scenic views, boat tours, and waterfront dining.",
                "src": "https://www.dropbox.com/scl/fi/z8aannlukg4rv3nk9nvb5/newport_harbor.jpg?rlkey=48qxpc6x9ef030xl5iv0u1zv2&st=vmdgx7u3&raw=1",
                "author": "Carol M. Highsmith, Wikipedia",
                "source_url": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Aerial_view_of_Newport_on_Aquidneck_Island_in_the_U.S._state_of_Rhode_Island%2C_with_a_focus_on_Newport_Harbor.jpg"
            },
            {
                "name": "Touro Synagogue",
                "website": "https://tourosynagogue.org/",
                "description": "The oldest synagogue in the United States, with historical significance.",
                "src": "https://www.dropbox.com/scl/fi/2yju3y8ee8sw0oclzfzy2/touro_synagogue_newport_ri.jpg?rlkey=ebs45rltcxba09zqe6axpsve7&st=duvxnsxl&raw=1",
                "author": "Swampyank, Wikipedia",
                "source_url": "https://commons.wikimedia.org/wiki/File:Touro_Synagogue_Newport_Rhode_Island_1.jpg"
            }
        ]
    }
}`);

function displayCityInfo() {
    const cityHash = window.location.hash;
  
    if (cityHash) {
      const cityName = cityHash.substring(1); // Remove the '#'
  
      if (cityData.hasOwnProperty(cityName)) {
         const cityInfo = cityData[cityName];
         document.getElementById("city_name").textContent = cityInfo.name;
         document.getElementById("city_population").textContent = cityInfo.population;
         document.getElementById("city_description").textContent = cityInfo.description;
         document.getElementById("city_incorporated").textContent = cityInfo.incorporated;
         document.getElementById("city_type").textContent = cityInfo.type;
         document.getElementById("city_avg_income").textContent = cityInfo.avg_income;
         document.getElementById("city_located").textContent = cityInfo.located;
         //landmarks
         displayCityLandmarks(cityName);

      } else {
        // Handle cases where the city name is not valid
        //console.log(`error: no property found for ${cityName} `);
        window.location.href = "404.html"; // Redirect to error.html
      }
    } else {
      // Handle the case where no city is selected (e.g., initial page load of cityvista.html)
      //window.location.href = "error.html"; // Redirect to error.html
      console.log(`error, city no selected.`);
    }
  }
  
function displayCityLandmarks(cityName) {  
// get container
const cityImgContainer = document.getElementById("city-img");
// remove previous images
cityImgContainer.innerHTML = '';

//get new landmarks
const landmarks = cityData[cityName].landmarks;


//dinamically create new html
landmarks.forEach(landmark => {
    const landmarkHTML = `
        <div id="landmark-container">
            <div class="row">
                <div class="col">
                    <div id="city_img_container">
                        <img src="${landmark.src}" class="card-img-top" alt="${landmark.name}" />       
                    </div> 
                    <div id="place_description">
                     <a id="place_website" href="${landmark.website}" target="_blank">
                        <span id="place_name">${landmark.name}</span>
                    </a>
                    ${landmark.description}
                    <a id="photo_author" href="${landmark.source_url}" target="_blank"> Photo by ${landmark.author} </a>
                    </div>
                </div>
            </div>             
        </div>
        <hr>
    `;

    //insert the new html in the container
    cityImgContainer.innerHTML += landmarkHTML;
});

}

// Event listener for hash changes:
window.addEventListener('hashchange', () =>
    displayCityInfo()
);


// Event listener for initial page load
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {    
    displayCityInfo();
  });

