const API_URL = "http://localhost:3000/api";

export const fetchLocations = async () => {
  try {
    const response = await fetch(`${API_URL}/locations`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return []; // Return an empty array on error
  }
};

export const fetchEventsByLocation = async (locationId) => {
  try {
    const response = await fetch(`${API_URL}/events/location/${locationId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching events for location ${locationId}:`, error);
    return []; // Return an empty array on error
  }
};
