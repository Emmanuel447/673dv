
const { Client, EmbedBuilder } = require('discord.js-selfbot-v13');
require('./server');

const client = new Client();

const NOTIFICATION_CHANNEL_ID = process.env.CHANNEL_ID;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', async (member) => {
    try {
        const channel = await client.channels.fetch(NOTIFICATION_CHANNEL_ID);

        const embed = new EmbedBuilder()
            .setColor(0x2b2d31) // Dark neutral to blend like system UI
            .setAuthor({
                name: `Source Account: ${client.user.username}`,
                iconURL: client.user.displayAvatarURL()
            })
            .setDescription(
                `User **${member.user.username}** has joined server: **${member.guild.name}**`
            )
            .addFields({
                name: '\u200B',
                value: `[View Server](https://discord.com/channels/${member.guild.id})`
            })
            .setTimestamp();

        await channel.send({ embeds: [embed] });

    } catch (err) {
        console.error('Error sending notification:', err);
    }
});

client.login(process.env.TOKEN);