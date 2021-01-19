const {
    MessageEmbed
} = require('discord.js');
const {
    cooldown
} = require('../../config.json');

module.exports = {
    name: 'wtb',
    cooldown: cooldown,
    description: "Want to buy",
    async execute(message, args, client) {

        let embed = new MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL())
            .setTitle('__WTB: ' + message.author.tag+ '__\n=====================================================')
            .setFooter(`by ${message.author.id} | Dm for more info`, client.user.displayAvatarURL())
            .setTimestamp()
        try {
            message.author.send(new MessageEmbed().setTitle('Wanna buy ?')
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
                                                                }


                                                                await message.author.send(new MessageEmbed()
                                                                    .setTimestamp()
                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                    .setTitle('Bulk ?')
                                                                    .setDescription('🟢 Yes\n🔴 No')
                                                                ).then(async firstQuestion => {
                                                                    await firstQuestion.react('🟢')

                                                                    await firstQuestion.react('🔴')


                                                                    firstQuestion.awaitReactions(filterr, {
                                                                            time: 60000,
                                                                            max: 1
                                                                        })
                                                                        .then(collected1 => {
                                                                            if (!collected1.first()) return message.author.send('Time expired, please restart.')
                                                                            switch (collected1.first().emoji.name) {
                                                                                case '🟢':
                                                                                    answers.push('Yes')

                                                                                    break;

                                                                                case '🔴':
                                                                                    answers.push('No')

                                                                                    break;
                                                                                default:
                                                                                    return message.author.send('Wrong reaction, please restart.')

                                                                            }
                                                                            //============================================================================================================

                                                                            message.author.send(new MessageEmbed()
                                                                                .setTimestamp()
                                                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                .setTitle('Firm price ?')
                                                                                .setDescription('🟢 Yes\n🔴 No')
                                                                            ).then(async secondQuestion => {
                                                                                await secondQuestion.react('🟢')

                                                                                await secondQuestion.react('🔴')


                                                                                secondQuestion.awaitReactions(filterr, {
                                                                                        time: 60000,
                                                                                        max: 1
                                                                                    })
                                                                                    .then(collected2 => {
                                                                                        if (!collected2.first()) return message.author.send('Time expired, please restart.')
                                                                                        switch (collected2.first().emoji.name) {
                                                                                            case '🟢':
                                                                                                answers.push('Yes')

                                                                                                break;

                                                                                            case '🔴':
                                                                                                answers.push('No')

                                                                                                break;
                                                                                            default:
                                                                                                return message.author.send('Wrong reaction, please restart.')

                                                                                        }

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




                                                                                                                await message.author.send(new MessageEmbed()
                                                                                                                    .setTimestamp()
                                                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                    .setTitle('How many products do you want to buy (1 to 3) ?')).then(async () => {
                                                                                                                    message.author.dmChannel.awaitMessages(filter, {
                                                                                                                            max: 1,
                                                                                                                            time: 60000,
                                                                                                                            errors: ['time']
                                                                                                                        })
                                                                                                                        .then(async productqty => {
                                                                                                                            switch (productqty.first().content) {
                                                                                                                                case '1':
                                                                                                                                    qty = '1'

                                                                                                                                    break;

                                                                                                                                case '2':
                                                                                                                                    qty = '2'

                                                                                                                                    break;
                                                                                                                                case '3':
                                                                                                                                    qty = '3'

                                                                                                                                    break;

                                                                                                                               
                                                                                                                                default:
                                                                                                                                    return message.author.send('Please select a number between 1-3')
                                                                                                                            }




                                                                                                                            //                          //
                                                                                                                            //      PRODUCT LOOP        //
                                                                                                                            //                          //                                                                                            
                                                                                                                            for (let i = 0; i < qty; i++) {
                                                                                                                                await message.author.send(new MessageEmbed()
                                                                                                                                    .setTimestamp()
                                                                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                    .setTitle('What is the name of the product you want.')).then(async () => {
                                                                                                                                        await  message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                            max: 1,
                                                                                                                                            time: 300000,
                                                                                                                                            errors: ['time']
                                                                                                                                        })
                                                                                                                                        .then(async productName => {
                                                                                                                                            answers.push(productName.first().content)

                                                                                                                                           await message.author.send(new MessageEmbed()
                                                                                                                                                .setTimestamp()
                                                                                                                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                .setTitle('Please send the description of the product you want.')).then(async () => {
                                                                                                                                                    await     message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                        max: 1,
                                                                                                                                                        time: 180000,
                                                                                                                                                        errors: ['time']
                                                                                                                                                    })
                                                                                                                                                    .then(async productDescription => {
                                                                                                                                                        answers.push(productDescription.first().content)
                                                                                                                                                        await  message.author.send(new MessageEmbed()
                                                                                                                                                            .setTimestamp()
                                                                                                                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                            .setTitle('Please send your US size.')).then(async () => {
                                                                                                                                                                await     message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                                    max: 1,
                                                                                                                                                                    time: 60000,
                                                                                                                                                                    errors: ['time']
                                                                                                                                                                })
                                                                                                                                                                .then(async size => {
                                                                                                                                                                    answers.push(size.first().content)
                                                                                                                                                                    await    message.author.send(new MessageEmbed()
                                                                                                                                                                        .setTimestamp()
                                                                                                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                                        .setTitle('Please send your buying conditions.')).then(async () => {
                                                                                                                                                                            await   message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                                                max: 1,
                                                                                                                                                                                time: 180000,
                                                                                                                                                                                errors: ['time']
                                                                                                                                                                            })
                                                                                                                                                                            .then(async buyingConditions => {
                                                                                                                                                                                answers.push(buyingConditions.first().content)
                                                                                                                                                                                await   message.author.send(new MessageEmbed()
                                                                                                                                                                                    .setTimestamp()
                                                                                                                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                                                    .setTitle('Please send the price you want to buy the item at.')).then(async () => {
                                                                                                                                                                                        await    message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                                                            max: 1,
                                                                                                                                                                                            time: 60000,
                                                                                                                                                                                            errors: ['time']
                                                                                                                                                                                        })
                                                                                                                                                                                        .then(async priceProduct => {
                                                                                                                                                                                            answers.push(priceProduct.first().content)
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
                                                                                                                            .addField(':satellite_orbital: **Location:**',answers[0], true)
                                                                                                                            .addField('**:triangular_flag_on_post: Meet-Up :**',answers[1],true)
                                                                                                                            .addField('**:ninja: Refs :**',`[Click here](${answers[4]})`,true)
                                                                                                                            .addField('**:ferry: Bulk :**', answers[2], true)
                                                                                                                            .addField('**:coin: Firm :**',answers[3], true)
                                                                                                                            .addField('**:cactus: Shipping Fees :**', answers[5], true)
                                                                                                                            .setColor('ORANGE')
                                                                                                                            embed.addField('**---------------------------------------------------------------------------------------------**','\u200b', false)
                                                                                                                            let i = 6
                                                                                                                            for (let o = 0;o<qty;o++){
                                                                                                                                embed.addField(`:shopping_cart: **__Product ${o} : \"${answers[i]}\"__**`,answers[i+1], false)
                                                                                                                                i = i +2
                                                                                                                                embed.addField(':straight_ruler: Size US :',answers[i], true)
                                                                                                                                i = i + 1
                                                                                                                                embed.addField(':magic_wand: Condition :',answers[i],true)
                                                                                                                                i = i + 1
                                                                                                                                embed.addField(':moneybag: Price €/£ :', answers[i], true)
                                                                                                                                embed.addField('**---------------------------------------------------------------------------------------------**','\u200b', false)
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
                                                            })
                                                    })
                                                }





                                            )
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