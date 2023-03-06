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

import { RawMatch, SimpleMatch } from '../types';

export const parseSingleMatch = (rawMatchData: RawMatch): SimpleMatch => {
    return rawMatchData as SimpleMatch;
};
