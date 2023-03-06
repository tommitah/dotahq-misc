// TODO:
// This module should...
// 1. export function(s) that 'cleanup' the raw data from the api to a form that is more 'consumable'
// by the client application
// 2. define types that can also be utilized on the client/business logic -side if possible, check trpc for type safety here if possible!!!
// 3. Nice to have, but maybe perform some additional operations on the data (link up tables?, match up playerid's with names etc.)

// NOTE: This module might need to use the requests module for some checks as well,
// since some data isn't obvious or easy to reason about if no queries to the API are made.
// Alternatively we could do those deliberations on the side of 'business logic'?
// This would be a separate module for bundling data together from separate requests and storing it in db?

import {
    RawMatch,
    RawPlayer,
    SimpleMatch,
    SimplePlayer as MatchPlayer,
} from '../types';

// TODO: Go through which datapoints might be missing, might be a good idea to consider this
// Also IIRC player? checks if player exists rather than the field?
const toSimplePlayer = (player: RawPlayer): MatchPlayer => {
    return {
        account_id: player?.account_id,
        username: player?.personaname,
        hero_id: player?.hero_id,
        kills: player?.kills,
        kda: player?.kda,
    };
};

const createSimpleMatch = (
    match: Pick<
        RawMatch,
        'players' | 'radiant_win' | 'radiant_score' | 'dire_score'
    >
): SimpleMatch => {
    return {
        players: match.players.map(toSimplePlayer),
        radiant_win: match.radiant_win,
        radiant_score: match.radiant_score,
        dire_score: match.dire_score,
    };
};

// This will bundle data from 'Raw' formatted to 'Simple' and match some values to others in the API via requests
export const bundleSimpleMatchData = (rawMatchData: RawMatch): SimpleMatch => {
    const match = createSimpleMatch(rawMatchData);

    // TODO: query API for hero names by id, Check if you can get images for accounts and heroes somehow

    return match;
};
