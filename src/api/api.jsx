import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3a86e3da3e452faa5b0083627dadb2c7';

export const fetchGetTranding = async () => {
    const params = {
        api_key: API_KEY,
        page: 1,
    };
    const { data } = await axios.get(`${baseURL}trending/movie/day`, { params });
    return data.results;
};

export const fetchSearchMovie = async query => {
    const params = {
        api_key: API_KEY,
        page: 1,
        query,
    };
    const { data } = await axios.get(`${baseURL}search/movie`, { params });
    return data.results.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
};

export const fetchMovieId = async movieId => {
    const params = {
        api_key: API_KEY,
        page: 1,
    };
    const { data } = await axios.get(`${baseURL}movie/${movieId}`, { params });
    return data;
};

export const fetchCast = async movieId => {
    const params = {
        api_key: API_KEY,
        page: 1,
        language: 'en-US',
    };
    
    try {
        const { data } = await axios.get(`${baseURL}movie/${movieId}/credits`, { params });
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const fetchReviews = async movieId => {
    const params = {
        api_key: API_KEY,
        page: 1,
        language: 'en-US',
    };
    const { data } = await axios.get(`${baseURL}movie/${movieId}/reviews`, { params });
    return data.results;
};
