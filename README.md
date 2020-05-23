# chatbot
type: cd server
run: npm install
run: export GOOGLE_APPLICATION_CREDENTIALS=./keys/zoey-bot.json
run node index.js

type: cd client
run npm install
run node index.js
run npm start
