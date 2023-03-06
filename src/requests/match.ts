import axios, { AxiosRequestConfig } from 'axios';
import { RawMatch } from '../types';
import defaultRequestConfig from './config';

export const makeMatchRequest = async (
    matchId: string
): Promise<[string, RawMatch]> => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/matches/${matchId}`,
        method: 'GET',
    };

    try {
        const res = await axios.request(matchRequestConfig);
        return [matchId, res.data as RawMatch];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Something like this to get a 'digest' or feed.
export const makeRecentMatchesRequest = async (
    accountId: number | null
): Promise<[number | null, RawMatch[]]> => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/players/${accountId}/recentMatches`,
        method: 'GET',
    };

    try {
        const res = await axios.request(matchRequestConfig);
        // TODO: separate data type for this
        return [accountId, res.data as RawMatch[]];
    } catch (error) {
        console.error(error);
        throw error;
    }
};
