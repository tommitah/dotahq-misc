import { createRepository } from './repository';
import { bundleSimpleMatchData } from './bundler';

// import { writeFileSync } from 'fs';

// NOTE: This will be a module that is run once, and then forgotten about
// eg. there will be a manual script to run that updates the db with data from this module
// we could also have timestamps on when this was run and check against it when the app is run?
(async () => {
    // writeFileSync('player.json', JSON.stringify(player));

    const {getMatchData, getPlayerData} = createRepository();
    const [id, match] = await getMatchData(6962326145);
    const [accountId, player] = await getPlayerData(136141238);

    console.log(id, accountId);
    const niceMatch = bundleSimpleMatchData(match, player);
    console.log(niceMatch);

})();
