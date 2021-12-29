import axios from "axios/index";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchCountries = async function fetchData() {
    try {
        const response = await axios(`${apiUrl}/summary`);
        return response.data.Countries;
    } catch (error) {
        console.log(error);
    }
};