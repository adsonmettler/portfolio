// JavaScript function to get the current year
// Author: Adson Mettler do Nascimento

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// To update the copyright year in the footer
document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
        yearSpan.textContent = getCurrentYear();
    }
});

// Function to get the last modified date of the document
document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;

    // Update the second paragraph in the footer with the last modified date
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});

// HAMBURGER MENU function
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('nav .navigation');

    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
});

// OBJECTS Filtered MENU function
document.addEventListener('DOMContentLoaded', () => {
    const trips = [
        {
            name: "Banff Route",
            location: "Banff, Alberta",
            itinerary: "3 days",
            description: "Explore the stunning landscapes of Banff National Park.",
            details: [
                { day: "Day 1", description: "Arrival and Exploration" },
                { day: "Day 2", description: "Adventure and Relaxation" },
                { day: "Day 3", description: "Scenic Drives and Wildlife Watching" }
            ],
            accommodations: [
                { name: "Banff Park Lodge", description: "Centrally located" },
                { name: "Banff International Hostel", description: "For budget travelers" },
                { name: "Buffalo Mountain Lodge", description: "Located on Tunnel Mountain" }
            ],
            image: "images/banff-lake-2-2x3.webp",
            type: "outdoor"
        },
        {
            name: "Vancouver Route",
            location: "Vancouver, British Columbia",
            itinerary: "4 days",
            description: "Where urban sophistication meets outdoor adventure!",
            details: [
                { day: "Day 1", description: "Urban Exploration and Waterfront Views" },
                { day: "Day 2", description: "Nature and Culture" },
                { day: "Day 3", description: "Local Flavors and Scenic Views" },
                { day: "Day 4", description: "Day Trip to Whistler" }
            ],
            accommodations: [
                { name: "Fairmont Pacific Rim", description: "Stunning waterfront views" },
                { name: "The Burrard", description: "Trendy, retro-chic design" },
                { name: "HI Vancouver Downtown Hostel", description: "Budget-friendly" }
            ],
            image: "images/vancouver-1-2x3.webp",
            type: "indoor"
        },
        {
            name: "Toronto Route",
            location: "Toronto, Ontario",
            itinerary: "4 days",
            description: "Vibrant city life.",
            details: [
                { day: "Day 1", description: "City Landmarks and Entertainment" },
                { day: "Day 2", description: "Culture and History" },
                { day: "Day 3", description: "Nature and Science" },
                { day: "Day 4", description: "Shopping and Local Flavors" }
            ],
            accommodations: [
                { name: "Fairmont Royal York", description: "Elegant, historic ambiance" },
                { name: "Chelsea Hotel, Toronto", description: "Family-friendly" },
                { name: "The Rex Hotel Jazz & Blues Bar", description: "Affordable" }
            ],
            image: "images/toronto-cn-tower-2x3.webp",
            type: "indoor"
        },
        {
            name: "Niagara Falls Route",
            location: "Niagara, Ontario",
            itinerary: "4 days",
            description: "Where breathtaking natural wonders.",
            details: [
                { day: "Day 1", description: "Iconic Falls and Local Exploration" },
                { day: "Day 2", description: "Adventure and Nature" },
                { day: "Day 3", description: "Thrills and Scenic Views" }
            ],
            accommodations: [
                { name: "Marriott Fallsview Hotel & Spa", description: "Spectacular falls views" },
                { name: "DoubleTree Fallsview Resort & Spa by Hilton", description: "Comfortable" },
                { name: "Country Inn & Suites by Radisson", description: "Affordable" }
            ],
            image: "images/niagara-falls-1-card-2x3.webp",
            type: "outdoor"
        },
        {
            name: "Old Quebec Route",
            location: "Quebec City, Quebec",
            itinerary: "4 days",
            description: "Where history comes alive and every corner offers a new discovery!",
            details: [
                { day: "Day 1", description: "Arrival and Initial Exploration" },
                { day: "Day 2", description: "Historical and Cultural Sites" },
                { day: "Day 3", description: "Day Trip to Montreal" },
                { day: "Day 4", description: "Art and Leisure" }
            ],
            accommodations: [
                { name: "Fairmont Le Château Frontenac", description: "Breathtaking views of the St. Lawrence River" },
                { name: "Hotel Manoir Victoria", description: "Central location" }
            ],
            image: "images/old-quebec-2-card-2x3.webp",
            type: "indoor"
        },
        {
            name: "Bay of Fundy Route",
            location: "St. Andrews, New Brunswick",
            itinerary: "4 days",
            description: "Famous for having the highest tides in the world.",
            details: [
                { day: "Day 1", description: "Arrival and Exploration" },
                { day: "Day 2", description: "Tidal Adventures and Coastal Scenery" },
                { day: "Day 3", description: "Whale Watching and Outdoor Activities" }
            ],
            accommodations: [
                { name: "The Algonquin Resort St. Andrews by-the-Sea", description: "Top-notch amenities" },
                { name: "Digby Pines Golf Resort and Spa", description: "Located close to whale-watching tours" },
                { name: "Fundy Complex Dockside Suites", description: "Affordable, cozy accommodations" }
            ],
            image: "images/bay-of-fundy-card-2x3.webp",
            type: "outdoor"
        }
    ];

    const cardGrid = document.querySelector('.card-grid');

    function renderCards(trips) {
        cardGrid.innerHTML = ''; // Clear the existing cards

        trips.forEach(trip => {
            const cardContent = document.createElement('section');
            cardContent.classList.add('card-content');

            cardContent.innerHTML = `
                <div class="image">
                    <img src="${trip.image}" alt="${trip.name}" width="150">
                </div>
                <h2>${trip.name}</h2>
                <div class="text">
                    <h3>${trip.location}</h3>
                    <h4>${trip.description}</h4>
                    <h3>Itinerary: ${trip.itinerary}</h3>
                    ${trip.details.map(detail => `<p>✔ <span class="highlight">${detail.day}: </span>${detail.description}</p>`).join('')}
                    <h3>Accommodation Options</h3>
                    ${trip.accommodations.map(accommodation => `<p>📍 <span class="highlight">${accommodation.name}: </span>${accommodation.description}</p>`).join('')}
                </div>
                <div>
                    <a href="https://adsonmettler.github.io/wdd131/project/form.html" class="button-1">Start Booking</a>
                </div>
                <div>
                    <a href="https://adsonmettler.github.io/wdd131/project/trips.html" class="button-2">View More Trips</a>
                </div>
            `;

            cardGrid.appendChild(cardContent);
        });
    }

    renderCards(trips);

    // Filter functionality
    function filterTrips() {
        const provinceFilter = document.querySelector("#provinceFilter").value;
        const durationFilter = document.querySelector("#durationFilter").value;
        const typeFilter = document.querySelector("#typeFilter").value;

        const filteredTrips = trips.filter(trip => {
            const matchesProvince = provinceFilter === 'all' || trip.location.includes(provinceFilter);
            const matchesDuration = durationFilter === 'all' || (durationFilter === 'morethan3days' && parseInt(trip.itinerary) > 3);
            const matchesType = typeFilter === 'all' || trip.type === typeFilter;

            return matchesProvince && matchesDuration && matchesType;
        });

        renderCards(filteredTrips);
    }

    // Add event listeners to the filters
    document.querySelector("#provinceFilter").addEventListener("change", filterTrips);
    document.querySelector("#durationFilter").addEventListener("change", filterTrips);
    document.querySelector("#typeFilter").addEventListener("change", filterTrips);
});
