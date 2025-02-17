const jsonURL = `https://www.dropbox.com/scl/fi/5wr3jansvbhqf66803b5l/city-data-v2.json?rlkey=7fbrcdsbk83dfb85r0phwv1cq&st=cu44a18l&dl=1`;

function displayCityInfo() {
    const cityHash = window.location.hash;
  
    if (cityHash) {
      const cityName = cityHash.substring(1); // Remove the '#'
      // Now you have the city name (e.g., "city1", "city2")
    // Use this cityName to fetch and display the correct info.

    // Example using a simple lookup table (replace with your actual data):
    const cityData = {
        city1: { name: "City 1", population: 100000, description: "..." },
        city2: { name: "City 2", population: 200000, description: "..." },
        city3: { name: "City 3", population: 150000, description: "..." },
      };
  
      if (cityData.hasOwnProperty(cityName)) {
         const cityInfo = cityData[cityName];
         document.getElementById("city-name").textContent = cityInfo.name;
         document.getElementById("city-population").textContent = cityInfo.population;
         document.getElementById("city-description").textContent = cityInfo.description;
      } else {
        // Handle cases where the city name is not valid
        window.location.href = "error.html"; // Redirect to error.html
      }
    } else {
      // Handle the case where no city is selected (e.g., initial page load of cityvista.html)
      window.location.href = "error.html"; // Redirect to error.html
    }
  }
  
  async function getCityDescription(cityName, jsonURL) {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cityData = await response.json();

        for (const city of cityData) {
            if (city.city === cityName) {
                return city.description;
            }
        }
        return "Description not found for this city.";
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
        return "Error loading city data."; // Or a more specific error message
    }
}

async function getCityLandmarks(cityName, jsonURL) {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cityData = await response.json();

        for (const city of cityData) {
            if (city.city === cityName) {
                return city.landmarks;
            }
        }
        return [];
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
        return []; // Return empty array to avoid errors
    }
}

async function displayCityInfo(cityName, jsonURL) {    
    const description = await getCityDescription(cityName, jsonURL); // Use await
    const landmarks = await getCityLandmarks(cityName, jsonURL);     // Use await

    document.getElementById("city-description").textContent = description;

    const landmarksContainer = document.getElementById("landmarks-container");
    landmarksContainer.innerHTML = "";

    if (landmarks.length === 0) {
        landmarksContainer.textContent = "No landmarks found for this city.";
    } else {
        landmarks.forEach(landmark => {
            const landmarkDiv = document.createElement("div");
            landmarkDiv.innerHTML = `
                <h3>${landmark.name}</h3>
                <p>${landmark.description}</p>
                ${landmark.src ? `<img src="${landmark.src}" alt="${landmark.name}">` : ''} <p>Author: ${landmark.author}</p>
                ${landmark.website ? `<a href="${landmark.website}" target="_blank">Website</a><br>` : ''}
                ${landmark.source_url ? `<a href="${landmark.source_url}" target="_blank">Source</a>` : ''}
            `;
            landmarksContainer.appendChild(landmarkDiv);
        });
    }
}

//displayCityInfo(cityName, jsonURL); // Call with the URL

// Event listener for hash changes:
window.addEventListener('hashchange', function() {
    const cityHash = window.location.hash;
    if (cityHash) {
        const cityName = cityHash.substring(1);
        displayCityInfo(cityName, jsonURL); // Pass the URL here as well
    }
});

// Event listener for initial page load
window.addEventListener('load', function() {
    console.log(`cityvista page loaded. starting js...`);
    const cityHash = window.location.hash;
    if (cityHash) {
        const cityName = cityHash.substring(1);        
        console.log(`displaying city info for ${cityName}`);
        //displayCityInfo(cityName, jsonURL); // Pass the URL here as well
    }
    else {
        console.log(`error parsing cityHash : ${cityHash}`);
    }
});

  window.addEventListener('load', displayCityInfo);
  //window.addEventListener('hashchange', displayCityInfo);

  /*
  async and await: The getCityDescription, getCityLandmarks, and displayCityInfo functions are now async.  
  Inside these functions, await fetch(jsonURL) is used to fetch the JSON data.  await response.json() is used to parse the response as JSON.  
  await pauses the execution of the function until the promise resolves (the data is fetched). This is essential for working with asynchronous operations like fetching data.

   jsonURL Parameter: The jsonURL is now passed as a parameter to the functions. This makes the functions reusable for different JSON file locations.

   Error Handling with try...catch:  The fetch and response.json() calls are wrapped in try...catch blocks.  This handles potential errors during the fetch or parsing process.  If an error occurs, a message is logged to the console, and a default value (e.g., "Error loading city data." or []) is returned.  This prevents your script from crashing.

   Conditional Rendering of Image and Links: The code now conditionally renders the image and links for the website and source URL. It checks if landmark.src, landmark.website, and landmark.source_url exist before adding the corresponding HTML elements. This prevents errors if a landmark doesn't have these properties.

Calling displayCityInfo with jsonURL:  The displayCityInfo function is now called with the jsonURL so that the correct URL is passed to the fetch functions.  This also applies to the event listeners.

How to Use:

Replace Placeholder URL: Replace "your_json_file_url.json" with the actual URL of your JSON file.
Include the Script: Place this JavaScript code in your HTML file (preferably just before the closing </body> tag) or in a separate .js file that you include in your HTML.
HTML Structure: Make sure you have elements in your HTML with the IDs city-description and landmarks-container.
Call displayCityInfo: The example code shows how to call displayCityInfo when the page loads and when the URL hash changes. You can adapt this to your specific needs. Make sure you pass the jsonURL to the function.
Now, your code will fetch the JSON data from the specified URL, handle errors gracefully, and display the city information correctly.  Remember that the JSON file needs to be accessible from the client's browser (CORS may be a factor if it's on a different domain).
 */