const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk2NDgwNTY5NTUwMTc2MzY4.XopWNg.-TRbcvgrTMiGZOndsJRzH6_KvXU';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO MY FRIEND');
    }
})


bot.login(token);
