import axios from "axios";
  
export async function fetchBreeds() {
    axios.defaults.headers.common["x-api-key"] = "live_wm7N8mFB6ZH4d1Ll7n20uHry4B7xBKH2F61cx7p51MQFCap4bJThG2mKrWpSmlID";
    const response = await axios
    .get(`https://api.thecatapi.com/v1/breeds`);
    return response.data;
}

export async function fetchCatByBreed(breedId) {
    const breedIdResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return breedIdResponse.data;
}