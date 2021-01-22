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
            .setTitle('__WTB: ' + message.author.tag + '__\n=====================================================')
            .setFooter(`by ${message.author.id} | Dm for more info`, client.user.displayAvatarURL())
            .setTimestamp()
        try {
            message.author.send(new MessageEmbed().setTitle('<:takemymoney:780556014398472192> __**Wanna Buy ?**__')
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .addField(' __**How does it work ?**__', '<:Arrow:778967880230109185> Please answer or react to **all** questions to create the post.\n<:Bot1:779069769856057384> **The bot will now ask you some details about your post !!!**', false)
                .addField('__**Careful ?**__', '<:Warning:778967970394406932> **You have 90 secs to answer each question !!!**\n<:Warning:778967970394406932> All answers **must** match to your product(s) characteristics !!', false)
                .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Remember that, the more details you provide to your post, the better are your chances to sell/buy/trade your product(s) !!!\n** ** ** **\n** ** ** **', false)
                .addField('Please react with :shopping_cart: to start !!!', '** ** ** **', false)
                .setDescription('<a:Hi:792339295238094859> Hi user thank you for creating a post with The S-Mart !!!\nNeed some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!\n** ** ** **')
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
                            .setFooter(client.user.username, client.user.displayAvatarURL())
                            .setTitle(':pushpin: __**Please select a Channel(s) for your post :**__')
                            .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **select** the channel(s) where your post will be publish !!!\n<:Arrow:778967880230109185> You can select up to **3** channels !!!\n<:Arrow:778967880230109185> If more then one channel separate each number with an `,` *Eg :* `1,4,9`', false)
                            .addfield('__**Careful :**__', '<:Warning:778967970394406932> Please **select** the **appropriate** channel for your post. *For example : No clothes in Sneakers Deli !!!*', false)
                            .addfield('__**Fresh Drop Grocery 🍉**__', 'soon', true)
                            .addfield('__**Sneakers Deli 🍔**__', '1. <#797170482976784394>\n2.<#797170634093232168>\n3. <#797170557597646848>\n4. <#795374898004230195\n5. <#795375038790238228>', true)
                            .addfield('__**Supreme-Eleven 🏪**__', '6. <#796460312093130783>', true)
                            .addfield('__**Clothes Gourmet\'s 🍸**__', '7. <#799346637309739030>\n8. <#799346776360484964>\n9. <#799348739260284938>\n10. <#799346961324048455>', true)
                            .addfield('__**General-Store 🛒**__', '11. <#801466168233295882>', true)
                            .addauthor('Step 1 :')
                            .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!!\n** ** ** **')
                            .then(async () => {
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
                                                return message.author.send('Oopsy... You entered a wrong number, please restart !!!')

                                        }







                                        await message.author.send(new MessageEmbed()
                                            .setTimestamp()
                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                            .setTitle(':flag_eu: __**What is your Location ?**__')
                                            .addauthor('Step 2 :')
                                            .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **select** your location in the following list :\n<:Arrow:778967880230109185> Your location informs other users that you might be close to them !!!\n<:example:801551839703072768> *For example you can enter : `1 or 2 or 3 …`*', false)
                                            .addfield('__**Notes :**__', '<a:Verified1:778656791332257813> Location **increase** the chance of possible Meet-Up, and save some fees :wink:\n<a:Verified1:778656791332257813> Your post will **also** automatically be published in #Close to me 🔍', false)
                                            .setdescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
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
                                                            .addauthor('Step 3 :')
                                                            .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **react** with <:Check:778698838521282612> if you accept Meet-Ups !!!\n<:Arrow:778967880230109185> React with <:x_:778698838898507806> if you refuse Meet-Ups !!!', false)
                                                            .addfield('__**Note :**__', '<a:Verified1:778656791332257813> We highly **recommend** that you specify your city for potential Meet-Ups to **increase** your chance of selling/buying !!!', false)
                                                            .adddescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                            .setTitle(':city_dusk: __**Do you want to specify your City ?**__ ')).then(async () => {
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
                                                                            .addauthor('Step 3 :')
                                                                            .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **enter** your city/nearest city :\n<:Arrow:778967880230109185> All other users will be able to see in which city you prefer to Meet-Up <a:party:795264786849595422>\n<:example:801551839703072768> *For example you can enter : `Paris`/`Paris 4eme`*', false)
                                                                            .adddescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                            .setTitle(':cityscape: __**Which City or nearest city you want to Meet-Up ?**__')).then(async () => {
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
                                                                        .addauthor('Step 4 :')
                                                                        .setTitle('<:cargo:801212710377095168> __**Do you Buy in Bulk ?**__')
                                                                        .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Are you buying in quantity ?\n<:Check:778698838521282612> Yes\n<:x_:778698838898507806> No', false)
                                                                        .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                    ).then(async firstQuestion => {
                                                                        await firstQuestion.react('<:Check:778698838521282612>')

                                                                        await firstQuestion.react('<:x_:778698838898507806>')


                                                                        firstQuestion.awaitReactions(filterr, {
                                                                                time: 60000,
                                                                                max: 1
                                                                            })
                                                                            .then(collected1 => {
                                                                                if (!collected1.first()) return message.author.send('Time expired, please restart.')
                                                                                switch (collected1.first().emoji.name) {
                                                                                    case '<:Check:778698838521282612>':
                                                                                        answers.push('Yes')

                                                                                        break;

                                                                                    case '<:x_:778698838898507806>':
                                                                                        answers.push('No')

                                                                                        break;
                                                                                    default:
                                                                                        return message.author.send('Wrong reaction, please restart.')

                                                                                }
                                                                                //============================================================================================================

                                                                                message.author.send(new MessageEmbed()
                                                                                    .setTimestamp()
                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                    .addauthor('Step 5 :')
                                                                                    .setTitle('<:cash:782230505356787752> __**Is your Price Firm ?**__')
                                                                                    .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Are you flexible with your price :\n<:Check:778698838521282612> Yes\n<:x_:778698838898507806> No', false)
                                                                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                ).then(async secondQuestion => {
                                                                                    await secondQuestion.react('<:Check:778698838521282612>')

                                                                                    await secondQuestion.react('<:x_:778698838898507806>')


                                                                                    secondQuestion.awaitReactions(filterr, {
                                                                                            time: 60000,
                                                                                            max: 1
                                                                                        })
                                                                                        .then(collected2 => {
                                                                                            if (!collected2.first()) return message.author.send('Time expired, please restart.')
                                                                                            switch (collected2.first().emoji.name) {
                                                                                                case '<:Check:778698838521282612>':
                                                                                                    answers.push('Yes')

                                                                                                    break;

                                                                                                case '<:x_:778698838898507806>':
                                                                                                    answers.push('No')

                                                                                                    break;
                                                                                                default:
                                                                                                    return message.author.send('Wrong reaction, please restart.')

                                                                                            }

                                                                                            message.author.send(new MessageEmbed()
                                                                                                .setTimestamp()
                                                                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                .addauthor('Step 6 :')
                                                                                                .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **paste** your <:Twitter:780761305459720202>/<:insta:792445530986119238/<:fb:780854030422769705> **link** to your Legit Check post !!!\n<:example:801551839703072768> *For example you can paste : `https://twitter.com/itsmecidi/status/129…`*', false)
                                                                                                .addfield('__**Careful :**__', ' <:Warning:778967970394406932> You can **only** post **one** link !!!', false)
                                                                                                .addfield('__**Notes :**__', '<a:Verified1:778656791332257813> Note that references **increase** tremendously the seriousness of your post !!!\n<a:Verified1:778656791332257813> We highly suggest that you to take the time to copy your link :wink:', false)
                                                                                                .adddescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
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
                                                                                                            .addauthor('Step 7 :')
                                                                                                            .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **enter** the amount of fees you are ready to pay !!!\n<:Arrow:778967880230109185> If you want the other part to pay the shipping fees, you can enter `Seller/Buyer`\n<:icons8idee480:801551839703072768> *For example you can enter : `10€/Fr, 16€/EU, 20€/UK`*', false)
                                                                                                            .addfield('__**Careful :**__', '<:Warning:778967970394406932> Fees are **only** in Euros **€** :euro: or Pound **£** :pound: !!!\n<:Warning:778967970394406932> Don’t forget to **specify** your **currency** :globe_with_meridians: !!!', false)
                                                                                                            .adddescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                                            .setTitle(':package: __**How much Shipping Fees are you willing to Pay ?**__')).then(async () => {
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
                                                                                                                        .addauthor('Step 8 :')
                                                                                                                        .adddescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                                                        .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> You can post up to 3 products in a WTB post !!!\n<:Arrow:778967880230109185> Please, **react** with the number of product you WTB !!!\n<:One:778698839020142603> For one product !\n<:Two:778698838487728169> For two products !\<:Tree:778698838890250291> For three products !', false)
                                                                                                                        .setTitle(':shopping_cart: __**Now, choose the Number of Product you Want to Buy ?**__')).then(async () => {
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
                                                                                                                                        .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **enter** the title of your post !!!\n<:example:801551839703072768> *For example you can enter : `Box Logo Hoodie, FW16, Black, Size M`*', false)
                                                                                                                                        .addfield('__**Notes :**__', '<a:Verified1:778656791332257813> Your title **must** be concise, precise and clear for all users !!!\n<a:Verified1:778656791332257813> Don\'t be to specific, leave some for the description :wink:', false)
                                                                                                                                        .addauthor('Product 1 :')
                                                                                                                                        .setTitle(':placard: __**What is the Title of your Post ?**__')).then(async () => {
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
                                                                                                                                                    .addauthor('Product 1 :')
                                                                                                                                                    .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, briefly **describe** your product and it specificities !!!\n<:Arrow:778967880230109185> Specify the **color** and **mention** all it characteristics *Eg : damage box …\n<:example:801551839703072768> *For example you can enter : `Color : Black, still on it\’s original blister`*', false)
                                                                                                                                                    .addfield('__**Notes :**__', '<a:Verified1:778656791332257813> Name all the characteristics that other users need to know about your product !!!', false)
                                                                                                                                                    .setTitle(':bookmark_tabs: __**Now it\’s time to Describe your Product :**__')).then(async () => {
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
                                                                                                                                                                .addauthor('Product 1 :')
                                                                                                                                                                .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **enter** the size(s) you\'re looking for :\n<:example:801551839703072768> *For example you can enter : `Size M or 8,5/9/9,5…`*', false)
                                                                                                                                                                .addfield('__**Careful :**__', '<:Warning:778967970394406932> Shoe sizes are **only** in US size', false)
                                                                                                                                                                .setTitle(':straight_ruler: __** What is/are the Size(s) you looking for ?**__')).then(async () => {
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
                                                                                                                                                                            .addauthor('Product 1 :')
                                                                                                                                                                            .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **enter** the conditions you\’re looking for :<:Arrow:778967880230109185> Please check the **reminder** down below for the different conditions !!!\n<:example:801551839703072768> *For example you can enter : `DS`*\n** ** ** **', false)
                                                                                                                                                                            .addfield(':bell: __**Friendly Reminder**__’,**7/10 :** Very Used\n**8/10 :** Used\n**9,5 :** Just tried/Worn Once\n**DS :** Deadstock = Brand New\n**VNDS :** Very near DS', false)
                                                                                                                                                                            .setTitle(':magic_wand: __**What Condition are you looking for ?**__')).then(async () => {
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
                                                                                                                                                                                        .addauthor('Product 1 :')
                                                                                                                                                                                        .addfield('__**What to do now ?**__', '<:Arrow:778967880230109185> Please, **enter** the price your looking for to buy :\n<:example:801551839703072768> *For example you can enter : `500€ / 450£`*', false)
                                                                                                                                                                                        .addfield('__**Careful :**__', '<:Warning:778967970394406932> Prices are **only** in euros **€** or pound **£**', false)
                                                                                                                                                                                        .setTitle(' <:cash:782230505356787752> __**One last thing, What Price are you looking for ?**__')).then(async () => {
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
                                                                                                                                    .addField(':satellite_orbital: **Location:**', `**${answers[0]}**`, true)
                                                                                                                                    .addField(':triangular_flag_on_post: **Meet-Up :**', `**${answers[1]}**`, true)
                                                                                                                                    .addField(':ninja: **Refs :**', `[Click here](${answers[4]})`, true)
                                                                                                                                    .addField('<:cargo:801212710377095168> **Bulk :**', answers[2], true)
                                                                                                                                    .addField('<:icons8roche96:801212710154403890> **Firm :**', answers[3], true)
                                                                                                                                    .addField(':cactus: **Shipping Fees :**', `**${answers[5]}**`, true)
                                                                                                                                    .setColor('#0047FF')
                                                                                                                                embed.addField('————————————————————————————————————', '** ** ** **', false)
                                                                                                                                let i = 6
                                                                                                                                for (let o = 0; o < qty; o++) {
                                                                                                                                    embed.addField(`:shopping_cart: __**Product ${o+1} : ${answers[i]}__**`, answers[i + 1], false)
                                                                                                                                    i = i + 2
                                                                                                                                    embed.addField(':straight_ruler: **Size :**', answers[i], true)
                                                                                                                                    i = i + 1
                                                                                                                                    embed.addField(':magic_wand: **Condition :**', answers[i], true)
                                                                                                                                    i = i + 1
                                                                                                                                    embed.addField('<:cash:782230505356787752> **Price €/£ :**', answers[i], true)
                                                                                                                                    embed.addField('--------------------------------------------------------------------------------------------------', '** ** ** **', false)
                                                                                                                                    i = i + 1
                                                                                                                                }
                                                                                                                                client.channels.cache.get(channel).send(embed)

                                                                                                                                console.log(answers)
                                                                                                                            })
                                                                                                                            .catch(collected => {
                                                                                                                                message.author.dmChannel.send('Sorry <@idDuGars> you took too long to answer. Please restart !!! (2 minutes)');
                                                                                                                            });
                                                                                                                    });
                                                                                                                })
                                                                                                                .catch(() => {
                                                                                                                    message.author.dmChannel.send('Sorry <@idDuGars> you took too long to answer. Please restart !!! (5 minutes)');
                                                                                                                });
                                                                                                        });

                                                                                                    })
                                                                                                    .catch(collected => {
                                                                                                        message.author.dmChannel.send('Sorry <@idDuGars> you took too long to answer. Please restart !!! (5 minutes)');
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

                        )















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
