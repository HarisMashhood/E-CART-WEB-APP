import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-cart-44849/us-central1/api' //the API(cloud function)URL
});

export default instance;

// axios is very popular fetching api