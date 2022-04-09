import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'fc95307dc1mshc9066735c6674a6p1ec661jsn90dee75842b9'
        }
    });

    return data;
}