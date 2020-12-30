module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        const config = require('../../config/bot');
        if (!(message.channel.id && message.channel.id === config.discord.channel)) return;

        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already paused !`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};