import dotenv from 'dotenv';
dotenv.config();

const OPEN_DOTA_API_KEY: string = process.env.OPEN_DOTA_API_KEY;

export {
    OPEN_DOTA_API_KEY as API_KEY,
};
