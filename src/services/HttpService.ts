import axios from "axios";

class HttpService {
  async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}

export default new HttpService();