import dotenv from 'dotenv';
dotenv.config();

const OPEN_DOTA_API_KEY: string = process.env.OPEN_DOTA_API_KEY;
const OPEN_DOTA_SERVER_URL: string = process.env.OPEN_DOTA_SERVER_URL;

export {
    OPEN_DOTA_API_KEY as API_KEY,
    OPEN_DOTA_SERVER_URL as SERVER_URL,
};
