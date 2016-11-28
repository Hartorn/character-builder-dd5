const bitballoon = require('bitballoon');
const secrets = require('./bitballoon-secret');

const client = bitballoon.createClient({ client_id: secrets.clientKey, client_secret: secrets.clientSecret });
client.authorizeFromCredentials(function authentificateCb(err, accessTokenParam) {
    if (err) {
        return console.log(err);
    }
    console.log('Access token:' + accessTokenParam);
    bitballoon.deploy({ access_token: accessTokenParam, site_id: 'character-builder-dd5', dir: './production' }, function deployCb(err, deploy) {
        if (err) {
            return console.log('Error deploying :', err);
        }
        console.log('New deploy is live:', deploy);
    });
    // Client is now ready to do requests
    // You can store the access_token to avoid authorizing in the future
});


