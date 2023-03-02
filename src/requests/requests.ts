import axios, { AxiosRequestConfig } from 'axios';
// something like this:
// import matchDataParser from './parser'

// TODO:complete the data structure for a single match
// ie. prune the data
// I'm not sure if this actually means anything during runtime though
// interface MatchData {
//     // here would come the data we want out
//     patch: number
// }

// no params for now
export const getMatch = async (opts: AxiosRequestConfig): Promise<void> => {
    try {
        const res = await axios.request(opts);
        // TODO: here we could use the 'parser' that gets the relevant stuff out?

        // TODO: instead of returning data, we could integrate this with the db.
        // like hooks to db operations here
        console.log(res.data);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
