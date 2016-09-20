import { RtmClient, RTM_EVENTS } from "@slack/client"
import * as dotenv from "dotenv";


dotenv.config();

var token = process.env.SLACK_API_TOKEN || '';

console.log(token)

var rtm = new RtmClient(token, {logLevel: 'error'});
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function(message) {

  var user = rtm.dataStore.getUserById(message.user)

  var dm = rtm.dataStore.getDMByName(user.name);

  console.log(user.name, message.text, dm.id);
  // rtm.sendMessage('Hello ' + user.name + '!', dm.id);
});
