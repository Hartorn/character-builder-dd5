const bitballoon = require('bitballoon');
const secrets = require('./bitballoon-secret');

const client = bitballoon.createClient({ client_id: secrets.clientKey, client_secret: secrets.clientSecret });
client.authorizeFromCredentials(function authentificateCb(err, accessTokenParam) {
    if (err) {
        return console.log(err);
    }

    /* client.sites(function logSites(err, sites) {
         console.log('Sites:' + sites.map(item => console.log(item)));
     });*/
    bitballoon.deploy({ access_token: accessTokenParam, site_id: 'd9452aaa-ecaf-4605-93a5-eec17e9a548f', dir: './production' }, function deployCb(err, deploy) {
        if (err) {
            return console.log('Error deploying :', err);
        }
        console.log('New deploy is live:', deploy);
    });
});


