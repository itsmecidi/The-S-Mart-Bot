const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: 'setup',
    description: "Setup for some systems ?",
    async execute(message, args, client) {
        if (message.member.hasPermission('MANAGE_GUILD') || message.author.id === '480692379913945099') {
            let embed = new MessageEmbed()
                .setColor('00ff00')
                .setFooter(`${client.config.bot_name} • Executed by ${message.author.username}`)
                .setTimestamp()
            let setupEmbed = new MessageEmbed()
            message.channel.send(
                setupEmbed
                .setAuthor(`${message.member.displayName} • Systems list`, message.author.avatarURL())
                .addField('Select a system to setup:', `\`🎭 reactionrole\` => Select a message, a role, and a reaction. A role will be added to every member who react.\n\n\`✅ channels\` => Choose a list of channels where commands will be allowed (this blacklists every other channels + admins are not affected).`)
                .setColor('2c2f33')
                .setFooter(`${client.config.bot_name} • Executed by ${message.author.username}`)
                .setTimestamp())

            let filter = m => m.author.id === message.author.id
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            }).then(collected => {

                if (collected.first().content === 'channels') {
                    message.channel.send('Please enter a list of channels separated with a space. You can mention a channel, or provide it\'s id.')
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                    }).then(async answer => {
                        let channels = await answer.first().content.split(' ')
                        let channelsID = [];

                        for (index = 0; index < channels.length; index++) {
                            var matches = channels[index].match(/(\d+)/); 
              
                            if (matches) { 
                            channelsID.push(matches[0])
                            }
                        }
                        console.log(channelsID)
                        try {
                            let fetchedChannelIDs = [];
                            for (index = 0; index < channelsID.length; index++) {
                                let fetched = await message.guild.channels.cache.get(channelsID[index])
                                console.log(fetched);
                        fetchedChannelIDs.push(fetched.id)
                     
                            }
                           await client.setup.set(message.guild.id, fetchedChannelIDs,'authorizedChannels')

                        }catch(err){
                            console.log(err)
                            message.reply('One or more IDs | mentions you provided are unvalid.') 
                            return;
                        }
                        message.channel.send('Channel(s) saved. Commands will be usable only in thoses channels (except admins).')

                    })


                }
               

                if (collected.first().content === 'reactionrole') {
                    const keyOwner = message.guild.id
                    message.channel.send(embed.setTitle("Please send a role name or ID.").setColor('00ff00'))
                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                    }).then(async rRole => {


                        let role = message.guild.roles.cache.find(r => r.name == rRole.first().content) || message.guild.roles.cache.get(rRole.first().content)
                        if (!role) {
                            message.channel.send(embed.setTitle('❌ **You must specify a role **name | ID**, restart the setup').setColor('ff0000'))
                            return;
                        }
                        message.channel.send(new MessageEmbed().setTitle('Please now send a channel ID with your message inside.').setColor('00ff00'))

                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 30000,
                            errors: ['time']
                        }).then(async reactionChannel => {
                            let channel = await message.guild.channels.cache.get(reactionChannel.first().content)

                            if (channel == undefined) return message.channel.send('Wrong ID provided.')
                            message.channel.send(new MessageEmbed().setTitle('Please now send a message ID in the channel you provided.').setColor('00ff00'))

                            message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                            }).then(async reactionMessage => {
                                let rMessage = reactionMessage.first().content;
                                let check;
                                try {
                                    check = await channel.messages.fetch(rMessage)
                                } catch {

                                }

                                if (check == undefined)

                                    return message.channel.send('Wrong message ID provided')


                                let awaitReaction = await message.channel.send(new MessageEmbed().setTitle('Please now react with an emoji.').setColor('00ff00'))
                                let filter1 = (reaction, user) => user.id === message.author.id;
                                let reactionTest;
                                awaitReaction.awaitReactions(filter1, {
                                        max: 1,
                                        time: 60000,
                                        errors: ['time']
                                    })
                                    .then(async collected => {
                                        const reaction = collected.first().emoji.name;

                                        let reactionName;
                                        if (collected.first().emoji.id) {
                                            const rID = collected.first().emoji.id
                                            reactionTest = await client.emojis.cache.find(emoji => emoji.id == rID)
                                            if (reactionTest == undefined)
                                                return message.channel.send('I don\'t have access to this emoji')
                                            else reactionName = rID

                                        } else reactionName = reaction

                                        if (client.setup.has(keyOwner, 'reactionrole')) {
                                            client.setup.set(keyOwner, {
                                                channel: channel.id,
                                                message: rMessage,
                                                role: role.id,
                                                emoji: reactionName
                                            }, `reactionrole.${rMessage}.${Date.now()}`)

                                        }
                                        else{
                                            let time = Date.now()
                                            if (client.setup.has(keyOwner, `reactionrole.${rMessage}`))
                                                client.setup.set(keyOwner, {
                                                    channel: channel.id,
                                                    message: rMessage,
                                                    role: role.id,
                                                    emoji: reactionName
                                                }, `reactionrole.${rMessage}.${time}`)

                                            else
                                                client.setup.set(keyOwner, {}, `reactionrole.${rMessage}`) && client.setup.set(keyOwner, {
                                                    channel: channel.id,
                                                    message: rMessage,
                                                    role: role.id,
                                                    emoji: reactionName
                                                }, `reactionrole.${rMessage}.${time}`)


                                        }
                                        message.channel.send(new MessageEmbed().setTitle('Your reaction role system has been set up.').setColor('GREEN'))
                                        console.log(reactionName)
                                        console.log(message.guild.emojis.cache.get(reactionName))
                                        if(reactionTest)
                                        await check.react(message.guild.emojis.cache.get(reactionName))
                                        else check.react(reactionName)
                                        console.log(client.setup)


                                    })


                            })
                        })
                    })


                    // message.channel.send(embed.setTitle(`You choose **${client.setup.get(keyOwner, 'joinrolename')} **for the role to assign.`))
                }   
              
             
            })
        } else {
            message.channel.send(client.embedPerm)
        }
    }
}