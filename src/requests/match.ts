import axios, { AxiosRequestConfig } from 'axios';
import * as envConfig from '../utils/config';

const defaultRequestConfig: AxiosRequestConfig = {
    baseURL: envConfig.SERVER_URL,
    params: {
        key: `api_key=${envConfig.API_KEY}`
    }
};

const requestAndParseMatch = async (opts: AxiosRequestConfig) => {
    try {
        const res = await axios.request(opts);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const makeMatchRequest = async (matchId: string) => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/matches/${matchId}`,
        method: 'GET'
    };

    return [matchId, await requestAndParseMatch(matchRequestConfig)];
};

// Something like this to get a 'digest' or feed.
export const makeRecentMatchesRequest = async (playerId: string) => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/players/${playerId}/recentMatches`,
        method: 'GET'
    };

    return [playerId, await requestAndParseMatch(matchRequestConfig)];
};
