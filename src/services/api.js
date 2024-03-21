import axios from "axios";
const BASE_URL = 'https://65faa4ea3909a9a65b1b0241.mockapi.io'
const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/coffe`)
    return response.data
}
export {getProducts}