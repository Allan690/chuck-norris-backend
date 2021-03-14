import {fetchJoke, fetchJokeCategories} from './service';

interface IJokeArgs {
    category: string;
}

const fetchCategories = async (): Promise<void | string> => {
    return await fetchJokeCategories()
};

const fetchRandomJoke = async (parent: void, args: IJokeArgs): Promise<void | string> => {
    return await fetchJoke(args.category);
};

export { fetchCategories, fetchRandomJoke };

