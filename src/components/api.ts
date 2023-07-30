export const fetchItemFromAPI = async () => {
  try {
    const response = await fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
