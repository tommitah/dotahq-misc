import { AxiosRequestConfig } from 'axios';
import * as matches from './matches/matches';
import * as envConfig from './utils/config';

// TODO: Depending on what this module will look like, it seems it might just be a wrapper for axios
// The request making itself looks rather straight forward, and we won't be running too many different
// requests, so most of the work here should be on 'content' and parsing the data.

// Wrapping this in an async function so we can use 'top-level await'.
// This should be a non-issue for the usage of the module(s).
(async () => {
    const id = '6962326145';
    // TODO: Looks like the requestConfig is the thing that would drive behaviour in
    // this module, so maybe it would be a good idea to have one handler for axios requests?
    // This would mean that the requestConfig has to also drive the behaviour on the backend side?
    // Or alternatively it can just return the data and we figure out what to do with the data on the server...
    const requestConfig: AxiosRequestConfig = {
        url: `/matches/${id}`,
        baseURL: envConfig.SERVER_URL,
        method: 'GET',
        params: {
            key: `api_key=${envConfig.API_KEY}`,
        },
    };

    await matches.getMatch(requestConfig);
})();
