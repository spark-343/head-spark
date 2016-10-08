import * from "twitter"
import * as dotenv from "dotenv";

dotenv.config();

var consumer_key = process.env.TWITTER_CONSUMER_KEY || '';
var consumer_secret = process.env.TWITTER_CONSUMER_SECRET || '';
var access_token_key = process.env.TWITTER_ACESS_TOKEN_KEY || '';
var access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET || '';

console.log(consumer_key);
console.log(consumer_secret);
console.log(access_token_key);
console.log(access_token_secret);


var client = new twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
})

var stream = client.stream('statuses/filter', {track: 'javascript'});

stream.on('data', function(event) {
    console.log(event && event.text);
});

stream.on('error', function(error) {
    throw error;
});
