import { AxiosRequestConfig } from 'axios';
import { requestAndParseMatch } from './requests';
import * as envConfig from './utils/config';

const defaultRequestConfig: AxiosRequestConfig = {
    baseURL: envConfig.SERVER_URL,
    params: {
        key: `api_key=${envConfig.API_KEY}`
    }
};

export const makeMatchRequest = (matchId: string) => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/matches/${matchId}`,
        method: 'GET'
    };

    return [matchId, requestAndParseMatch(matchRequestConfig)];
};

// Something like this to get a 'digest' or feed.
export const makeRecentMatchesRequest = (playerId: string) => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/players/${playerId}/recentMatches`,
        method: 'GET'
    };

    return [playerId, requestAndParseMatch(matchRequestConfig)];
};

makeMatchRequest('6962326145');
