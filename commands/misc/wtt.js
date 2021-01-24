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
            .setTitle(':recycle: __**WTT WTT WTT**__ :recycle:')
            .setFooter(`by ${message.author.id} | Powered by The S-Mart`, client.user.displayAvatarURL())
            .setDescription('** ** ** **')
            .setTimestamp()
        try {
            message.author.send(new MessageEmbed().setTitle('Wanna trade ?')
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .addField(' __**How does it work ?**__', '<:Arrow:778967880230109185> Please **answer** or **react** to **all questions** to create the post.\n<:Bot1:779069769856057384> **The bot will now ask you some details about your post !!!**', false)
                .addField('__**Careful ?**__', '<:Warning:778967970394406932> **You have 90 secs to answer each question !!!**', false)
                .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Remember that, **the more details** you provide to your post, **the better are** your chances to sell/buy/trade your product(s) !!!\n** ** ** **\n** ** ** **', false)
                .addField('Please react with :recycle: to start !!!', '** ** ** **', false)
                .setDescription('<a:Hi:792339295238094859> Hi, thank you for creating a post with The S-Mart !!!\nNeed some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!\n** ** ** **'))
            ).then(async startMessage => {



                startMessage.react(':recycle:')
                const collector = startMessage.createReactionCollector(

                    (reaction, user) => [':recycle: '].includes(reaction.emoji.name) && user.id === message.author.id,

                    {
                        time: 90000
                    }
                )
                let answers = [];

                let channel;
                let city;
                let qty;
                collector.on('collect', async reaction => {

                    if (reaction.emoji.name === ':recycle:') {
                        const filter = (user) => user.author.id === message.author.id
                        const filterr = (reaction, user) => user.id === message.author.id
                        message.author.send(new MessageEmbed()
                            .setTimestamp()
                            .setFooter(client.user.username, client.user.displayAvatarURL())
                            .setTitle(':pushpin: __**Please Select a Channel(s) for your Post :**__')
                            .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **select** the **channel(s)** where your post will be publish !!\n<:Arrow:778967880230109185> You can select **up to 3** channels in the list down below !!\n<:Arrow:778967880230109185> If you select **more then one** channel, separate each number with a space !!!\n<:example:801551839703072768> *For example, you can enter : `1 or 1 8 or 1 8 9 …`*',false)
                            .addField('__**Careful :**__', '<:Warning:778967970394406932> Please select the **appropriate** channel for your post !!\n:no_entry_sign: *No clothes in Sneakers Deli !!!*', false)
                            .addField('--------------------------------------------------------------------------------------------------','** ** ** **',false)
                            .addField('__**Fresh Drop Grocery 🍉**__', 'Soon', true)
                            .addField('__**Sneakers Deli 🍔**__', '1. <#797170482976784394>\n2.<#797170634093232168>\n3. <#797170557597646848>\n4. <#795374898004230195>\n5. <#795375038790238228>', true)
                            .addField('__**Supreme-Eleven 🏪**__', '6. <#796460312093130783>', true)
                            .addField('__**Clothes Gourmet\'s 🍸**__', '7. <#799346637309739030>\n8. <#799346776360484964>\n9. <#799348739260284938>\n10. <#799346961324048455>', true)
                            .addField('__**General-Store 🛒**__', '11. <#801466168233295882>', true)
                            .setAuthor('Step 1 :')
                            .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!!\n** ** ** **')
                           ).then(async () => {
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
                                        case '11':
                                            channel = '801466168233295882'

                                            break;
                                        default:
                                            return message.author.send('Oopsie... You entered a wrong number, Please restart with a number in the list !!!')

                                    }







                                    await message.author.send(new MessageEmbed()
                                        .setTimestamp()
                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                        .setTitle(':flag_eu: __**What is your Location ?**__')
                                        .setAuthor('Step 2 :')
                                        .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **select** your **location** in the following list :\n<:Arrow:778967880230109185> Your location **informs** other users that you **might** be **close to them** <a:pepelaser:802479990183952384> !!!\n<:example:801551839703072768> *For example, you can enter : `1 or 2 or 3 …`*',false)
                                        .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Location **increase** the chance of **possible Meet-Ups**, and **saves** some fees :wink:\n<a:Verified1:778656791332257813> Your post will **also** automatically be **posted** in #Close to me 🔍 !!!',false)
                                        .addField('--------------------------------------------------------------------------------------------------','** ** ** **', false)
                                        .addField('**1. France :**',':croissant::french_bread:<:tour:779053983104761896>', true)
                                        .addField('**2. Germany :**',':beer:', true)
                                        .addField('**3. U.K. :**',':cooking::bacon:', true) 
                                        .addField('**4. Italy :**',':pizza:', true) 
                                        .addField('**5. Netherlands :**',':potted_plant:', true)
                                        .addField('**6. Belgium :**',':fries:', true) 
                                        .addField('**7. Spain :**','<:paella:801043960918179860>', true)
                                        .addField('**8. Portugal :**',':beach:', true) 
                                        .addField('**9. Ireland :**','<:Leprechaun:801048914665013278>', true)
                                        .addField('**10. Switzerland :**',':cheese:<:fondu:779055906519646238>',true)
                                        .addField('**11. Norway :**',':mountain_snow::evergreen_tree:',true)
                                        .addField('**12. Sweden :**','<:viking:801042386658525214>',true)
                                        .addField('**13. Danmark :**','<:bike:801048914639061002>',true)
                                        .addField('**14. Poland :**',':nesting_dolls:',true)
                                        .addField('**15. Romania :**',':vampire:',true)                        
                                       .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                     ).then(async () => {
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
                                                    .setAuthor('Step 3 :')
                                                    .addField('__**Do you accept Meet-Up ?**__','<:Check:778698838521282612> Yes sir, I do !!!\n<:x_:778698838898507806> Nop, shipping only !!', false)
                                                    .addField('__**Hol\'Up Cowboy :**__','<a:Verified1:778656791332257813> We highly **recommend** that you specify your city for **potential Meet-Ups** to **increase** your chance of buying !!!', false)
                                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                    .setTitle(':city_dusk: __**Do you want to Specify your City ?**__')).then(async () => {
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
                                                                    .setAuthor('Step 3 :')
                                                                    .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** your **city** or **nearest city** :\n<:Arrow:778967880230109185> All other users **will be able** to see in which city you prefer to Meet-Up <a:party:795264786849595422>\n<:example:801551839703072768> *For example, you can enter : `Paris`/`Paris 4eme …`*', false)
                                                                    .addField('__**Notes :**__','<a:Verified1:778656791332257813> If you live in a small place, we **recommend** you enter the **nearest** big city !!\n<a:Verified1:778656791332257813> The **bigger** is your city, the **higher** are your chances of meeting-up :wink:',false)
                                                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                    .setTitle(':cityscape: __**Where do you want to Meet-Up ?**__')).then(async () => {
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
                                                                .setAuthor('Step 4 :')
                                                                .addField('__**Do you have References ?**__','<:Check:778698838521282612> Hell Yeah !!!\n<:x_:778698838898507806> Nah, but soon !!!', false)
                                                                .addField('__**One Sec Fam :**__','<a:Verified1:778656791332257813> We highly **suggest** that you to **take the time** to copy your link :wink:\n<a:Verified1:778656791332257813> **References** tremendously **increase the seriousness** of your post and will **boost** your chance of buying, **don\'t sleep on it** !!!', false)
                                                                .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                .setTitle('<:Refs:780745476387110913> __**Do you have References ?**__')).then(() => {
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
                                                                             .setAuthor('Step 5 :')
                                                                            .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **enter** the amount of fees you are ready to pay !!!\n<:Arrow:778967880230109185> If you want the **other part** to pay for the fees, you can enter `Seller` !!\n<:Arrow:778967880230109185> If your price **include** the shipping fees you can enter `Include` !!\n<:icons8idee480:801551839703072768> *For example, you can enter : `10€/Fr, 16€/EU or Include or Seller …\`*', false)
                                                                            .addField('__**Careful :**__','<:Warning:778967970394406932> Fees are **only** in Euros **€** :euro: or Pounds **£** :pound: !!!\n<:Warning:778967970394406932> Don’t forget to **specify** your **currency** :globe_with_meridians: !!!', false)
                                                                            .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                            .setTitle(':package: __**How much Shipping Fees ?**__')).then(async () => {
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
                                                                                            .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **only enter** the **name** of the product you have !!!\n<:example:801551839703072768> *For example, you can enter : \`Box Logo Hoodie …`*', false)
                                                                                            .addField('__**Careful :**__','<:Warning:778967970394406932> Your **post title** will be : Trade MY `my product` for YOUR `product wanted` !!!', false)
                                                                                            .addField('__**Tips :**__', '<a:Verified1:778656791332257813> Try to be **concise**, **precise** and **clear** for all users !!!\n<a:Verified1:778656791332257813> Don\'t be to specific, leave some for the description :wink:', false)
                                                                                            .setDescription('** ** ** **')
                                                                                            .setAuthor(`Product ${i+1} :`)
                                                                                            .setTitle(':pushpin: __**What is the Name of the Product you Have ?**__')).then(async () => {
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
                                                                                                        .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **only enter** the **name** of the product you want !!!\n<:example:801551839703072768> *For example, you can enter : \`Box Logo Hoodie …`*', false)
                                                                                                        .addField('__**Careful :**__','<:Warning:778967970394406932> Your **post title** will be : Trade MY `my product` for YOUR `product wanted` !!!', false)
                                                                                                        .addField('__**Tips :**__', '<a:Verified1:778656791332257813> Try to be **concise**, **precise** and **clear** for all users !!!\n<a:Verified1:778656791332257813> Don\'t be to specific, leave some for the description :wink:', false)
                                                                                                        .setDescription('** ** ** **')
                                                                                                        .setAuthor(`Product ${i+1} :`)
                                                                                                        .setTitle(':pushpin: __**What is the Name of the Product you Want ?**__')).then(async () => {
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
                                                                                                                    .setAuthor(`Product ${i+1} :`)
                                                                                                                    .setDescription('** ** ** **')
                                                                                                                    .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **describe** your trade !!!\n<:Arrow:778967880230109185> Specify the **color** !!!\n<:Arrow:778967880230109185> Don\'t forget to mention **all** the **details** of your trade !!!\n<:example:801551839703072768> *For example, you can enter : \`Trade my Black bogo, size M for your size L …\`*`, false)
                                                                                                                    .addField('__**Tips :**__','<a:Verified1:778656791332257813> Name **all details** that the other part **need to know** about your product !!!\n<a:Verified1:778656791332257813> Try to be **concise**, precise and clear for all users !!!', false)
                                                                                                                    .setTitle(':pencil: __**Describe your Trade :**__')).then(async () => {
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
                                                                                                                                .setAuthor(`Product ${i+1} :`)
                                                                                                                                .setDescription('** ** ** **')
                                                                                                                                .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** **your** size :\n<:example:801551839703072768> *For example, you can enter : `Size M or 9 …`*', false)
                                                                                                                                .addField('__**Careful :**__', '<:Warning:778967970394406932> Shoe sizes are **only** in US size', false)
                                                                                                                                .setTitle(':straight_ruler: __** What Size(s) you Have ?**__')).then(async () => {
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
                                                                                                                                            .setAuthor(`Product ${i+1} :`)
                                                                                                                                            .setDescription('** ** ** **')
                                                                                                                                            .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** size you want :\n<:example:801551839703072768> *For example, you can enter : `Size M or 9 …`*', false)
                                                                                                                                            .addField('__**Careful :**__', '<:Warning:778967970394406932> Shoe sizes are **only** in US size', false)
                                                                                                                                            .setTitle(':straight_ruler: __** What Size(s) you Have ?**__')).then(async () => {
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
