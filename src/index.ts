import { getMatchesById } from './tester';

// Wrapping this in an async function so we can use 'top-level await'.
// This should be a non-issue for the usage of the module(s).
(async () => {
    const data = await getMatchesById();
    console.log(data);
})();
