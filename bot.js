import * as Discord from "discord.js";
import * as ConfigFile from "./config";

const client: Discord.Client = new Discord.Client();
client.on("ready", () => {

    //let is know that the bot is online
    console.log("Ready to go!");
})

client.on("message", msg => {
    //Ignore message if it was sent by a bot
    if(msg.author.bot) { return; }

    //Ignore messages that don't start with prefix
    if(!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    msg.channel.send(`hi${msg.content.slice(2)}, im dad`)

    })
client.login(process.env.BOT_TOKEN);
