import { makeMatchRequest } from './requests';
import { bundleSimpleMatchData } from './bundler';
import { makePlayerRequest } from './requests/player';

(async () => {
    const [id, res] = await makeMatchRequest('6962326145');
    console.log(id);

    const niceMatch = bundleSimpleMatchData(res);
    console.log(niceMatch);

    const [accountId, player] = await makePlayerRequest(136141238);
    console.log(accountId, player);
})();
