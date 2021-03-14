import axios from 'axios';

/**
 * axios base configuration
 */
const axiosConfig = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/"
});

export default axiosConfig;
