const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612738429603807257")
setInterval(function() {
channel.send(`wwefwkejfhwkjehfkwjehkwjehkwjhfwkjhdkwjehwkjfh `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
