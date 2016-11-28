const bitballoon = require('bitballoon');

bitballoon.deploy({ access_token: process.env.BITBALLOON_ACCESS_TOKEN, site_id: 'd9452aaa-ecaf-4605-93a5-eec17e9a548f', dir: './production' }, function deployCb(err) {
    if (err) {
        return console.log('Error deploying');
    }
    console.log('New deploy is live');
});