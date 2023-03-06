import { makeMatchRequest } from './requests';
import { bundleMatchData } from './bundler';

(async () => {
    const [id, res] = await makeMatchRequest('6962326145');
    console.log(id);

    const niceMatch = bundleMatchData(res);
    console.log(niceMatch);
})();
