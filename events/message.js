const {Collection, MessageEmbed} = require('discord.js');
const cooldowns = new Collection();
const now = Date.now();
module.exports = async (client, message) => {

    if (!message.guild || !message.guild.me.hasPermission('SEND_MESSAGES') || message.author.bot) return;
    if (!client.setup.has(message.guild.id)) client.setup.set(message.guild.id, {
        guild: message.guild.id,
        prefix: '!'
    }) 
   else if (client.setup.has(message.guild.id, 'prefix')) client.setup.set(message.guild.id, {
        guild: message.guild.id,
        prefix: '!'
    }) 
    const prefix = await client.setup.get(message.guild.id, 'prefix') 
    if (!message.content.startsWith(prefix)) return;
    if(client.setup.has(message.guild.id, 'authorizedChannels')) {
        if(!message.member.hasPermission('ADMINISTRATOR')){
       let authorizedChannels = await client.setup.get(message.guild.id, 'authorizedChannels')
        if(!message.channel.id.includes(authorizedChannels)){
            let list = [];
            for(channel of authorizedChannels){
                let fetchedChan = await message.guild.channels.cache.get(channel)
                list.push(fetchedChan.name)
            }
            let authChannelEmbed = await new MessageEmbed().setTitle('Unauthorized action').setDescription('I can only be used in this/theses channel(s) :')
            for(chan of list){
                authChannelEmbed.addField(chan, '\u200b')
            }
          return await message.channel.send(authChannelEmbed).then(chan => chan.delete({timeout: 5000}));
        } 

    }
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
    }

    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            message.delete()
            const embed = new MessageEmbed()
                .setColor("#E74C3C")
                .setDescription(`❌ **Please avoid spamming commands,** (wait ${timeLeft.toFixed(1)} seconds)`)
            return message.channel.send({
                embed
            })

        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


    try {
        command.execute(message, args, client);
        console.log(`${message.guild} || ${message.author.tag} || command => '${command.name}'`)
    } catch (err) {
        console.log(err)
        //      message.channel.send(`❌ **Ooops!** Une erreur s'est produite lors de l'exécution de cette commande.\nLe problème a été signalé.`);
        message.channel.send(`⚠ Please try again later. The issue has been reported to the bot author.`).setFooter('Author : siimon#3519');
    }

}