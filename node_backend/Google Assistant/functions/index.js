'use strict';

const {
  dialogflow,
  SimpleResponse,
  BasicCard,
  Button,
  Image,
  BrowseCarousel,
  BrowseCarouselItem,
  Suggestions,
  LinkOutSuggestion,
  MediaObject,
  Table,
  List,
  Carousel,
} = require('actions-on-google');
const functions = require('firebase-functions');
const app = dialogflow({debug: true});
const rp = require('request-promise');
const hostAPI = `http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe`;


app.intent('okay', (conv) => {
  
  return rp(hostAPI)
    .then((res) => {
      return conv.ask("api called");
    })
    .catch((res) => {
        return conv.ask("Sorry, you can ask something else.Ask anything ..... m listening to you.")
    });
});
 //conv.ask("mncncm  mc  ");





exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);