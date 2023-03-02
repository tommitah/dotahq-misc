import * as config from './utils/config';
import axios from 'axios';

const serverUrl = 'https://api.opendota.com/api/';
const key = config.API_KEY;

// no params for now
export const getMatchesById = async () => {
    const id = '6962326145';
    const options = {
        method: 'GET',
        url: serverUrl.concat(`matches/${id}?api_key=${key}`),
    };

    try {
        const res = await axios.request(options);
        const data = res.data;
        // fs.writeFileSync('asyncmatch.json', JSON.stringify(data));
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
