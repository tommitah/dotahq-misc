import { AxiosRequestConfig } from 'axios';
import * as matches from './matches/matches';
import * as envConfig from './utils/config';


// Wrapping this in an async function so we can use 'top-level await'.
// This should be a non-issue for the usage of the module(s).
(async () => {
    const id = '6962326145';
    const requestConfig: AxiosRequestConfig = {
        url: `/matches/${id}`,
        baseURL: envConfig.SERVER_URL,
        method: 'GET',
        params: {
            key: `api_key=${envConfig.API_KEY}`
        }
    };

    await matches.getMatch(requestConfig);
})();
