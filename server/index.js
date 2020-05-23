
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  const { id } = socket.client;
  console.log(`User Connected: ${id}`);

  socket.on("chat message", ({ nickname, msg, type, avatarImgSrc}) => {
    console.log(avatarImgSrc);
    io.emit("chat message", { nickname, msg, type: 'user' , avatarImgSrc});
    messageBot(msg);
  });

});

const messageBot = (msg) => {
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: msg,
          languageCode: 'en-US',
        },
      },
    };
    sessionClient
    .detectIntent(request)
    .then(responses => {
        console.log('Detected intent');
        const result = responses[0].queryResult;
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Response: ${result.fulfillmentText}`);
        if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
        } else {
            console.log(`  No intent matched.`);
        }
        io.emit("chat message", { nickname: 'Zoye Bot', msg: result.fulfillmentText , type: 'bot', avatarImgSrc: '/assets/bot_avatar.png'});
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
}

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));


const dialogflow = require("dialogflow");
const config = require("./config/keys");
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);