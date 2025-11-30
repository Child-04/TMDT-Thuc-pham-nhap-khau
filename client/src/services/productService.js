import axios from "axios";
import { BASE_URL } from '../constants/UserConstant';

// Function to fetch paginated products from the route `/paginationClient/:page`
export const getProductPagination = async (
  page = 1,
  perPage = 4,
  searchQuery = ""
) => {
  try {
    // Call API using Axios to the new route
    const response = await axios.get(
      `${BASE_URL}/products/paginationClient/${page}`,
      {
        params: {
          perPage: perPage, // Send perPage as query parameter
          search: searchQuery, // Send search query as query parameter
        },
      }
    );

    // Log the pagination data
    console.log("Pagination Data:", response.data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any error that occurs during the API call
    console.error("Error fetching paginated products:", error);
    throw error;
  }
};

