import { makeMatchRequest } from './requests';

(async () => {
    const [id, res] = await makeMatchRequest('6962326145');
    console.log(id, res);
})();
