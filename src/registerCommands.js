const { REST, Routes } = require('discord.js');
require('dotenv').config();

const command = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    }
];


const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.BOT_CLIENT_ID, process.env.DISCORD_GUILD_ID), { body: command }
        )
        console.log('first')
    } catch (error) {
        console.log(`There was an error: ${error}`)
    }
})();
