const API_ENDPOINT = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const fetchData = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.tickets;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
