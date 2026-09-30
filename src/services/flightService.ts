import HttpService from "./HttpService";
import type { FlightSearch } from "../types/Flight";

const FlightService = {
  search: async (request: FlightSearch) => {
    try {
      const data = await HttpService.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      return {
        request,
        data,
      };
    } catch (error) {
      console.error("Flight API error:", error);
      return null;
    }
  },
};

export default FlightService;