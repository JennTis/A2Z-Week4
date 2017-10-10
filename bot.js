console.log('The bot is working');

let Twit = require('twit');
let config = require('./config.js');
let T = new Twit(config);

let stream = T.stream('user');


//When someone mentions me
stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
  // let fs = require('fs');
  // let json = JSON.stringify(eventMsg,null,2);
  // fs.writeFile("tweet.json", json);

  let reply_to = tweet.in_reply_to_screen_name;
  let txt = tweet.text;
  let name = tweet.user.screen_name;
  let id = tweet.id_str;

  // Chinese
  // Spanish
  // Hindi
  // Arabic
  // Portguese
  // Bengali/Bangla
  // Russian
  // Japanese
  // Punjabi

  let helloArray = [  "Nǐ hǎo",
                      "Hola",
                      "Namaste",
                      "Marhabaan",
                      "Olá",
                      "Hyālō",
                      "Zdravstvuyte",
                      "Kon'nichiwa",
                      "Sata srī akāla",
                      ]

  let byeArray = [    "Zàijiàn",
                      "Adiós",
                      "Alavida",
                      "Wadaeaan",
                      "Adeus",
                      "Bidāẏa",
                      "Proshchay",
                      "Sayōnara",
                      "Alavidā",
                      ]

  let goodArray = [   "Hǎo. Nǐ ne?",
                      "Bueno. ¿Y usted?",
                      "achchha. aur aap?",
                      "jayid. wa'ant aydaan?",
                      "Boa. E você?",
                      "Bhāla. Ēbaṁ tumi?",
                      "Khorosho. A ty?",
                      "Yoi. Anata mo?",
                      "Cagā. Atē tusīṁṁṁ?",
                      ]

  function chooseHello(helloArray) {
    return helloArray[Math.floor(Math.random() * helloArray.length)];
    }

  let hello = chooseHello(helloArray);

  function chooseBye(byeArray) {
    return byeArray[Math.floor(Math.random() * byeArray.length)];
    }

  let bye = chooseBye(byeArray);

    function chooseGood(goodArray) {
      return goodArray[Math.floor(Math.random() * goodArray.length)];
      }

  let good = chooseGood(goodArray);

  // if (txt.includes("there"))
  console.log(reply_to);
  console.log(txt);

  if ((reply_to === 'itpjenn')&&(txt.includes('hello'))) {
    // Get rid of the @ mention
    txt = txt.replace(/@itpjenn/g,'');
    let replyText = '@'+ name + ' ' + hello;

    // Post that tweet
    T.post('statuses/update', { status: replyText, in_reply_to_status_id: id}, tweeted);

    function tweeted(err, reply) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Tweeted: ' + reply.text);
      }
    }
  }
  if ((reply_to === 'itpjenn')&&(txt.includes('bye'))) {
    // Get rid of the @ mention
    txt = txt.replace(/@itpjenn/g,'');
    let replyText = '@'+ name + ' ' + bye;

    // Post that tweet
    T.post('statuses/update', { status: replyText, in_reply_to_status_id: id}, tweeted);

    function tweeted(err, reply) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Tweeted: ' + reply.text);
      }
    }
  }
  if ((reply_to === 'itpjenn')&&(txt.includes('how are you'))) {
    // Get rid of the @ mention
    txt = txt.replace(/@itpjenn/g,'');
    let replyText = '@'+ name + ' ' + good;

    // Post that tweet
    T.post('statuses/update', { status: replyText, in_reply_to_status_id: id}, tweeted);

    function tweeted(err, reply) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Tweeted: ' + reply.text);
      }
    }
  }
}
