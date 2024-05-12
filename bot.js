const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'MTIzNjk2NTg3NzE3MDMwNzEwMw.G7S4NI.wdlcLrvAeCF29S6IdbaWE-i3Bk2X5_BPrEQs6c';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(TOKEN);
