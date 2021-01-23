const {
    MessageEmbed
} = require('discord.js');
const {
    cooldown
} = require('../../config.json');

module.exports = {
    name: 'wts',
    cooldown: cooldown,
    description: "Want to sell",
    async execute(message, args, client) {

        let embed = new MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL())
            .setTitle('<:takemymoney:780556014398472192> **__: WTS WTS WTS  :__** <:takemymoney:780556014398472192>')
            .setFooter(`by ${message.author.id} | Powered by The S-Mart`, client.user.displayAvatarURL())
            .setDescription('** ** ** **')
            .setTimestamp()
        try {
            message.author.send(new MessageEmbed().setTitle('Wanna sell ?')
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .addField(' __**How does it work ?**__', '<:Arrow:778967880230109185> Please **answer** or **react** to **all** questions to create the post.\n<:Bot1:779069769856057384> **The bot will now ask you some details about your post !!!**', false)
                .addField('__**Careful ?**__', '<:Warning:778967970394406932> **You have 90 secs to answer each question !!!**\n<:Warning:778967970394406932> All answers **must match** to your product(s) **characteristics** !!!', false)
                .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Remember that, **the more details** you provide to your post, **the better are** your chances to sell/buy/trade your product(s) !!!\n** ** ** **\n** ** ** **', false)
                .addField('Please react with :shopping_cart: to start !!!', '** ** ** **', false)
                .setDescription('<a:Hi:792339295238094859> Hi user, thank you for creating a post with The S-Mart !!!\nNeed some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!\n** ** ** **'))
                .setDescription('I will ask you some questions, you have 60 seconds each time to answer. Just react to the corresponding reaction or give an answer (more time will be included when I ask text). Please wait for all the reactions to show up before reacting. If it\'s not working, try to re-react again.\nPlease react with 🟢 to start.')
            ).then(async startMessage => {



                startMessage.react(':shopping_cart:')
                const collector = startMessage.createReactionCollector(

                    (reaction, user) => [':shopping_cart:'].includes(reaction.emoji.name) && user.id === message.author.id,

                    {
                        time: 90000
                    }
                )
                let answers = [];

                let channel;
                let city;
                let qty;
                collector.on('collect', async reaction => {

                    if (reaction.emoji.name === ':shopping_cart:') {
                        const filter = (user) => user.author.id === message.author.id
                        const filterr = (reaction, user) => user.id === message.author.id
                        message.author.send(new MessageEmbed()
                            .setTimestamp()
                      .setTitle(':pushpin: __**Please Select a Channel(s) for your Post :**__')
                      .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **select** the channel(s) where your post will be publish !!\n<:Arrow:778967880230109185> You can select **up to 3** channels in the list down below !!\n<:Arrow:778967880230109185> If you select **more then one** channel, separate each number with a `,` !!!\n<:example:801551839703072768> *For example, you can enter : `1 or 1,8 or 1,8,9 …`*'false)
                      .addField('__**Careful :**__', '<:Warning:778967970394406932> Please select the **appropriate** channel for your post !!\n:no_entry_sign: *No clothes in Sneakers Deli !!!*', false)
                      .addField('--------------------------------------------------------------------------------------------------','** ** ** **'false)
                      .addField('__**Fresh Drop Grocery 🍉**__', 'Soon', true)
                      .addField('__**Sneakers Deli 🍔**__', '1. <#797170482976784394>\n2.<#797170634093232168>\n3. <#797170557597646848>\n4. <#795374898004230195>\n5. <#795375038790238228>', true)
                      .addField('__**Supreme-Eleven 🏪**__', '6. <#796460312093130783>', true)
                      .addField('__**Clothes Gourmet\'s 🍸**__', '7. <#799346637309739030>\n8. <#799346776360484964>\n9. <#799348739260284938>\n10. <#799346961324048455>', true)
                      .addField('__**General-Store 🛒**__', '11. <#801466168233295882>', true)
                      .setAuthor('Step 1 :')
                      .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!!\n** ** ** **')).then(async () => {
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
                                        .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **select** your location in the following list :\n<:Arrow:778967880230109185> Your location **informs** other users that you **might** be **close to them** <a:pepelaser:802479990183952384> !!!\n<:example:801551839703072768> *For example, you can enter : `1 or 2 or 3 …`*',false)
                                        .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Location **increase** the chance of **possible Meet-Ups**, and **saves** some fees :wink:\n<a:Verified1:778656791332257813> Your post will **also** automatically be **posted** in #Close to me 🔍 !!',false)
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
                                        .addField('**10. Switzerland :**',':cheese:<:fondu:779055906519646238>' true)
                                        .addField('**11. Norway :**',':mountain_snow::evergreen_tree:' true)
                                        .addField('**12. Sweden :**','<:viking:801042386658525214>' true)
                                        .addField('**13. Danmark :**','<:bike:801048914639061002>' true)
                                        .addField('**14. Poland :**',':nesting_dolls:' true)
                                        .addField('**15. Romania :**',':vampire:' true)                        
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
                                                    .setAuthor('Step 2 :')
                                                    .addField('__**Do you accept Meet-Up ?**__','<:Check:778698838521282612> Yes sir, I do !!!\n<:x_:778698838898507806> Nop, shipping only !!', false)
                                                    .addField('__**Hol\'Up Cowboy :**__','<a:Verified1:778656791332257813> We highly **recommend** that you specify your city for potential Meet-Ups to **increase** your chance of buying !!!', false)
                                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                    .setTitle(':city_dusk: __**Do you want to Specify your City ?**__ ')).then(async () => {
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
                                                                    .addField('__**Notes :**__','<a:Verified1:778656791332257813> If you live in a small place, we **recommend** you enter the nearest big city !!\nThe bigger is your city, the higher are your chances of meeting-up :wink:' false)
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
                                                                .addField('__**Do you have References ?**__','<:Check:778698838521282612> Hell Yeah !!!n<:x_:778698838898507806> Nah, but soon !!!', false)
                                                                .addField('__**One Sec Fam :**__','<a:Verified1:778656791332257813> We highly **suggest** that you to **take the time** to copy your link :wink:\n<a:Verified1:778656791332257813> References tremendously **increase the seriousness** of your post and will **boost** your chance of selling, don\'t sleep on it !!!', false)
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
                                                                            .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **enter** your shipping fees !!!\n<:Arrow:778967880230109185> If you want the **other part** to pay for the fees, you can enter `Buyer`\n<:Arrow:778967880230109185> If your price **include** the shipping fees you can enter `Include`\n<:icons8idee480:801551839703072768> *For example, you can enter : `10€/Fr, 16€/EU or Include or Buyer …`*', false)
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




                                                                                    await message.author.send(new MessageEmbed()
                                                                                        .setTimestamp()
                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                        .setAuthor('Step 6 :')
                                                                                        .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                        .addField('__**How many product ?','<:One:778698839020142603> For one product !!\n<:Two:778698838487728169> For two products !!\n<:Tree:778698838890250291> For three products !!' false)
                                                                                        .addField('__**Tip :**__','<:Warning:778967970394406932> You can **only buy up to 3** different **products** in a want to sell post !!' false)
                                                                                        .setTitle(':shopping_cart: __**How many Product(s) do you WTS ?**__)).then(async () => {
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
                                                                                                        return message.author.send('Oopsie... You entered a wrong number, Please enter a number between 1-3 only !!!')
                                                                                                }




                                                                                                //                          //
                                                                                                //      PRODUCT LOOP        //
                                                                                                //                          //                                                                                            
                                                                                                for (let i = 0; i < qty; i++) {
                                                                                                    await message.author.send(new MessageEmbed()
                                                                                                        .setTimestamp()
                                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                        .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** the **name** of your product ${i+1} !!!\n<:example:801551839703072768> *For example, you can enter : `Box Logo Hoodie, FW16 …`*', false)
                                                                                                        .addField('__**Tips :**__', '<a:Verified1:778656791332257813> Try to be **concise**, precise and clear for all users !!!\n<a:Verified1:778656791332257813> Don\'t be to specific, leave some for the description :wink:', false)
                                                                                                        .setDescription('** ** ** **')
                                                                                                        .setAuthor('Product ${i+1} :')
                                                                                                        .setTitle(':placard: __**What Product are you Selling :**__')).then(async () => {
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
                                                                                                                    .setAuthor('Product ${i+1} :')
                                                                                                                    .setDescription('** ** ** **')
                                                                                                                    .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please briefly **describe** your product ${i+1} !!!\n<:Arrow:778967880230109185> Specify the **color** you\'re selling !!!\n<:Arrow:778967880230109185> Don\'t forget to **mention all the characteristics** of your product ${i+1} !!!\n<:example:801551839703072768> *For example : `Black Color, still in OG blister. Receipt available …`*', false)
                                                                                                                    .addField('__**Tips :**__','<a:Verified1:778656791332257813> Name all the characteristics that buyers need to know before buying your product(s) !!!\n<a:Verified1:778656791332257813> Try to be **concise**, precise and clear for all users !!!', false)
                                                                                                                    .setTitle(':bookmark_tabs: __**Describe your Product ${i+1} :**__')).then(async () => {
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
                                                                                                                                .setAuthor('Product ${i+1} :')
                                                                                                                                .setDescription('** ** ** **')
                                                                                                                                .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** the size(s) you have :\n<:example:801551839703072768> *For example, you can enter : `Size M or 8,5/9/9,5 …`*', false)
                                                                                                                                .addField('__**Careful :**__', '<:Warning:778967970394406932> Shoe sizes are **only** in US size', false)
                                                                                                                                .setTitle(':straight_ruler: __** What Size(s) ?**__')).then(async () => {
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
                                                                                                                                            .setAuthor('Product ${i+1} :')
                                                                                                                                            .setDescription('** ** ** **')
                                                                                                                                            .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** the condition of your product ${i+1} :\n<:example:801551839703072768> *For example, you can enter : `9,5/10 or DS …`*', false)
                                                                                                                                            .addField('__**Careful :**__','<:Warning:778967970394406932> Please be **frank** and **honest** about the condition of you product :face_with_monocle: !!', false)
                                                                                                                                            .addField('__**Tip :**__','<a:Verified1:778656791332257813> Please check the **reminder down below** to learn about the different conditions !!', false)
                                                                                                                                            .addField('--------------------------------------------------------------------------------------------------','** ** ** **', false) 
                                                                                                                                            .addField(':bell: __**Friendly Reminder**__’,**7/10 :** Very Used\n**8/10 :** Used\n**9,5 :** Just tried/Worn Once\n**DS :** Deadstock = Brand New\n**VNDS :** Very near DS', false)
                                                                                                                                            .setTitle(':magic_wand: __**What Condition ?**__')).then(async () => {
                                                                                                                                            await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                    max: 1,
                                                                                                                                                    time: 180000,
                                                                                                                                                    errors: ['time']
                                                                                                                                                })
                                                                                                                                                .then(async buyingConditions => {
                                                                                                                                                    answers.push(buyingConditions.first().content)
                                                                                                                                                    await message.author.send(new MessageEmbed()
                                                                                                                                                        .setTimestamp()
                                                                                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                        .setAuthor('Product ${i+1} :')
                                                                                                                                                        .setDescription('** ** ** **')
                                                                                                                                                        .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** your price for the product ${i+1} :\n<:example:801551839703072768> *For example, you can enter : `500€ / 450£ …`*', false)
                                                                                                                                                        .addField('__**Careful :**__', '<:Warning:778967970394406932> Prices are **only** in euros **€** or pound **£**', false)
                                                                                                                                                        .setTitle(' <:cash:782230505356787752> __**What Price ?**__')).then(async () => {
                                                                                                                                                        await message.author.dmChannel.awaitMessages(filter, {
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
                                                                                                    .addField(':satellite_orbital: __**Location :**__', answers[0], true)
                                                                                                    .addField('**:triangular_flag_on_post: __**Meet-Up :**__', answers[1], true)
                                                                                                    .addField('**:ninja: __**Refs :**__', `[Click here](${answers[2]})`, true)

                                                                                                    .addField(':cactus: __**Shipping Fees :**__', answers[3], true)
                                                                                                    .setColor('#FF0000')
                                                                                                embed.addField('——————————————————————————————————————', '\u200b', false)
                                                                                                let i = 4
                                                                                                for (let o = 0; o < qty; o++) {
                                                                                                    embed.addField(`:shopping_cart: __**Product ${o} : \"${answers[i]}\"**__`, answers[i + 1], false)
                                                                                                    i = i + 2
                                                                                                    embed.addField(':straight_ruler: __**Size :**__', answers[i], true)
                                                                                                    i = i + 1
                                                                                                    embed.addField(':magic_wand: __**Condition :**__', answers[i], true)
                                                                                                    i = i + 1
                                                                                                    embed.addField('<:cash:782230505356787752> __**Price :**__', answers[i], true)
                                                                                                    embed.addField('**---------------------------------------------------------------------------------------------**', '\u200b', false)
                                                                                                    i = i + 1
                                                                                                }
                                                                                          
                                                                                                client.channels.cache.get(channel).send(embed)

                                                                                                console.log(answers)
                                                                                            })
                                                                                            .catch(collected => {
                                                                                                message.author.dmChannel.send('Oupsie... Sorry <@idDuGars> you took too long to answer, Please restart the process !!! (2 minutes)');
                                                                                            });
                                                                                    });
                                                                                })
                                                                                .catch(() => {
                                                                                    message.author.dmChannel.send('Oupsie... Sorry <@idDuGars> you took too long to answer, Please restart the process !!! (5 minutes)');
                                                                                });
                                                                        });

                                                                    })
                                                                    .catch(collected => {
                                                                        message.author.dmChannel.send('Oupsie... Sorry <@idDuGars> you took too long to answer, Please restart the process !!! (5 minutes)');
                                                                    });
                                                            });




                                                        })



                                                })



                                            })


                                    })
                                })
                        })



























                        //     🟢 🟠 🔴


                    } else {
                        message.author.send('Oopsie... You reacted with the wrong reaction, Please restart !!!').then(async msg => msg.delete({
                            timeout: 5000
                        }))
                    }

                })


            })




        } catch (err) {
            console.log(err)
            message.channel.send('Hi <@idDuGars>, for some reasons I couldn\'t dm you, Please check your DM\'s settings or open a ticket !!!')
        }







    }
}
