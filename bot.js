const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Mehdi");


client.on("ready", () => {
let channel =     client.channels.get("553580596366934031")
setInterval(function() {
channel.send(`لا الله الى انت سبحانك اني كنت من ضالمين`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
