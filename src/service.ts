import axios from "./axiosConfig";

/**
 * fetch a random joke by category
 * @param category the joke category
 */
const fetchJoke = async (category: string): Promise<void | string> => {
    try {
        const response = await axios(`random?category=${category}`,
            { method: "get"});
        return response.data
    } catch(err) {
        console.error(err);
    }
};

/**
 * fetches joke categories
 */
const fetchJokeCategories = async (): Promise<void | string> =>  {
    try {
        const response = await axios(`/categories`, { method: "get"});
        return response.data;
    } catch(err) {
        console.error(err);
    }
};

export { fetchJoke, fetchJokeCategories }
