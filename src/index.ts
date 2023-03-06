import { makeMatchRequest } from './requests';
import { bundleSimpleMatchData } from './bundler';

(async () => {
    const [id, res] = await makeMatchRequest('6962326145');
    console.log(id);

    const niceMatch = bundleSimpleMatchData(res);
    console.log(niceMatch);
})();
