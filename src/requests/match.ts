import axios, { AxiosRequestConfig } from 'axios';

// TODO: figure out if there are better ways of typing this if needed,
// 'object' strikes me as too general
const parseMatchData = (responseData: object) => {
    return responseData;
};

// TODO: return type should be custom data structure for match data
export const requestAndParseMatch = async (opts: AxiosRequestConfig) => {
    try {
        const res = await axios.request(opts);
        console.log(res.data);
        return parseMatchData(res.data);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
