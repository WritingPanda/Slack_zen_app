'use strict'

// starting to get the zendesk API going
var Zendesk = require('zendesk-node-api');

var zendesk = new Zendesk({
    url: "YOUR_ZENDESK_URL",
    email: "YOUR_ZENDESK_EMAIL",
    token: "YOUR_ZENDESK_API_TOKEN"
});

// Example
zendesk.objects.list(
    "URL params ex https://something.zendesk.com/api/v2/organization.json"
).then(function(result) {
    console.log(result);
});