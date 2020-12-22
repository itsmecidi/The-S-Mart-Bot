const fs = require('fs');
const {
    MessageEmbed,
    Client,
    Collection,
    Intents
} = require('discord.js');

const config = require('./config.json');

const Enmap = require('enmap')
const Twitter = require('twit')
const client = new Client({
    ws: {
        intents: Intents.ALL
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
client.config = config
client.commands = new Collection();
Object.assign(client, Enmap.multi(["setup", "moderation", "points"]));

let isReply = (tweet)=> {
    if (tweet.retweeted_status
      || tweet.in_reply_to_status_id
      || tweet.in_reply_to_status_id_str
      || tweet.in_reply_to_user_id
      || tweet.in_reply_to_user_id_str
      || tweet.in_reply_to_screen_name) return true;
    return false;
  }
const twitterConf = { //complete this with your tokens, ids.
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
  }
const twitterClient = new Twitter(twitterConf);

const stream = twitterClient.stream('statuses/filter', {
  follow: client.config.twitter.twitterAccount, // @Every3Minutes, specify whichever Twitter ID you want to follow
});

stream.on('tweet', tweet => {
    if(isReply(tweet) == false) {
  const twitterMessage = `New tweet from @${tweet.user.screen_name}: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
  client.guilds.cache.get(client.config.twitter.guildID).channels.cache.get(client.config.twitter.channelID).send(twitterMessage)
  return false;
    }
    else return
});







client.embedMention = new MessageEmbed()
    .setTitle("❌ **Mention a member or specify an ID.**")
    .setColor('ff0000')
client.embedReason = new MessageEmbed()
    .setTitle("❌ **Please specify a reason for this actions**")
    .setColor('ff0000')
client.embedNoConfig = new MessageEmbed()
    .setTitle("❌ **This server never ran a setup before.**")
    .setColor('ff0000')
client.embedPerm = new MessageEmbed()
    .setTitle("❌ **You do not possess the permisions to do that.**")
    .setColor('ff0000')
client.embedNoRole = new MessageEmbed()
    .setTitle('❌ Wrong role name/id provided')
    .setColor('ff0000')

//!client.moderation.has(guildID, `punishments.${userID}.numberOfPunishment`)) {

client.addPunishment = async function (guildID, userID, action, reason, duration, author) {

    if (client.moderation.has(guildID) && client.moderation.has(guildID, `Count`)) {
        let ID = parseInt(client.moderation.get(guildID, 'Count')) + 1;
        const data2 = client.moderation.get(guildID)
        client.moderation.set(guildID, {
            ...data2,
            Count: ID
        })


        client.moderation.set(guildID, {

            Command: action,
            Reason: reason,
            author: author,
            banTime: Date.now(),
            PunishmentID: `${ID}`,
            Duration: duration


        }, `punishments.${userID}.X${ID}`)
    } else {
        const data = client.moderation.get(guildID)
        client.moderation.set(guildID, {
            ...data,
            Count: '1'
        })
        client.moderation.set(guildID, {
            Command: action,
            Reason: reason,
            author: author,
            banTime: Date.now(),
            PunishmentID: `1`,
            Duration: duration


        }, `punishments.${userID}.X1`)
    }

}
client.getPunishment = async function (guildID, userID, array, iterable) {
    let userInfractions = await client.moderation.get(guildID, `punishments.${userID}`)
    let namesArray = []
    let number = 0
    // console.log(Object.entries(userInfractions))
    for (const infraction of Object.keys(userInfractions)) {
        namesArray.push(infraction)
    }
    while (namesArray.length >= 1) {
        number++
        array.push(client.moderation.get(guildID, `punishments.${userID}.${namesArray[0]}.Command`))
        array.push(client.moderation.get(guildID, `punishments.${userID}.${namesArray[0]}.Reason`))
        array.push(client.moderation.get(guildID, `punishments.${userID}.${namesArray[0]}.author`))
        array.push(client.moderation.get(guildID, `punishments.${userID}.${namesArray[0]}.banTime`))
        array.push(client.moderation.get(guildID, `punishments.${userID}.${namesArray[0]}.PunishmentID`))
        array.push(client.moderation.get(guildID, `punishments.${userID}.${namesArray[0]}.Duration`))


        namesArray.shift()
    }


    iterable.push(number)

}
client.getOnePunishment = async function (guildID, userID, array, sanctionID) {

    array.push(client.moderation.get(guildID, `punishments.${userID}.X${sanctionID}.Command`))
    array.push(client.moderation.get(guildID, `punishments.${userID}.X${sanctionID}.Reason`))
    array.push(client.moderation.get(guildID, `punishments.${userID}.X${sanctionID}.author`))
    array.push(client.moderation.get(guildID, `punishments.${userID}.X${sanctionID}.banTime`))
    array.push(client.moderation.get(guildID, `punishments.${userID}.X${sanctionID}.PunishmentID`))
    array.push(client.moderation.get(guildID, `punishments.${userID}.X${sanctionID}.Duration`))

}



//                              //
//              EVENT           //
//                              // 

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(async file => {

        if (!file.endsWith(".js")) return;

        const event = await require(`./events/${file}`);

        let eventName = file.split(".")[0];

        client.on(eventName, event.bind(null, client));
    });
});



const commandFolders = fs.readdirSync('./commands').filter(folder => folder);

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {

        const command = require(`./commands/${folder}/${file}`)
        console.log(`[${folder}]Loaded module ${file}`)
        client.commands.set(command.name, command);
    }
}

client.on('warn', (e) => console.log(e));



process.on('unhandledRejection', error => {
    console.log(error.stack);
});

client.login(config.token);
