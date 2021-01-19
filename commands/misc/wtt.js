const {
    MessageEmbed
} = require('discord.js');
const {
    cooldown
} = require('../../config.json');

module.exports = {
    name: 'wtt',
    cooldown: cooldown,
    description: "Want to trade",
    async execute(message, args, client) {

        let embed = new MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL())
            .setTitle('__WTT: ' + message.author.tag + '__\n\n===================================================\n')
            .setFooter(`by ${message.author.id} | Dm for more info`, client.user.displayAvatarURL())
            .setTimestamp()
        try {
            message.author.send(new MessageEmbed().setTitle('Wanna trade ?')
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())

                .setDescription('I will ask you some questions, you have 60 seconds each time to answer. Just react to the corresponding reaction or give an answer (more time will be included when I ask text). Please wait for all the reactions to show up before reacting. If it\'s not working, try to re-react again.\nPlease react with 🟢 to start.')
            ).then(async startMessage => {



                startMessage.react('🟢')
                const collector = startMessage.createReactionCollector(

                    (reaction, user) => ['🟢'].includes(reaction.emoji.name) && user.id === message.author.id,

                    {
                        time: 60000
                    }
                )
                let answers = [];

                let channel;
                let city;
                let qty;
                collector.on('collect', async reaction => {

                    if (reaction.emoji.name === '🟢') {
                        const filter = (user) => user.author.id === message.author.id
                        const filterr = (reaction, user) => user.id === message.author.id
                        message.author.send(new MessageEmbed()
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.displayAvatarURL())
                            .setTitle('Please select a channel corresponding to your product.')
                            .setDescription('**Sneakers**\n<#797170482976784394> = 1\n<#797170634093232168> = 2\n<#797170557597646848> = 3\n<#795374898004230195> = 4\n<#795375038790238228> = 5\nSupreme\n<#796460312093130783> = 6\nClothes\n<#799346637309739030> = 7\n<#799346776360484964> = 8\n<#799348739260284938> = 9\n<#799346961324048455> = 10')).then(async () => {
                            message.author.dmChannel.awaitMessages(filter, {
                                    max: 1,
                                    time: 120000,
                                    errors: ['time']
                                })
                                .then(async channelchoice => {
                                    switch (channelchoice.first().content) {
                                        case '1':
                                            channel = '797170482976784394'

                                            break;

                                        case '2':
                                            channel = '797170634093232168'

                                            break;
                                        case '3':
                                            channel = '797170557597646848'

                                            break;

                                        case '4':
                                            channel = '795374898004230195'

                                            break;
                                        case '5':
                                            channel = '795375038790238228'

                                            break;

                                        case '6':
                                            channel = '796460312093130783'

                                            break;
                                        case '7':
                                            channel = '799346637309739030'

                                            break;

                                        case '8':
                                            channel = '799346776360484964'

                                            break;
                                        case '9':
                                            channel = '799348739260284938'

                                            break;

                                        case '10':
                                            channel = '799346961324048455'

                                            break;
                                        default:
                                            return message.author.send('Wrong number, please restart.')

                                    }







                                    await message.author.send(new MessageEmbed()
                                        .setTimestamp()
                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                        .setTitle('What country are you in ? ')).then(async () => {
                                        message.author.dmChannel.awaitMessages(filter, {
                                                max: 1,
                                                time: 300000,
                                                errors: ['time']
                                            })
                                            .then(async country => {
                                                answers.push(country.first().content)
                                                await message.author.send(new MessageEmbed()
                                                    .setTimestamp()
                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                    .setTitle('Do you want to specify your city ? (yes or no)')).then(async () => {
                                                    message.author.dmChannel.awaitMessages(filter, {
                                                            max: 1,
                                                            time: 300000,
                                                            errors: ['time']
                                                        })
                                                        .then(async cityOrNo => {
                                                            if (cityOrNo.first().content == 'yes') {
                                                                city = 'yes'
                                                                await message.author.send(new MessageEmbed()
                                                                    .setTimestamp()
                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                    .setTitle('Which city are you in ? ')).then(async () => {
                                                                    await message.author.dmChannel.awaitMessages(filter, {
                                                                            max: 1,
                                                                            time: 300000,
                                                                            errors: ['time']
                                                                        })
                                                                        .then(async city => {
                                                                            answers.push(city.first().content)
                                                                        })
                                                                })
                                                            } else answers.push('Not specified')




                                                            message.author.send(new MessageEmbed()
                                                                .setTimestamp()
                                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                .setTitle('Please send any link refered to your demand.')).then(() => {
                                                                message.author.dmChannel.awaitMessages(filter, {
                                                                        max: 1,
                                                                        time: 120000,
                                                                        errors: ['time']
                                                                    })
                                                                    .then(async twitter => {
                                                                        answers.push(twitter.first().content)
                                                                        message.author.send(new MessageEmbed()
                                                                            .setTimestamp()
                                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                            .setTitle('Please send the value of your shipping fees ?')).then(async () => {
                                                                            message.author.dmChannel.awaitMessages(filter, {
                                                                                    max: 1,
                                                                                    time: 60000,
                                                                                    errors: ['time']
                                                                                })
                                                                                .then(async fee => {
                                                                                    answers.push(fee.first().content)








                                                                                    //                          //
                                                                                    //      PRODUCT LOOP        //
                                                                                    //                          //                                                                                            
                                                                                    for (let i = 0; i < 1; i++) {
                                                                                        await message.author.send(new MessageEmbed()
                                                                                            .setTimestamp()
                                                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                            .setTitle('What is the name of your product.')).then(async () => {
                                                                                            await message.author.dmChannel.awaitMessages(filter, {
                                                                                                    max: 1,
                                                                                                    time: 300000,
                                                                                                    errors: ['time']
                                                                                                })
                                                                                                .then(async productName => {
                                                                                                    answers.push(productName.first().content)
                                                                                                    await message.author.send(new MessageEmbed()
                                                                                                        .setTimestamp()
                                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                        .setTitle('What is the name of the product you want ?')).then(async () => {
                                                                                                        await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                max: 1,
                                                                                                                time: 300000,
                                                                                                                errors: ['time']
                                                                                                            })
                                                                                                            .then(async trade => {
                                                                                                                answers.push(trade.first().content)

                                                                                                                await message.author.send(new MessageEmbed()
                                                                                                                    .setTimestamp()
                                                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                    .setTitle('Please send the description of the product you trade.')).then(async () => {
                                                                                                                    await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                            max: 1,
                                                                                                                            time: 180000,
                                                                                                                            errors: ['time']
                                                                                                                        })
                                                                                                                        .then(async productDescription => {
                                                                                                                            answers.push(productDescription.first().content)
                                                                                                                            await message.author.send(new MessageEmbed()
                                                                                                                                .setTimestamp()
                                                                                                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                .setTitle('Please send the US size of your product.')).then(async () => {
                                                                                                                                await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                        max: 1,
                                                                                                                                        time: 60000,
                                                                                                                                        errors: ['time']
                                                                                                                                    })
                                                                                                                                    .then(async size => {
                                                                                                                                        answers.push(size.first().content)
                                                                                                                                        await message.author.send(new MessageEmbed()
                                                                                                                                            .setTimestamp()
                                                                                                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                            .setTitle('Please send the US size of the product you want.')).then(async () => {
                                                                                                                                            await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                    max: 1,
                                                                                                                                                    time: 60000,
                                                                                                                                                    errors: ['time']
                                                                                                                                                })
                                                                                                                                                .then(async size1 => {
                                                                                                                                                    answers.push(size1.first().content)

                                                                                                                                                    await message.author.send(new MessageEmbed()
                                                                                                                                                        .setTimestamp()
                                                                                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                        .setTitle('Please tell me who will add who. Either \`None\`, \`Me\` or \`You\`')).then(async () => {
                                                                                                                                                        await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                                max: 1,
                                                                                                                                                                time: 60000,
                                                                                                                                                                errors: ['time']
                                                                                                                                                            })
                                                                                                                                                            .then(async whoadd => {
                                                                                                                                                                answers.push(whoadd.first().content)
                                                                                                                                                            })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                            })
                                                                                                                        })
                                                                                                                })
                                                                                                            })
                                                                                                    })
                                                                                                })
                                                                                        })














                                                                                    }
                                                                                    embed
                                                                                        .addField(':satellite_orbital: **Location:**', answers[0], true)
                                                                                        .addField('**:triangular_flag_on_post: Meet-Up :**', answers[1], true)
                                                                                        .addField('**:ninja: Refs :**', `[Click here](${answers[2]})`, true)

                                                                                        .addField('**:cactus: Shipping Fees :**', answers[3], true)
                                                                                        .setColor('ORANGE')
                                                                                    embed.addField('**---------------------------------------------------------------------------------------------**', '\u200b', false)
                                                                                    let i = 4
                                                                                    for (let o = 0; o < 1; o++) {
                                                                                        embed.addField(`**__:shopping_cart: Trade MY \"${answers[i]}\" for YOUR "user enter value"__**`, answers[i + 1], false)
                                                                                        i = i + 2
                                                                                        embed.addField(':straight_ruler: Size US :', answers[i], true)
                                                                                        i = i + 1
                                                                                        embed.addField(':magic_wand: Condition :', answers[i], true)
                                                                                        i = i + 1
                                                                                        embed.addField(':moneybag: Price €/£ :', answers[i], true)
                                                                                        embed.addField('**---------------------------------------------------------------------------------------------**', '\u200b', false)
                                                                                        i = i + 1
                                                                                    }
                                                                                   
                                                                                    client.channels.cache.get(channel).send(embed)

                                                                                    console.log(answers)
                                                                                })
                                                                                .catch(collected => {
                                                                                    message.author.dmChannel.send('Please restart, you took too long to answer (2 minutes)');
                                                                                });
                                                                        });
                                                                    })
                                                                    .catch(() => {
                                                                        message.author.dmChannel.send('Please restart, you took too long to answer (5 minutes)');
                                                                    });
                                                            });

                                                        })
                                                        .catch(collected => {
                                                            message.author.dmChannel.send('Please restart, you took too long to answer (5 minutes)');
                                                        });
                                                });




                                            })



                                    })



                                })


                        })






























                        //     🟢 🟠 🔴


                    } else {
                        message.author.send('Wrong reaction !').then(async msg => msg.delete({
                            timeout: 5000
                        }))
                    }

                })


            })




        } catch (err) {
            console.log(err)
            message.channel.send('I couldn\'t dm you, check your dm\'s settings.')
        }







    }
}