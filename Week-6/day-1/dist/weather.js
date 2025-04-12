"use strict";
var _a;
const API_KEY = 'X54FZATHSVT32LGAGJRJXDJYX';
const API_URLS = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const WISHLIST_API = "http://localhost:3000";
// Elements
const elements = {
    searchInput: document.getElementById("Search"),
    searchForm: document.getElementById("searchForm"),
    cityName: document.querySelector("h2"),
    time: document.querySelector("p.text-6xl"),
    date: document.querySelector("p.text-lg"),
    temperature: document.querySelector(".text-4xl.font-bold"),
    feelsLike: document.querySelector(".text-4xl + p strong"),
    sunrise: document.getElementById("Sunrise"),
    sunset: document.getElementById("Sunset"),
    humidity: document.querySelector(".grid-cols-4 p:nth-child(2)"),
    windSpeed: document.querySelector(".grid-cols-4 p:nth-child(1)"),
    pressure: document.querySelector(".grid-cols-4 p:nth-child(3)"),
    uvIndex: document.querySelector(".grid-cols-4 p:nth-child(4)"),
    forecastList: document.querySelector("ul.space-y-2"),
    hourlyContainer: document.querySelector(".grid-cols-5"),
    heartIcon: document.getElementById("heart"),
    wishlistContainer: document.getElementById("wishlistContainer")
};
// Fetch Weather Data
// const fetchWeather = async (city: string): Promise<void> => {
//     try {
//         const res = await fetch(`${API_URLS}${city}?unitGroup=metric&key=${API_KEY}`);
//         if (!res.ok) throw new Error("Failed to fetch weather data"); 
//         const data: WeatherData = await res.json();  
//         console.log(data);
//         displayWeather(data);
//         displayHourlyWeather(data);
//     } catch (err) {
//         console.error("Error fetching weather:", err);
//     }
// };
// fetchWeather("odisha")
const fetchWeather = async (city) => {
    try {
        const url = `${API_URLS}${city}?unitGroup=metric&key=${API_KEY}`;
        console.log("Fetching:", url);
        const res = await fetch(url);
        console.log("Response:", res); // Debugging: Check status
        if (!res.ok) {
            throw new Error(`Failed to fetch weather data: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        console.log("Weather_Data:", data); // Debugging: Inspect API response
        displayWeather(data);
        displayHourlyWeather(data);
    }
    catch (err) {
        console.error("Error fetching weather:", err);
    }
};
// Display Weather Information
const displayWeather = (data) => {
    var _a, _b, _c, _d, _e, _f;
    // if (!data.days.length) return;
    if (!data)
        return;
    const today = data.days[0];
    elements.time.textContent = data.currentConditions.datetime.slice(0, 5).trim();
    // elements.date.textContent = `${today.datetime}`
    elements.date.textContent = `${today.datetime} ${new Date(today.datetime).toLocaleDateString('en-US', { weekday: 'long' })}`;
    elements.cityName.textContent = data.address || "Unknown Location";
    elements.temperature.textContent = `${today.temp}°C`;
    elements.feelsLike.textContent = `${today.feelslike}°C`;
    elements.sunrise.textContent = `🌅 Sunrise: ${(_a = today.sunrise) !== null && _a !== void 0 ? _a : 'N/A'}`;
    elements.sunset.textContent = `🌇 Sunset: ${(_b = today.sunset) !== null && _b !== void 0 ? _b : 'N/A'}`;
    elements.windSpeed.textContent = `💨 Wind Speed: ${(_c = today.windspeed) !== null && _c !== void 0 ? _c : 0} km/h`;
    elements.humidity.textContent = `💧 Humidity: ${(_d = today.humidity) !== null && _d !== void 0 ? _d : 0}%`;
    elements.pressure.textContent = `📈 Pressure: ${(_e = today.pressure) !== null && _e !== void 0 ? _e : 0} hPa`;
    elements.uvIndex.textContent = `🧴 UV Index: ${(_f = today.uvindex) !== null && _f !== void 0 ? _f : 0}`;
    elements.forecastList.innerHTML = data.days.slice(1, 6)
        .map(d => `<li>${getWeatherIcon(d.conditions)} ${d.temp}°C - ${formatDate(d.datetime)}</li>`)
        .join('');
};
// Display Hourly Forecast
const displayHourlyWeather = (data) => {
    if (!data.days || data.days.length === 0 || !data.days[0].hours) {
        console.error("No hourly data available:", data);
        return;
    }
    if (!elements.hourlyContainer) {
        console.error("hourlyContainer element not found!");
        return;
    }
    console.log("Hourly Data:", data.days[0].hours); // Debugging
    elements.hourlyContainer.innerHTML = data.days[0].hours.slice(0, 5).map(h => `<div class="p-4 rounded-lg text-center bg-gray-200">
            <p class="font-bold">${formatTime(h.datetime)}</p>
            <p>${getWeatherIcon(h.conditions)} ${h.temp}°C</p>
            <p>💨 ${h.windspeed} km/h</p>
        </div>`).join('');
};
// Utility Functions
const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' });
const formatTime = (timeStr) => new Date(`1970-01-01T${timeStr}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const getWeatherIcon = (condition) => condition.includes("Clear") ? "☀️" : condition.includes("Cloud") ? "🌥️" :
    condition.includes("Rain") ? "🌧️" : condition.includes("Snow") ? "🌨️" :
        condition.includes("Thunderstorm") ? "⛈️" : "⛅";
////////
// User Authentication Check
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (user && user.firstName) {
        const username = user.firstName;
        document.getElementById("dropdownButton").innerText = username.charAt(0).toUpperCase();
        document.getElementById("userName").innerText = username;
    }
    else {
        alert("User not logged in");
        window.location.href = "../public/login_singup.html";
    }
});
// Event Listeners
// Event Listener for Search Form
elements.searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = elements.searchInput.value.trim();
    // City name validation
    if (city.length < 2) {
        alert("Please enter a valid city name.");
        return;
    }
    // Fetch weather data
    fetchWeather(city);
});
///
(_a = elements.heartIcon) === null || _a === void 0 ? void 0 : _a.addEventListener("click", async () => {
    var _a;
    const city = (_a = elements.searchInput) === null || _a === void 0 ? void 0 : _a.value.trim();
    if (!city) {
        alert("Please enter a city name before adding to favorites.");
        return;
    }
    const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (!user || !user.id) {
        alert("User not logged in.");
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${user.id}`);
        if (!response.ok)
            throw new Error("Failed to fetch user data");
        const userData = await response.json();
        userData.favorites = userData.favorites || [];
        if (userData.favorites.includes(city)) {
            alert(`${city} is already in your favorites!`);
            return;
        }
        userData.favorites.push(city);
        await fetch(`http://localhost:3000/user/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ favorites: userData.favorites })
        });
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        alert(`${city} added to favorites!`);
    }
    catch (error) {
        console.error("Error adding favorite:", error);
        alert("Could not add favorite. Please try again.");
    }
});
// Load default city weather
// fetchWeather("mohali");
/////////////
document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    const wishlistContainer = document.getElementById("wishlistContainer");
    if (!wishlistContainer)
        return;
    wishlistContainer.innerHTML = ""; // Clear previous content
    if (user && user.favorites && user.favorites.length > 0) {
        user.favorites.forEach((city, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("flex", "justify-between", "items-center", "px-4", "py-2", "hover:bg-gray-100", "dark:hover:bg-gray-600", "dark:hover:text-white");
            listItem.innerHTML = `
                <span>${city}</span>
                <button class="text-red-500 hover:text-red-700" onclick="removeFavorite('${city}', ${index})">🗑</button>
            `;
            wishlistContainer.appendChild(listItem);
            // Show the wishlist container if it has items
            wishlistContainer.classList.remove("hidden");
        });
    }
    else {
        wishlistContainer.innerHTML = "<li class='px-4 py-2 text-gray-500 text-center'>No favorites added</li>";
        wishlistContainer.classList.remove("hidden");
    }
});
// Function to remove a city from favorites and update JSON Server
async function removeFavorite(city, index) {
    let user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (user && user.favorites) {
        user.favorites.splice(index, 1);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        // Send a PATCH request to update the user's favorite list in the JSON server
        try {
            const response = await fetch(`http://localhost:3000/user/${user.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ favorites: user.favorites })
            });
            if (!response.ok) {
                throw new Error("Failed to update favorites on server");
            }
            // Refresh the dropdown after successful server update
            document.dispatchEvent(new Event("DOMContentLoaded"));
        }
        catch (error) {
            console.error("Error updating favorites:", error);
            alert("Failed to update server. Please try again.");
        }
    }
}
////////
// Profile Dropdown (Fixed)
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
dropdownButton === null || dropdownButton === void 0 ? void 0 : dropdownButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event bubbling
    dropdownMenu.classList.toggle("hidden");
});
// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    const target = event.target;
    if (!dropdownButton.contains(target) && !dropdownMenu.contains(target)) {
        dropdownMenu.classList.add("hidden");
    }
});
// Fetch and Render Wishlist
// const fetchWishlist = async (): Promise<void> => {
//     try {
//         const res = await fetch(`${WISHLIST_API}/wishlist`);
//         if (!res.ok) throw new Error("Failed to fetch wishlist");
//         renderWishlist(await res.json());
//     } catch (err) {
//         console.error("Error fetching wishlist:", err);
//     }
// };
// // Update Wishlist (Add or Remove City)
// const updateWishlist = async (city: string, method: "POST" | "DELETE"): Promise<void> => {
//     try {
//         // Fetch current wishlist first
//         const resGet = await fetch(`${WISHLIST_API}/wishlist`);
//         if (!resGet.ok) throw new Error("Failed to fetch wishlist");
//         const wishlist: string[] = await resGet.json();
//         // If adding, check if city is already in wishlist
//         if (method === "POST" && wishlist.includes(city)) {
//             alert(`${city} is already in your wishlist!`);
//             return; // Exit without adding duplicate
//         }
//         // Proceed with adding/removing city
//         const res = await fetch(`${WISHLIST_API}/wishlist`, {
//             method,
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ city })
//         });
//         if (!res.ok) throw new Error(`Failed to ${method === "POST" ? "add" : "remove"} city`);
//         alert(`${city} ${method === "POST" ? "added to" : "removed from"} Wishlist!`);
//         fetchWishlist(); // Refresh wishlist after updating
//     } catch (err) {
//         console.error(`Error updating wishlist:`, err);
//     }
// };
// // Render Wishlist
// const renderWishlist = (wishlist: { city: string }[]): void => {
//     elements.wishlistContainer.innerHTML = wishlist.map(item =>
//         `<div class="flex justify-between items-center p-2 border-b">
//             <span>${item.city}</span>
//             <button class="text-red-500 hover:text-red-700" onclick="updateWishlist('${item.city}', 'DELETE')">❌</button>
//         </div>`
//     ).join('');
// };
// // Add to Wishlist on Click
// elements.heartIcon.addEventListener("click", () => {
//     const city = elements.cityName.textContent?.trim();
//     if (city) updateWishlist(city, "POST");
// });
// // Load Wishlist on Page Load
// document.addEventListener("DOMContentLoaded", fetchWishlist);
// // Utility Functions
// const formatDate = (dateStr: string): string => new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' });
// const formatTime = (timeStr: string): string => new Date(`1970-01-01T${timeStr}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// const getWeatherIcon = (condition: string): string => condition.includes("Clear") ? "☀️" : condition.includes("Cloud") ? "🌥️" :
//     condition.includes("Rain") ? "🌧️" : condition.includes("Snow") ? "🌨️" :
//     condition.includes("Thunderstorm") ? "⛈️" : "⛅";
// // Event Listeners
// elements.searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const city = elements.searchInput.value.trim();
//     if (city) fetchWeather(city);
// });
// document.addEventListener("DOMContentLoaded", () => {
//     fetchWeather("New York");
//     fetchWishlist();
// });
// elements.heartIcon.addEventListener("click", () => {
//     const city = elements.cityName.textContent;
//     if (city) updateWishlist(city, "POST");
// });
// /////profile dropedown 
// const dropdownButton = document.getElementById("dropdownButton") as HTMLButtonElement;
// const dropdownMenu = document.getElementById("dropdownMenu") as HTMLDivElement;
// document.addEventListener("click", (event: MouseEvent) => {
//     const target = event.target as Node;
//     const isClickInside = dropdownButton.contains(target) || dropdownMenu.contains(target);
//     dropdownMenu.classList.toggle("hidden", !isClickInside);
// });
