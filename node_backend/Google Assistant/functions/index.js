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
  
  var requestOpts = {
    encoding: 'utf8',
    uri: `https://02dff249.ngrok.io/predict`,
    method: 'POST',
    json: true,
    body:    {
        query: conv.parameters.any
    }
};

  return rp(requestOpts)
    .then((res) => {
      conv.ask(res.data);
      conv.ask(new BrowseCarousel({
        items: [
          new BrowseCarouselItem({
            title: 'For better Information',
            url: 'https://d7c9ad9a.ngrok.io/customer/user1',
            description: 'Description of item 1',
            image: new Image({
              url: 'http://voidcanvas.com/wp-content/uploads/2018/01/react-easy-chart.png',
              alt: 'Image alternate text',
            }),
            footer: 'Item 1 footer',
          }),
          new BrowseCarouselItem({
            title: 'For Better Information',
            url: 'https://d7c9ad9a.ngrok.io/customer/user1',
            description: 'Description of item 2',
            image: new Image({
              url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
              alt: 'Image alternate text',
            }),
            footer: 'Item 2 footer',
          }),
        ],
      }));
      
       
     
    })
    .catch((res) => {
        return conv.ask("Sorry, you can ask something else.Ask anything ..... m listening to you.")
    });
});
 //conv.ask("mncncm  mc  ");





exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);