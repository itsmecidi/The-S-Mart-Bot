const { MessageEmbed } = require('discord.js');
const {
    cooldown
} = require('../../config.json');
const embedbuilder = require('godEmbed')
module.exports = {
    name: 'embed',
    cooldown: cooldown,
    description: "Command to create a new embed",
    async execute(message, args, client) {
        
        const { embed, errors } = embedbuilder(args.join(' '))
     console.log(embed)
     console.log(args)
        console.log(new MessageEmbed().setTitle('test'))
        message.channel.send({embed})
        if( errors.length > 0 ){
            message.channel.send('Please double check the syntax, see the documentation for more help: https://github.com/CamilleAbella/GodEmbed/blob/master/Module/docs.md\nList of error(s): ' + errors.join('\n') )
        }
        



        }
    }