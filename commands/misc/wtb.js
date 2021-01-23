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
            .setTitle('<:takemymoney:780556014398472192> **__: WTB WTB WTB  :__** <:takemymoney:780556014398472192>')
            .setFooter(`by ${message.author.id} | Powered by The S-Mart`, client.user.displayAvatarURL())
            .setDescription('** ** ** **')
            .setTimestamp()
        try {
            message.author.send(new MessageEmbed()
                    .setTitle('<:takemymoney:780556014398472192> __**Wanna Buy ?**__')
                    .setTimestamp()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .addField(' __**How does it work ?**__', '<:Arrow:778967880230109185> Please **answer** or **react** to **all** questions to create the post.\n<:Bot1:779069769856057384> **The bot will now ask you some details about your post !!!**', false)
                    .addField('__**Careful ?**__', '<:Warning:778967970394406932> **You have 90 secs to answer each question !!!**', false)
                    .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Remember that, **the more details** you provide to your post, **the better are** your chances to sell/buy/trade your product(s) !!!\n** ** ** **\n** ** ** **', false)
                    .addField('Please react with 🛒 to start !!!', '** ** ** **', false)
                    .setDescription('<a:Hi:792339295238094859> Hi user, thank you for creating a post with The S-Mart !!!\nNeed some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!\n** ** ** **'))
                .then(async startMessage => {



                    startMessage.react('🛒')
                    const collector = startMessage.createReactionCollector(

                        (reaction, user) => ['🛒'].includes(reaction.emoji.name) && user.id === message.author.id,

                        {
                            time: 90000
                        }
                    )
                    let answers = [];

                    let channel;
                    let city;
                    let qty;
                    collector.on('collect', async reaction => {

                        if (reaction.emoji.name === '🛒') {
                            const filter = (user) => user.author.id === message.author.id
                            const filterr = (reaction, user) => user.id === message.author.id
                            message.author.send(new MessageEmbed()
                                    .setTimestamp()
                                    .setFooter(client.user.username, client.user.displayAvatarURL())
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
                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818> !!!\n** ** ** **'))
                                .then(async () => {
                                    message.author.dmChannel.awaitMessages(filter, {
                                            max: 1,
                                            time: 120000,
                                            errors: ['time']
                                        })
                                        .then(async channelchoice => {
                                            let channels = await channelchoice.first().content.split(' ')
                                            if(channels.length > 3) return message.author.send('Oopsie... You can\'t seletc more than 3 channels !!!')
                                            let channelNumbers = [];
                    
                                            for (index = 0; index < channels.length; index++) {
                                                var matches = channels[index].match(/(\d+)/); 
                                  
                                                if (matches) { 
                                                    if(channelNumbers.includes(matches[0])) return message.author.send('Oopsie daisy... You entered the same number !!!')
                                                channelNumbers.push(matches[0])
                                                }
                                            }
                                            let ChannelsToSend = [];
                                            for(let i = 0; i < channels.length; index++){
                                                switch (channelNumbers[i]) {
                                                    case '1':
                                                        ChannelsToSend.push('797170482976784394')
    
                                                        break;
    
                                                    case '2':
                                                        ChannelsToSend.push('797170634093232168')
    
                                                        break;
                                                    case '3':
                                                        ChannelsToSend.push('797170557597646848')
    
                                                        break;
    
                                                    case '4':
                                                        ChannelsToSend.push('795374898004230195')
    
                                                        break;
                                                    case '5':
                                                        ChannelsToSend.push('795375038790238228')
    
                                                        break;
    
                                                    case '6':
                                                        ChannelsToSend.push('796460312093130783')
    
                                                        break;
                                                    case '7':
                                                        ChannelsToSend.push('799346637309739030')
    
                                                        break;
    
                                                    case '8':
                                                        ChannelsToSend.push('799346776360484964')
    
                                                        break;
                                                    case '9':
                                                        ChannelsToSend.push('799348739260284938')
    
                                                        break;
    
                                                    case '10':
                                                        ChannelsToSend.push('799346961324048455')
    
                                                        break;
    
                                                    case '11':
                                                        ChannelsToSend.push('801466168233295882')
    
                                                        break;
                                                    default:
                                                        return message.author.send('Oopsie... You entered a wrong number, Please restart with a number in the list !!!')
    
                                                }
                                            }
                                            







                                            await message.author.send(new MessageEmbed()
                                                .setTimestamp()
                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                .setTitle(':flag_eu: __**What is your Location ?**__')
                                                .setAuthor('Step 2 :')
                                                .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **select** your location in the following list :\n<:Arrow:778967880230109185> Your location informs other users that you might be close to them !!!\n<:example:801551839703072768> *For example, you can enter : `1 or 2 or 3 …`*',false)
                                                .addField('__**Notes :**__', '<a:Verified1:778656791332257813> Location **increase** the chance of possible Meet-Up, and **saves** some fees :wink:\n<a:Verified1:778656791332257813> Your post will **also** automatically be published in #Close to me 🔍',false)
                                                .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                            ).then(async () => {
                                                message.author.dmChannel.awaitMessages(filter, {
                                                        max: 1,
                                                        time: 300000,
                                                        errors: ['time']
                                                    })
                                                    .then(async country => {
                                                        switch (country.first().content) {
                                                            case '1':
                                                                answers.push(' ')

                                                                break;

                                                            case '2':
                                                                answers.push(' ')

                                                                break;
                                                            case '3':
                                                                answers.push(' ')

                                                                break;

                                                            case '4':
                                                                answers.push(' ')

                                                                break;
                                                            case '5':
                                                                answers.push(' ')

                                                                break;

                                                            case '6':
                                                                answers.push(' ')

                                                                break;
                                                            case '7':
                                                                answers.push(' ')

                                                                break;

                                                            case '8':
                                                                answers.push(' ')
                                                                break;
                                                            case '9':
                                                                answers.push(' ')

                                                                break;

                                                            case '10':
                                                                answers.push(' ')

                                                                break;

                                                            case '11':
                                                                answers.push(' ')

                                                                break;
                                                            default:
                                                                return message.author.send('Oopsie daisy... You entered a wrong number, Please restart with a number in the list !!!')

                                                        }

                                                        await message.author.send(new MessageEmbed()
                                                            .setTimestamp()
                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                            .setAuthor('Step 3 :')
                                                            .addField('__**Do you accept Meet-Up ?**__','<:Check:778698838521282612> Yes sir, I do !!!\n<:x_:778698838898507806> Nop, shipping only !!', false)
                                                            .addField('__**Hol\'Up Cowboy :**__','<a:Verified1:778656791332257813> We highly **recommend** that you specify your city for potential Meet-Ups to **increase** your chance of buying !!!', false)
                                                            .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                            .setTitle(':city_dusk: __**Do you want to Specify your City ?**__ ')).then(async (cityorNo) => {
                                                            await cityorNo.react('778698838521282612')

                                                            await cityorNo.react('778698838898507806')

                                                            let check;
                                                            cityorNo.awaitReactions(filterr, {
                                                                    time: 60000,
                                                                    max: 1
                                                                })
                                                                .then(async collected1 => {
                                                                        if (!collected1.first()) return message.author.send('Oopsie... You took too much time to react, Please restart !!!')
                                                                        switch (collected1.first().emoji.id) {
                                                                            case '778698838521282612':
                                                                                check = true

                                                                                break;

                                                                            case '778698838898507806':
                                                                                check = false
                                                                                answers.push('Not specified')
                                                                                break;
                                                                            default:
                                                                                return message.author.send('Oopsie... You took too much time to react, Please restart !!!')

                                                                        }
                                                                        if (check) {
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
                                                                        }


                                                                        await message.author.send(new MessageEmbed()
                                                                            .setTimestamp()
                                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                            .setAuthor('Step 4 :')
                                                                            .setTitle('<:cargo:801212710377095168> __**Do you Buy in Bulk ?**__')
                                                                            .addField('__**Are you buying in quantity ?**__','<:Check:778698838521282612> Yezzir !!\n<:x_:778698838898507806> Nah', false)
                                                                            .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                        ).then(async firstQuestion => {
                                                                            await firstQuestion.react('778698838521282612')

                                                                            await firstQuestion.react('778698838898507806')


                                                                            firstQuestion.awaitReactions(filterr, {
                                                                                    time: 60000,
                                                                                    max: 1
                                                                                })
                                                                                .then(collected1 => {
                                                                                    if (!collected1.first()) return message.author.send('Oopsie... You took too much time to react, Please restart !!!')
                                                                                    switch (collected1.first().emoji.id) {
                                                                                        case '778698838521282612':
                                                                                            answers.push('Yes')

                                                                                            break;

                                                                                        case '778698838898507806':
                                                                                            answers.push('No')

                                                                                            break;
                                                                                        default:
                                                                                            return message.author.send('Oopsie... You reacted with the wrong reaction, Please restart !!!')

                                                                                    }
                                                                                    //============================================================================================================

                                                                                    message.author.send(new MessageEmbed()
                                                                                        .setTimestamp()
                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                        .setAuthor('Step 5 :')
                                                                                        .setTitle('<:cash:782230505356787752> __**Is your Price Firm ?**__')
                                                                                        .addField('__**Are you flexible with your price ?**__','<:Check:778698838521282612> Yes I\'m am\n<:x_:778698838898507806> Nop', false)
                                                                                        .addField('__**Hol\'Up Amigos :**__','<a:Verified1:778656791332257813> Flexible price **favours negociation** and increase your chance of buyings, don\'t sleep on it !!!' false)
                                                                                        .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                    ).then(async secondQuestion => {
                                                                                        await secondQuestion.react('778698838521282612')

                                                                                        await secondQuestion.react('778698838898507806')


                                                                                        secondQuestion.awaitReactions(filterr, {
                                                                                                time: 60000,
                                                                                                max: 1
                                                                                            })
                                                                                            .then(collected2 => {
                                                                                                if (!collected2.first()) return message.author.send('Oopsie... You took too much time to react, Please restart !!!')
                                                                                                switch (collected2.first().emoji.id) {
                                                                                                    case '778698838521282612':
                                                                                                        answers.push('Yes')

                                                                                                        break;

                                                                                                    case '778698838898507806':
                                                                                                        answers.push('No')

                                                                                                        break;
                                                                                                    default:
                                                                                                        return message.author.send('Oopsie... You reacted with the wrong reaction, Please restart !!!')

                                                                                                }
                                                                                                await message.author.send(new MessageEmbed()
                                                                                                    .setTimestamp()
                                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                    .setAuthor('Step 6 :')
                                                                                                    .addField('__**Do you have References ?**__','<:Check:778698838521282612> Hell Yeah !!!n<:x_:778698838898507806> Nah, but soon !!!', false)
                                                                                                    .addField('__**One Sec Fam :**__','<a:Verified1:778656791332257813> We highly **suggest** that you to **take the time** to copy your link :wink:\n<a:Verified1:778656791332257813> References tremendously **increase the seriousness** of your post and will **boost** your chance of buying, don\'t sleep on it !!!', false)
                                                                                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                                    .setTitle('<:Refs:780745476387110913> __**Do you have References ?**__')).then(async (cityorNo) => {
                                                                                                    await cityorNo.react('778698838521282612')

                                                                                                    await cityorNo.react('778698838898507806')

                                                                                                    let checkCity;
                                                                                                    cityorNo.awaitReactions(filterr, {
                                                                                                            time: 60000,
                                                                                                            max: 1
                                                                                                        })
                                                                                                        .then(async collected1 => {
                                                                                                            if (!collected1.first()) return message.author.send('Oopsie... You took too much time to react, Please restart !!!')
                                                                                                            switch (collected1.first().emoji.id) {
                                                                                                                case '778698838521282612':
                                                                                                                    checkCity = true

                                                                                                                    break;

                                                                                                                case '778698838898507806':
                                                                                                                    checkCity = false
                                                                                                                    answers.push('Not specified')
                                                                                                                    break;
                                                                                                                default:
                                                                                                                    return message.author.send('Oopsie... You reacted with the wrong reaction, Please restart !!!')

                                                                                                            }
                                                                                                            if (checkCity) {
                                                                                                                message.author.send(new MessageEmbed()
                                                                                                                    .setTimestamp()
                                                                                                                    .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                    .setAuthor('Step 7 :')
                                                                                                                    .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **paste** your <:Twitter:780761305459720202>/<:insta:792445530986119238>/<:fb:780854030422769705> **link** to your Legit Check post !!!\n<:example:801551839703072768> *For example, you can paste : `https://twitter.com/itsmecidi/status/129…`*', false)
                                                                                                                    .addField('__**Careful :**__','<:Warning:778967970394406932> You can **only** paste **one** link !!!\n<a:Verified1:778656791332257813> Make sure to copy-paste the **entire** link !!', false)
                                                                                                                    .addField('__**Note :**__','<a:Verified1:778656791332257813> Note that **references** tremendously **increase the seriousness** of your post !!!', false)
                                                                                                                    .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                                                    .setTitle('<:Refs:780745476387110913> __**Paste your References Link :**__')).then(() => {
                                                                                                                    message.author.dmChannel.awaitMessages(filter, {
                                                                                                                            max: 1,
                                                                                                                            time: 150000,
                                                                                                                            errors: ['time']
                                                                                                                        })
                                                                                                                        .then(async twitter => {
                                                                                                                            answers.push(twitter.first().content)
                                                                                                                        })
                                                                                                                })
                                                                                                            }
                                                                                                            message.author.send(new MessageEmbed()
                                                                                                                .setTimestamp()
                                                                                                                .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                .setAuthor('Step 8 :')
                                                                                                                .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please **enter** the amount of fees you are ready to pay !!!\n<:Arrow:778967880230109185> If you want the **other part** to pay for the fees, you can enter `Seller`\n<:Arrow:778967880230109185> If your price **include** the shipping fees you can enter `Include`\n<:icons8idee480:801551839703072768> *For example, you can enter : `10€/Fr, 16€/EU or Include or Seller …`*', false)
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
                                                                                                                            .setAuthor('Step 9 :')
                                                                                                                            .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                                                            .addField('__**How many product ?','<:One:778698839020142603> For one product !!\n<:Two:778698838487728169> For two products !!\n<:Tree:778698838890250291> For three products !!' false)
                                                                                                                            .addField('__**Tip :**__','<:Warning:778967970394406932> You can **only buy up to 3** different **products** in a want to buy post !!' false)
                                                                                                                            .setTitle(':shopping_cart: __**How many Product(s) do you WTB ?**__')).then(async () => {
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
                                                                                                                                            .setTitle(':placard: __**What is the Name of your Product ${i+1} ?**__')).then(async () => {
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
                                                                                                                                                        .addField('__**What to do now ?**__','<:Arrow:778967880230109185> Please briefly **describe** your product ${i+1} !!!\n<:Arrow:778967880230109185> Specify the **color** you want !!!\n<:Arrow:778967880230109185> Don\'t forget to **mention all the characteristics** the product ${i+1} need to require !!!\n<:example:801551839703072768> *For example, you can enter : `Black Only, Need to be DS and still in it\’s original blister …`*', false)
                                                                                                                                                        .addField('__**Tips :**__','<a:Verified1:778656791332257813> Name all the characteristics that sellers need to know about your product(s) !!!\n<a:Verified1:778656791332257813> Try to be **concise**, precise and clear for all users !!!', false)
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
                                                                                                                                                                    .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** the size(s) you\'re looking for :\n<:example:801551839703072768> *For example, you can enter : `Size M or 8,5/9/9,5 …`*', false)
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
                                                                                                                                                                                .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** the condition you\’re looking for :\n<:example:801551839703072768> *For example, you can enter : `9,5 or DS …`*', false)
                                                                                                                                                                                .addField('__**Tip :**__','<a:Verified1:778656791332257813> Please check the **reminder down below** to learn about the different conditions !!', false)
                                                                                                                                                                                .addField('--------------------------------------------------------------------------------------------------','** ** ** **', false) 
                                                                                                                                                                                .addField(':bell: __**Friendly Reminder**__’,**7/10 :** Very Used\n**8/10 :** Used\n**9,5 :** Just tried/Worn Once\n**DS :** Deadstock = Brand New\n**VNDS :** Very near DS', false)
                                                                                                                                                                                .setTitle(':magic_wand: __**What Condition ?**__')).then(async () => {
                                                                                                                                                                                await message.author.dmChannel.awaitMessages(filter, {
                                                                                                                                                                                        max: 1,
                                                                                                                                                                                        time: 150000,
                                                                                                                                                                                        errors: ['time']
                                                                                                                                                                                    })
                                                                                                                                                                                    .then(async buyingConditions => {
                                                                                                                                                                                        answers.push(buyingConditions.first().content)
                                                                                                                                                                                        await message.author.send(new MessageEmbed()
                                                                                                                                                                                            .setTimestamp()
                                                                                                                                                                                            .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                                                                            .setAuthor('Product ${i+1} :')
                                                                                                                                                                                            .setDescription('** ** ** **')
                                                                                                                                                                                            .addField('__**What to do now ?**__', '<:Arrow:778967880230109185> Please **enter** the price you\'re looking :\n<:example:801551839703072768> *For example, you can enter : `500€ / 450£ …`*', false)
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
                                                                                                                                        .addField(':satellite_orbital: __**Location :**__', `${answers[0]}`, true)
                                                                                                                                        .addField(':triangular_flag_on_post: __**Meet-Up :**__', `${answers[1]}`, true)
                                                                                                                                    if (checkCity) embed.addField(':ninja: __**Refs :**__', `[Click here](${answers[4]})`, true);
                                                                                                                                    else embed.addField(':ninja: __**Refs :**__', 'None', true);
                                                                                                                                    embed
                                                                                                                                        .addField('<:cargo:801212710377095168> __**Bulk :**__', answers[2], true)
                                                                                                                                        .addField('<:icons8roche96:801212710154403890> __**Nego :**__', answers[3], true)
                                                                                                                                        .addField(':cactus: __**Shipping Fees :**__', `${answers[5]}`, true)
                                                                                                                                        .setColor('#0047FF')
                                                                                                                                    embed.addField('————————————————————————————————————', '** ** ** **', false)
                                                                                                                                    let i = 6
                                                                                                                                    for (let o = 0; o < qty; o++) {
                                                                                                                                        embed.addField(':shopping_cart: __**Product ${o+1} : ${answers[i]}**__', answers[i + 1], false)
                                                                                                                                        i = i + 2
                                                                                                                                        embed.addField(':straight_ruler: __**Size :**__', answers[i], true)
                                                                                                                                        i = i + 1
                                                                                                                                        embed.addField(':magic_wand: __**Condition :**__', answers[i], true)
                                                                                                                                        i = i + 1
                                                                                                                                        embed.addField('<:cash:782230505356787752> __**Price :**__', answers[i], true)
                                                                                                                                        embed.addField('\u200b', '\u200b', false)
                                                                                                                                        i = i + 1
                                                                                                                                    }
                                                                                                                                    await message.author.send(embed)
                                                                                                                                    await message.author.send(new MessageEmbed()
                                                                                                                                        .setTimestamp()
                                                                                                                                        .setFooter(client.user.username, client.user.displayAvatarURL())
                                                                                                                                        .setDescription('Need some <:Help:778973470792876032>, come open a ticket in <#778302895526903818>\n** ** ** **')
                                                                                                                                        .addField('__**Careful :**__’,’<:Warning:778967970394406932> Please check that **all** your details are  correct !!', false)
                                                                                                                                        .addField('__**Good to Go ? :**__’,’<:Check:778698838521282612> Yes sir, all my infos are correct, send the post !!!\n<:x_:778698838898507806> Nop, I f\****\*up somewhere, lemme restart !!', false)
                                                                                                                                        .setTitle('<:SpongebobCaveman:802142424088051712> __**All Good Boss ?**__')).then(async (sendOrNo) => {
                                                                                                                                        await sendOrNo.react('778698838521282612')

                                                                                                                                        await sendOrNo.react('778698838898507806')

                                                                                                                                        sendOrNo.awaitReactions(filterr, {
                                                                                                                                                time: 60000,
                                                                                                                                                max: 1
                                                                                                                                            })
                                                                                                                                            .then(async result => {
                                                                                                                                                if (!result.first()) return message.author.send('Oopsie... You took too much time to react, Please restart !!!')
                                                                                                                                                switch (result.first().emoji.id) {
                                                                                                                                                    case '778698838521282612':
                                                                                                                                                        for(channelTo of ChannelsToSend) await channelTo.send(embed);
                                                                                                                                                        message.author.send('Well done <@idDuGars> your post have just been sent <:SpongebobCaveman:802142424088051712> !!!')

                                                                                                                                                        break;

                                                                                                                                                    case '778698838898507806':
                                                                                                                                                        return message.author.send('Cancelling...')
                                                                                                                                                        break;
                                                                                                                                                    default:
                                                                                                                                                        return message.author.send('Oopsie... You reacted with the wrong reaction, Please restart !!!')

                                                                                                                                                }


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
                                                                    }





                                                                )
                                                        })
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
            message.channel.send('Hi <@idDuGars>, for some reasons I couldn\'t dm you, Please check your DM\'s settings or open a ticket !!!')
        }







    }
}
